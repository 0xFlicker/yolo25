import { createPublicClient, http, fallback, createWalletClient } from "viem";
import { sepolia, base } from "viem/chains";

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

export const baseClient = createPublicClient({
  transport: fallback([
    ...JSON.parse(process.env.NEXT_PUBLIC_BASE_RPC_JSON!).map((rpc) =>
      http(rpc, { batch: true })
    ),
  ]),
  chain: base,
});

export const baseWalletClient = createWalletClient({
  transport: fallback([
    ...JSON.parse(process.env.NEXT_PUBLIC_BASE_RPC_JSON!).map((rpc) =>
      http(rpc, { batch: true })
    ),
  ]),
  chain: base,
});

export function getChainClient(chainId: number) {
  switch (chainId) {
    case sepolia.id:
      return sepoliaClient;
    case base.id:
      return baseClient;
    default:
      throw new Error("Invalid chain id");
  }
}

export type AllClients = typeof sepoliaClient | typeof baseClient;
