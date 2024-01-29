import Image from "next/image"

const Loading = () => {
  return (
    <div className="absolute right-0 top-0 z-40 grid h-screen w-screen place-content-center bg-slate-100 bg-opacity-90 ">
      <Image
        src="spinner.svg"
        alt="loading"
        width={100}
        height={100}
        className="z-50 mx-10 h-44 w-44"
      ></Image>
    </div>
  )
}

export default Loading
