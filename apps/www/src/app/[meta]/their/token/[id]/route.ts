import { NextRequest, NextResponse } from "next/server";
import { getMetaClient, stringToMeta } from "@/wagmi/contracts";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; meta: string } }
) {
  const id = params.id;
  const meta = params.meta;
  const client = getMetaClient(stringToMeta(meta));
  const response = await fetch(`https://api.opensea.io/api/v1/asset/${id}`);
  const data = await response.json();
  return NextResponse.json(data);
}
