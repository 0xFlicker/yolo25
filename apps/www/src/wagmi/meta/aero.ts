import { Address, erc721Abi, parseAbi } from "viem";
import {} from "@/wagmi/generated";
import { AllClients } from "../viem";

const aeroIterableAbi = parseAbi([
  "function ownerToNFTokenIdList(address,uint256) external view returns (uint256)" as const,
]);

export async function fetchAeroNfts(
  client: AllClients,
  metaNftContractAddress: Address,
  ownerAddress: Address
): Promise<bigint[]> {
  const balance = await client.readContract({
    address: metaNftContractAddress,
    abi: erc721Abi,
    functionName: "balanceOf",
    args: [ownerAddress],
  });
  if (Number(balance) === 0) {
    return [];
  }

  const tokens: bigint[] = [];
  let index = 0;

  while (true) {
    const result = await client.readContract({
      address: metaNftContractAddress,
      abi: aeroIterableAbi,
      functionName: "ownerToNFTokenIdList",
      args: [ownerAddress, BigInt(index)],
    });

    if (result === 0n) {
      break;
    }

    tokens.push(result);
    index++;
  }

  return tokens;
}
