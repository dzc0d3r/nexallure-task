import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <main className="container mx-auto my-5 flex min-h-screen max-w-7xl flex-col  ">
      <Hero />

      <section className="mt-14 flex flex-col">
        <h2 className="text-3xl font-medium capitalize text-black/80">
          collections
        </h2>
      </section>
    </main>
  )
}
