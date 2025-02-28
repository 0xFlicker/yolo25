import { erc20Abi, isAddress } from "viem";
import { InvalidAddress } from "./InvalidAddress";
import { META_DEX_CHAIN, stringToMeta } from "@/wagmi/contracts";
import { getChainClient } from "@/wagmi/viem";
import { iVotingEscrowAbi, votingEscrowAbi } from "@/wagmi/generated";
import { DepositHeader } from "./DepositHeader";
import { SelectableProvider } from "./context";
import { VeNFTGrid } from "./VeNFTGrid";
import SomethingWentWrong from "@/components/SomethingWentWrong";

type Params = {
  address: string;
  meta: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { address: pathAddress, meta: pathMeta } = await params;

  const address = pathAddress;

  if (!address || !isAddress(address)) {
    return <InvalidAddress />;
  }

  try {
    const meta = stringToMeta(pathMeta);
    const {
      chainId,
      metaVeNft: metaNftContractAddress,
      ourToken,
      ourStaker,
      fetchMetaVeNfts,
    } = META_DEX_CHAIN[meta];
    const client = getChainClient(chainId);
    const [ourTokenSymbol, ourTokenName, ourTokenDecimals, theirVeNftSymbol] =
      await Promise.all([
        client.readContract({
          address: ourToken,
          abi: erc20Abi,
          functionName: "symbol",
        }),
        client.readContract({
          address: ourToken,
          abi: erc20Abi,
          functionName: "name",
        }),
        client.readContract({
          address: ourToken,
          abi: erc20Abi,
          functionName: "decimals",
        }),
        client.readContract({
          address: metaNftContractAddress,
          abi: votingEscrowAbi,
          functionName: "symbol",
        }),
      ]);
    const tokens = await fetchMetaVeNfts(address).then(async (tokens) =>
      Promise.all(
        tokens.map(async (tokenId) => {
          return {
            tokenId,
            locked: await client.readContract({
              address: metaNftContractAddress,
              abi: iVotingEscrowAbi,
              functionName: "locked",
              args: [tokenId],
            }),
          };
        })
      )
    );

    const totalPossibleValue = tokens.reduce((acc, token) => {
      return acc + token.locked.amount;
    }, 0n);

    return (
      <SelectableProvider>
        <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-6rem)]">
          <DepositHeader
            metaVeNft={metaNftContractAddress}
            availableCount={tokens.length}
            totalValue={totalPossibleValue}
            veNftSymbol={theirVeNftSymbol}
            ourTokenSymbol={ourTokenSymbol}
            ourTokenName={ourTokenName}
            ourTokenDecimals={ourTokenDecimals}
          />
          <VeNFTGrid
            chainId={chainId}
            ourStaker={ourStaker}
            ourToken={ourToken}
            metaVeNft={metaNftContractAddress}
            initialTokenIds={tokens.map((t) => t.tokenId)}
            meta={pathMeta}
          />
        </div>
      </SelectableProvider>
    );
  } catch (error) {
    console.error(error);
    return <SomethingWentWrong />;
  }
}
