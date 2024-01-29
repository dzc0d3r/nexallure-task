"use client"

import Image from "next/image"
import { sleep } from "@/lib/utils"

import { useAuth } from "@/components/Providers/AuthProvider"
import Loading from "@/components/Loading"
const wallets = [
  {
    name: "Metamask",
    image: "metamask.svg",
    address: "0xBRX6Q...8x7bvL",
  },
  {
    name: "Trust Wallet",
    image: "trust.svg",
    address: "0xGHJbT...23dxsX",
  },
  {
    name: "Safe Pale",
    image: "safepale.svg",
    address: "0xGHrkkd...99BfthT",
  },
]
const WalletCard = () => {
  const { user, setUser, isLoading, setIsLoading } = useAuth()
  const handleWallet = async (name, address) => {
    setIsLoading(true)
    setUser((user) => ({
      ...user,
      wallet: {
        type: name,
        address: address,
        ballance: 0.129,
        nfts: [],
      },
    }))
    await sleep()
    setIsLoading(false)
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {wallets.map((wallet, index) => (
            <div
              onClick={() => handleWallet(wallet.name, wallet.address)}
              key={index}
              className={`${user?.wallet.type == wallet.name && "border border-blue-800"} mt-5 flex h-44 w-44 items-center justify-center rounded-2xl bg-white hover:cursor-pointer`}
            >
              <Image
                src={wallet.image}
                alt={wallet.name}
                width={100}
                height={100}
                className="absolute h-24 w-24"
              ></Image>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default WalletCard
