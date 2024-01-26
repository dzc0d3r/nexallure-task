// import {CollectionCard} from "@/components/Collection"
import { Hero } from "@/components/Hero"

export default async function Home() {
  /*   const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
    const collections = await data.json() */

  return (
    <main className="container mx-auto my-5 flex min-h-screen max-w-7xl flex-col  ">
      <Hero />

      <section className="my-10 mt-14 flex flex-col p-5">
        <h2 className="my-5 text-3xl font-medium capitalize text-black/80">
          collections
        </h2>

        {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {collections?.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div> */}
      </section>
    </main>
  )
}
