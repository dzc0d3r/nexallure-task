import WalletCard from "@/components/Wallet"

const Wallet = () => {
  return (
    <main className="grid min-h-screen place-content-center  bg-slate-200 p-5 ">
      <div className="-mt-32 flex h-full w-full flex-col gap-5 p-10">
        <h1 className="h1 text-center">Choose wallet to connect</h1>
        <div className="grid justify-center gap-5 md:grid-cols-3">
          <WalletCard />
        </div>
      </div>
    </main>
  )
}

export default Wallet
