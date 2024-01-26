import Image from "next/image"

const Artist = ({ name, image }) => {
  return (
    <div className="flex flex-row items-center gap-2 ">
      <Image
        src={image}
        width={50}
        height={50}
        alt="artist image"
        className="h-10 w-10 rounded-full md:h-16 md:w-16"
      ></Image>
      <div className="flex flex-col">
        <p className="text-xs font-light text-black/50 md:text-sm">artist</p>
        <p className="font-light text-black/90 md:text-lg">{name}</p>
      </div>
    </div>
  )
}

export default Artist
