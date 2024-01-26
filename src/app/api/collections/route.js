import { collections } from "@/lib/data/nfts"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(collections)
}
