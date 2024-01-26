import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Artist } from "@/components/Artist"

const Hero = () => {
  return (
    <section className="container mx-auto grid min-h-96 w-full  max-w-[90%] items-center  gap-2 rounded-3xl bg-slate-200 p-10 md:max-w-none md:grid-cols-2">
      <div className="flex flex-col items-center py-2 md:gap-1 md:py-5 lg:items-start">
        <Badge>trending now</Badge>
        <div className="my-2 py-2">
          <h2 className="text-xl font-light text-black/50 md:text-3xl ">
            Night sky collection
          </h2>
          <p className="text-3xl font-semibold capitalize text-black/80 md:text-6xl">
            With the stars
          </p>
        </div>
        <Artist name="Léa Jacquot" image="artists/lea.svg" />
        <div className="flex flex-col justify-center gap-5 py-5 lg:flex-row lg:justify-start">
          <Button variant="primary">Buy</Button>
          <Button>See collection</Button>
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
