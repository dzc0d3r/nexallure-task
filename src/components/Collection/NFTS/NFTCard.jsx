"use client"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import React from "react"
import { FaArrowRight, FaSpinner } from "react-icons/fa"
import { useAuth } from "@/components/Providers/AuthProvider"
import { sleep } from "@/lib/utils"
import Link from "next/link"

const NFTCard = ({ name, price, image }) => {
  const { user, setUser, setIsLoading, isLoading } = useAuth()
  const handleBuy = async () => {
    if (!user) return

    setUser((user) => ({
      ...user,
      wallet: {
        ...user.wallet,
        nfts: [...user.wallet.nfts, { name, price, image }],
      },
    }))
    setIsLoading(true)
    await sleep()
    setIsLoading(false)
  }

  return (
    <div className="group flex min-h-[25rem] flex-col items-center rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer lg:items-start">
      <div className="relative flex h-full w-full justify-center">
        <div className="absolute right-0 top-0 z-10 hidden h-full w-full place-content-center transition-all duration-300 ease-in-out animate-in fade-in zoom-in group-hover:grid">
          {user ? (
            <Button
              disabled={isLoading}
              onClick={handleBuy}
              className="flex flex-row items-center gap-2"
            >
              Buy{" "}
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaArrowRight />
              )}
            </Button>
          ) : (
            <Link href="/wallet">
              <Button className="flex flex-row items-center gap-2">
                Buy <FaArrowRight />
              </Button>
            </Link>
          )}
        </div>
        <Image src={image} alt={name} fill className="absolute"></Image>
      </div>

      <div className="my-7 flex w-full flex-row justify-between px-2 md:px-8">
        <h3 className="text-lg font-semibold capitalize text-black/80 md:text-xl">
          {name}
        </h3>
        <Badge variant="primary">
          <span className="text-light text-base uppercase">{price} BTC</span>
        </Badge>
      </div>
    </div>
  )
}

export default NFTCard
