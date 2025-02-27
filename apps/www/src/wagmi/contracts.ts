import { Address } from "viem";
import { base, optimism, sepolia } from "viem/chains";
import { AllClients, getChainClient } from "./viem";
import { fetchStuxNfts } from "./meta/stux";
import { fetchAeroNfts } from "./meta/aero";

export enum META_DEX_ORIGIN {
  STUX_NET,
  AERODROME,
  VELODROME,
}

export const META_DEX_CHAIN: Record<
  META_DEX_ORIGIN,
  {
    readonly chainId: typeof sepolia.id | typeof base.id | typeof optimism.id;
    readonly ourStaker: Address;
    readonly ourToken: Address;
    readonly metaVeNft: Address;
    readonly fetchMetaVeNfts: (
      client: AllClients,
      address: Address
    ) => Promise<bigint[]>;
  }
> = {
  [META_DEX_ORIGIN.STUX_NET]: {
    chainId: sepolia.id,
    ourStaker: "0x59Fc75064c38F6cC2d4d72788880A363d1C03818",
    ourToken: "0x30CdD3D12dDFBaA0660BCc26Df2adC00fbF87BFf",
    metaVeNft: "0xF8053E811889bE6a86e087276419Be4e5d3C2637",
    fetchMetaVeNfts: (client, address) =>
      fetchStuxNfts(
        client,
        "0xF8053E811889bE6a86e087276419Be4e5d3C2637",
        address
      ),
  },
  [META_DEX_ORIGIN.AERODROME]: {
    chainId: base.id,
    ourStaker: "0xe03bb461a37b19b7d534e009119da179028a8f94",
    ourToken: "0x3016d84ebd2e5c239c7753b108065f15ba8f1189",
    metaVeNft: "0xeBf418Fe2512e7E6bd9b87a8F0f294aCDC67e6B4",
    fetchMetaVeNfts: (client, address) =>
      fetchAeroNfts(
        client,
        "0xeBf418Fe2512e7E6bd9b87a8F0f294aCDC67e6B4",
        address
      ),
  },
  [META_DEX_ORIGIN.VELODROME]: {
    chainId: optimism.id,
    ourStaker: "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
    ourToken: "0x84214A05c2915F7FFb24492a2401263CFd6662ce",
    metaVeNft: "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
    fetchMetaVeNfts: (client, address) =>
      fetchStuxNfts(
        client,
        "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
        address
      ),
  },
};

export function stringToMeta(meta: string | string[] | undefined) {
  switch (meta) {
    case "stuxnet":
      return META_DEX_ORIGIN.STUX_NET;
    case "aerodrome":
      return META_DEX_ORIGIN.AERODROME;
    case "velodrome":
      return META_DEX_ORIGIN.VELODROME;
    default:
      throw new Error("Invalid meta");
  }
}

export function getMetaClient(meta: META_DEX_ORIGIN) {
  const { chainId } = META_DEX_CHAIN[meta];
  return getChainClient(chainId);
}
