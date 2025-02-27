import { Address } from "viem";
import { votingEscrowAbi } from "@/wagmi/generated";
import { AllClients } from "../viem";

export async function fetchStuxNfts(
  client: AllClients,
  metaNftContractAddress: Address,
  ownerAddress: Address
): Promise<bigint[]> {
  const balance = await client.readContract({
    address: metaNftContractAddress,
    abi: votingEscrowAbi,
    functionName: "balanceOf",
    args: [ownerAddress],
  });
  const tokens = await Promise.all(
    Array.from({ length: Number(balance) }, (_, i) =>
      client.readContract({
        address: metaNftContractAddress,
        abi: votingEscrowAbi,
        functionName: "tokenOfOwnerByIndex",
        args: [ownerAddress, BigInt(i)],
      })
    )
  );

  return tokens;
}
