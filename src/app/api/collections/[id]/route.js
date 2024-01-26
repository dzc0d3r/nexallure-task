import { collections } from "@/lib/data/nfts"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const collection = collections.find((c) => c.id.toString() === params.id)

  if (!collection) {
    return NextResponse.json(
      { message: "Collection not found" },
      { status: 404 },
    )
  }

  return NextResponse.json(collection)
}
