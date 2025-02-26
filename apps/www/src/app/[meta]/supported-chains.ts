import { base, optimism, sepolia } from "viem/chains";

export type SupportedChains =
  | typeof sepolia.id
  | typeof base.id
  | typeof optimism.id;
