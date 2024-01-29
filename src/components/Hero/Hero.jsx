"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Artist } from "@/components/Artist"
import Link from "next/link"
import { useAuth } from "@/components/Providers/AuthProvider"
import { FaSpinner } from "react-icons/fa"
import { sleep } from "@/lib/utils"

const Hero = () => {
  const { user, setUser, isLoading, setIsLoading } = useAuth()
  const handleHeroBuy = async () => {
    if (!user) return

    setUser((user) => ({
      ...user,
      wallet: {
        ...user.wallet,
        nfts: [
          ...user.wallet.nfts,
          {
            name: "With the stars",
            price: 0.12,
            image: "nfts/with_the_stars.svg",
          },
        ],
      },
    }))
    setIsLoading(true)
    await sleep()
    setIsLoading(false)
  }
  return (
    <section className="container mx-auto grid min-h-96 w-full  max-w-[90%] items-center  gap-2 rounded-3xl bg-slate-200 p-10 md:max-w-none md:grid-cols-2">
      <div className="flex flex-col items-center py-2 md:gap-1 md:py-5 lg:items-start">
        <Badge>trending now</Badge>
        <div className="my-2 py-2">
          <h2 className="text-xl font-light text-black/50 md:text-3xl ">
            Night sky collection
          </h2>
          <p className="text-3xl font-semibold text-black/80 md:text-6xl">
            With the stars
          </p>
        </div>
        <Artist name="Léa Jacquot" image="artists/lea.svg" />
        <div className="flex flex-col justify-center gap-5 py-5 lg:flex-row lg:justify-start">
          {user ? (
            <Button
              onClick={handleHeroBuy}
              variant="primary"
              disabled={isLoading}
            >
              Buy{" "}
              {isLoading ? <FaSpinner className="mx-2 animate-spin" /> : null}
            </Button>
          ) : (
            <Link href={"/wallet"}>
              <Button variant="primary">Buy</Button>
            </Link>
          )}
          <Link href={"/1"}>
            <Button>See collection</Button>
          </Link>
        </div>
      </div>

      <div className="flex  w-full justify-center md:justify-end  ">
        <Image
          src="nfts/with_the_stars.svg"
          alt="with the stars"
          width={100}
          height={100}
          className="mx-10 h-60 w-60 lg:h-80  lg:w-80"
        ></Image>
      </div>
    </section>
  )
}

export default Hero
