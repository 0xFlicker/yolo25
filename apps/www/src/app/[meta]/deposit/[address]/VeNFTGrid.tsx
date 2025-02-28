"use client";

import React, { FC, useMemo } from "react";
import cn from "classnames";
import { useSelectable } from "./context";
import { SelectableGrid } from "./SelectableGrid";
import { useApproveAndDeposit } from "./useApproveAndDeposit";
import { Address } from "viem";
import { SupportedChains } from "../../supported-chains";
import { stringToMeta, META_DEX_CHAIN } from "@/wagmi/contracts";

export const VeNFTGrid: FC<{
  chainId: SupportedChains;
  ourStaker: Address;
  ourToken: Address;
  metaVeNft: Address;
  initialTokenIds: bigint[];
  meta: string;
}> = ({ chainId, ourStaker, ourToken, metaVeNft, initialTokenIds, meta }) => {
  const { fetchMetaVeTokenImage } = META_DEX_CHAIN[stringToMeta(meta)];
  const {
    selectedTokenIds,
    addToSelectedTokenIds,
    removeFromSelectedTokenIds,
    pendingTokenIds,
    completedTokenIds,
    resetSelectedTokenIds,
  } = useSelectable();

  const { deposit, isApprovedForAll } = useApproveAndDeposit({
    chainId,
    ourStaker,
    ourToken,
    metaVeNft,
    selectedTokenIds,
  });

  const tokenIdsToDisplay = useMemo(() => {
    const filteredIndexes = initialTokenIds
      .map((_, index) => index)
      .filter((index) => !completedTokenIds.includes(initialTokenIds[index]));

    return filteredIndexes.map((i) => initialTokenIds[i]);
  }, [initialTokenIds, completedTokenIds]);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <button
            className={cn("bg-blue-500 text-white px-4 py-2 rounded-md")}
            disabled={isApprovedForAll && selectedTokenIds.length === 0}
            onClick={deposit}
          >
            {isApprovedForAll ? "Deposit" : "Approve"}
          </button>

          {tokenIdsToDisplay.length > 0 && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTokenIds.length === tokenIdsToDisplay.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    resetSelectedTokenIds();
                    addToSelectedTokenIds(...tokenIdsToDisplay);
                  } else {
                    resetSelectedTokenIds();
                  }
                }}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">Select All</span>
            </label>
          )}
        </div>
        {selectedTokenIds.length > 0 && (
          <p className="text-sm text-gray-500">
            {selectedTokenIds.length} tokens selected
          </p>
        )}
      </div>
      <SelectableGrid
        onTokenSelected={addToSelectedTokenIds}
        onTokenUnselected={removeFromSelectedTokenIds}
        tokenIds={tokenIdsToDisplay}
        selectedTokenIds={selectedTokenIds}
        pendingTokenIds={pendingTokenIds}
        fetchTokenImage={fetchMetaVeTokenImage}
      />
    </>
  );
};
