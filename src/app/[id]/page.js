import { Hero } from "@/components/Collection"

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
      {console.log(trendingNFTs)}
    </main>
  )
}

export default Page
