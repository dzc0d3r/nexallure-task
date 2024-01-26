"use client"
import Image from "next/image"
import { FaRegCopy, FaArrowCircleRight } from "react-icons/fa"

import { useAuth } from "@/components/Providers/AuthProvider"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
const Wallet = () => {
  const { openWallet, setOpenWallet, user, nfts } = useAuth()
  return (
    <div
      className={`${openWallet ? "block" : "hidden"} absolute right-0 top-0 z-50 
         mx-3 my-2 h-96 min-h-[37rem] w-72 rounded-xl border border-black/80 bg-white p-5 transition-all duration-300 ease-in-out`}
    >
      <div className="mb-10 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <Image
            src="avatar.svg"
            height={10}
            width={10}
            alt="avatar"
            className="h-7 w-7 rounded-full md:h-9 md:w-9"
          ></Image>
          <p className="text-xs">{user?.wallet.address}</p>
          <FaRegCopy />
        </div>

        <FaArrowCircleRight
          onClick={() => setOpenWallet(false)}
          className="text-2xl text-black/80 hover:cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1 text-3xl text-black/90">
        <h3 className="text-base font-light capitalize text-black/50">
          in you wallet
        </h3>

        <p className="font-semibold">
          0.129 <span className="mx-2">BTC</span>
        </p>
      </div>

      <div>
        {nfts?.length == 0 ? (
          <div className="my-10 flex flex-col gap-7 ">
            <h3 className="mb-10 text-xl font-semibold text-black/90">
              Your NFTS
            </h3>
            <p className="text-center text-base font-light text-black/50">
              You don&apos;t have any NFTs
            </p>
            <Link
              onClick={() => setOpenWallet(false)}
              className="text-center"
              href="/"
            >
              <Button variant="primary"> start shopping</Button>
            </Link>
          </div>
        ) : (
          <div>
            <h3 className="text-base font-light capitalize text-black/50">
              in you wallet
            </h3>
            <p className="font-semibold">
              0.129 <span className="mx-2">BTC</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wallet
