import { erc20Abi, erc721Abi, isAddress } from "viem";
import { InvalidAddress } from "./InvalidAddress";
import { InvalidMetadex } from "./InvalidMetadex";
import { META_DEX_CHAIN, stringToMeta } from "@/wagmi/contracts";
import { getChainClient } from "@/wagmi/viem";
import { veVaultStakeAbi } from "@/wagmi/generated";
import { InventoryHeader } from "./InventoryHeader";
import { SelectableProvider } from "./context";
import { InventoryGrid } from "./InventoryGrid";
import { fetchAllNfts } from "./fetchAllNfts";

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
    const { chainId, ourToken, ourStaker } = META_DEX_CHAIN[meta];
    const client = getChainClient(chainId);
    const nfts = await fetchAllNfts(address, meta);
    const [
      tokens,
      ourTokenSymbol,
      ourTokenName,
      ourTokenDecimals,
      stakerSymbol,
    ] = await Promise.all([
      Promise.all(
        nfts.map((tokenId) =>
          client.readContract({
            address: ourStaker,
            abi: veVaultStakeAbi,
            functionName: "locked",
            args: [tokenId],
          })
        )
      ),
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
        address: ourStaker,
        abi: erc721Abi,
        functionName: "symbol",
      }),
    ]);

    const totalPossibleValue = tokens.reduce((acc, token) => {
      return acc + token[1].amount;
    }, 0n);

    const totalRedeemableValue = tokens.reduce((acc, token) => {
      return acc + token[0];
    }, 0n);

    return (
      <SelectableProvider>
        <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-6rem)]">
          <InventoryHeader
            availableCount={tokens.length}
            totalValue={totalPossibleValue}
            redeemableValue={totalRedeemableValue}
            stakerSymbol={stakerSymbol}
            ourTokenSymbol={ourTokenSymbol}
            ourTokenName={ourTokenName}
            ourTokenDecimals={ourTokenDecimals}
            ourStaker={ourStaker}
          />
          <InventoryGrid
            chainId={chainId}
            ourStaker={ourStaker}
            ourToken={ourToken}
            initialTokenIds={nfts}
          />
        </div>
      </SelectableProvider>
    );
  } catch (error) {
    console.error(error);
    return <InvalidMetadex />;
  }
}
