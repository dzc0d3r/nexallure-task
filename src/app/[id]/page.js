import { Hero, NFTCard } from "@/components/Collection"

const Page = async ({ params }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${params.id}`,
  )
  const collection = await data.json()
  const trendingNFTs = collection.nfts.filter((nft) => nft.trending)
  return (
    <main className="container mx-auto my-5 flex min-h-screen max-w-7xl flex-col  ">
      <Hero
        name={collection.name}
        description={collection.description}
        image={trendingNFTs[0]?.image || collection.image}
        artist={collection.artist}
      />

      <section className="my-10 mt-5 flex flex-col p-5 md:gap-5">
        <h2 className="mb-10 mt-3 text-4xl font-semibold  capitalize text-black/80">
          NFTS
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {collection.nfts.map((nft, index) => (
            <NFTCard
              key={index}
              name={nft.name}
              image={nft.image}
              price={nft.price}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page
