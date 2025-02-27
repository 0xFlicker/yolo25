import {
  getMetaClient,
  META_DEX_CHAIN,
  META_DEX_ORIGIN,
} from "@/wagmi/contracts";
import { veVaultStakeAbi } from "@/wagmi/generated";
import { Address } from "viem";

export async function fetchAllNfts(address: Address, meta: META_DEX_ORIGIN) {
  const client = getMetaClient(meta);
  const totalOwnedCount = await client.readContract({
    address: META_DEX_CHAIN[meta].ourStaker,
    abi: veVaultStakeAbi,
    functionName: "balanceOf",
    args: [address],
  });
  if (totalOwnedCount === 0n) return [];

  let foundNfts = 0;
  let tokenIndex = 1n;
  const nfts: bigint[] = [];
  const BATCH_SIZE = 50;

  while (foundNfts < totalOwnedCount) {
    const ownerOfCalls = Array.from({ length: BATCH_SIZE }, (_, i) => ({
      address: META_DEX_CHAIN[meta].ourStaker,
      abi: veVaultStakeAbi,
      functionName: "ownerOf",
      args: [tokenIndex + BigInt(i)],
    }));

    const owners = await client.multicall({
      contracts: ownerOfCalls,
      allowFailure: true,
    });

    for (let i = 0; i < owners.length; i++) {
      const result = owners[i];
      if (result.status === "success" && result.result === address) {
        nfts.push(tokenIndex + BigInt(i));
        foundNfts++;
        if (foundNfts >= totalOwnedCount) break;
      }
    }

    tokenIndex += BigInt(BATCH_SIZE);
  }

  return nfts;
}
