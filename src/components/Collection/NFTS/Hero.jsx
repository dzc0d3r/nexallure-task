import { Artist } from "@/components/Artist"
import { Badge } from "@/components/ui/Badge"
import Image from "next/image"
import React from "react"

const Hero = ({ name, description, image, artist }) => {
  return (
    <section className="container mx-auto grid min-h-96 w-full  max-w-[90%] items-center  gap-3 rounded-3xl  p-10 md:max-w-none md:grid-cols-2">
      <div className="flex flex-col items-center py-2 md:gap-1 md:py-5 lg:items-start">
        <Badge>trending now</Badge>
        <div className="my-2 py-5 ">
          <p className="text-center text-lg font-semibold  capitalize text-gray-700 md:text-start md:text-3xl">
            collection
          </p>
          <h2 className="text-center text-xl font-bold text-black/85 md:mb-3 md:text-start md:text-6xl">
            {name}
          </h2>
          <p className="my-2 line-clamp-4 text-center text-sm font-light text-black/80 md:text-start md:text-xl">
            {description}
          </p>
        </div>
        <Artist name={artist.name} image={artist.image} />
      </div>

      <div className="flex  w-full justify-center md:justify-end  ">
        <Image
          src={image}
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
