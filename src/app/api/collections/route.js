import { collections } from "@/lib/data/nfts"

export async function GET() {
  return Response.json(collections)
}
