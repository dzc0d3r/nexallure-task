import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { Button } from "../ui/Button"

const Hero = () => {
  return (
    <section className="max-auto container grid min-h-96 w-full  max-w-[90%] items-center  gap-2 rounded-3xl bg-slate-200 p-10 md:max-w-none md:grid-cols-2">
      <div className="flex flex-col items-start py-2 md:gap-1 md:py-5">
        <Badge>trending now</Badge>
        <div className="my-2 py-2">
          <h2 className="text-xl font-light text-black/50 md:text-3xl ">
            Night sky collection
          </h2>
          <p className="text-3xl font-semibold capitalize text-black/80 md:text-6xl">
            With the stars
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 ">
          <Image
            src={"artists/lea.svg"}
            width={50}
            height={50}
            alt="artist image"
            className="h-10 w-10 rounded-full md:h-16 md:w-16"
          ></Image>
          <div className="flex flex-col">
            <p className="text-xs font-light text-black/50 md:text-sm">
              artist
            </p>
            <p className="font-light text-black/90 md:text-lg">Lea Jacquot</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 py-5">
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
          className="mx-10 h-60 w-60 md:h-80  md:w-80"
        ></Image>
      </div>
    </section>
  )
}

export default Hero
