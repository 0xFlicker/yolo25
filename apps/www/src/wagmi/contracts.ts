import { Address } from "viem";
import { base, optimism, sepolia } from "viem/chains";

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
  }
> = {
  [META_DEX_ORIGIN.STUX_NET]: {
    chainId: sepolia.id,
    ourStaker: "0xEFAE80F9beb270E41cB283B6c4138E157d64a761",
    ourToken: "0x84214A05c2915F7FFb24492a2401263CFd6662ce",
    metaVeNft: "0xe5F7e78122BB094d711d5f534070B61501Dd5EEC",
  },
  [META_DEX_ORIGIN.AERODROME]: {
    chainId: base.id,
    ourStaker: "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
    ourToken: "0x84214A05c2915F7FFb24492a2401263CFd6662ce",
    metaVeNft: "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
  },
  [META_DEX_ORIGIN.VELODROME]: {
    chainId: optimism.id,
    ourStaker: "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
    ourToken: "0x84214A05c2915F7FFb24492a2401263CFd6662ce",
    metaVeNft: "0x4d4dB49B4EeC4f55a08C62fe2CF89503700f74cb",
  },
};

export function stringToMeta(meta: string) {
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
