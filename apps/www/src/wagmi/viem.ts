import { createPublicClient, http, fallback, createWalletClient } from "viem";
import { sepolia } from "viem/chains";

export const sepoliaClient = createPublicClient({
  transport: fallback([
    ...JSON.parse(process.env.NEXT_PUBLIC_SEPOLIA_RPC_JSON!).map((rpc) =>
      http(rpc, { batch: true })
    ),
  ]),
  chain: sepolia,
});

export const sepoliaWalletClient = createWalletClient({
  transport: fallback([
    ...JSON.parse(process.env.NEXT_PUBLIC_SEPOLIA_RPC_JSON!).map((rpc) =>
      http(rpc, { batch: true })
    ),
  ]),
  chain: sepolia,
});

export function getChainClient(chainId: number) {
  switch (chainId) {
    case sepolia.id:
      return sepoliaClient;
    default:
      throw new Error("Invalid chain id");
  }
}
