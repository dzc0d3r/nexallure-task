import Image from "next/image"
import { Badge } from "../ui/Badge"
import { Artist } from "../Artist"
import { FaArrowRight } from "react-icons/fa"
import { Button } from "../ui/Button"

const Card = ({
  image,
  name,
  description,
  min_price,
  max_price,
  artist,
  id,
}) => {
  return (
    <div className="group flex min-h-[25rem] flex-col items-center rounded-3xl  px-5 py-7 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer lg:items-start">
      <div className="relative flex h-56 w-full justify-center">
        <div className="animate-in fade-in zoom-in absolute z-10 hidden h-full w-full place-content-center duration-500 group-hover:grid">
          <Button className="flex flex-row items-center gap-2">
            See collection
            <FaArrowRight />
          </Button>
        </div>
        <Image
          src={image}
          alt="with the stars"
          fill
          className="absolute bg-cover"
        ></Image>
      </div>

      <div className="mb-2 mt-5 flex w-full flex-row justify-between">
        <h3 className="text-lg font-semibold text-black/80 md:text-2xl">
          {name}
        </h3>
        <Badge variant="primary">
          <span className="text-light text-base uppercase">120 NFT</span>
        </Badge>
      </div>
      <div className="mb-10 flex flex-col items-start">
        <p className="mb-1 font-light  capitalize text-black/50">
          {" "}
          price range : {min_price} - {max_price} BTC{" "}
        </p>
        <p className="line-clamp-3 text-sm font-light text-black/80">
          {description}
        </p>
      </div>
      <Artist name={artist.name} image={artist.image} />
    </div>
  )
}

export default Card
