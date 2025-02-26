import { erc20Abi, isAddress } from "viem";
import { InvalidAddress } from "./InvalidAddress";
import { InvalidMetadex } from "./InvalidMetadex";
import { META_DEX_CHAIN, stringToMeta } from "@/wagmi/contracts";
import { getChainClient } from "@/wagmi/viem";
import { votingEscrowAbi } from "@/wagmi/generated";
import { DepositHeader } from "./DepositHeader";
import { SelectableProvider } from "./context";
import { VeNFTGrid } from "./VeNFTGrid";

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
    } = META_DEX_CHAIN[meta];
    const client = getChainClient(chainId);
    const [
      balance,
      ourTokenSymbol,
      ourTokenName,
      ourTokenDecimals,
      theirVeNftSymbol,
    ] = await Promise.all([
      client.readContract({
        address: metaNftContractAddress,
        abi: votingEscrowAbi,
        functionName: "balanceOf",
        args: [address],
      }),
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

    const tokens = await Promise.all(
      Array.from({ length: Number(balance) }, (_, i) =>
        client
          .readContract({
            address: metaNftContractAddress,
            abi: votingEscrowAbi,
            functionName: "tokenOfOwnerByIndex",
            args: [address, BigInt(i)],
          })
          .then(async (tokenId) => {
            return {
              tokenId,
              locked: await client.readContract({
                address: metaNftContractAddress,
                abi: votingEscrowAbi,
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
            availableCount={tokens.length}
            selectedCount={0}
            totalValue={totalPossibleValue}
            selectedValue={0n}
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
          />
        </div>
      </SelectableProvider>
    );
  } catch (error) {
    console.error(error);
    return <InvalidMetadex />;
  }
}
