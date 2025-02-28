"use client";

import React, { FC, useMemo } from "react";
import cn from "classnames";
import { useSelectable } from "./context";
import { SelectableGrid } from "./SelectableGrid";
import { useApproveAndDeposit } from "./useApproveAndDeposit";
import { Address } from "viem";
import { SupportedChains } from "../../supported-chains";

export const VeNFTGrid: FC<{
  chainId: SupportedChains;
  ourStaker: Address;
  ourToken: Address;
  metaVeNft: Address;
  initialTokenIds: bigint[];
}> = ({ chainId, ourStaker, ourToken, metaVeNft, initialTokenIds }) => {
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
        <div className="flex gap-2">
          <button
            className={cn("bg-blue-500 text-white px-4 py-2 rounded-md")}
            disabled={isApprovedForAll && selectedTokenIds.length === 0}
            onClick={deposit}
          >
            {isApprovedForAll ? "Deposit" : "Approve"}
          </button>

          {selectedTokenIds.length < tokenIdsToDisplay.length &&
            tokenIdsToDisplay.length > 0 && (
              <button
                className="bg-blue-400 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  resetSelectedTokenIds();
                  addToSelectedTokenIds(...tokenIdsToDisplay);
                }}
              >
                Select All
              </button>
            )}

          {selectedTokenIds.length > 0 && (
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded-md"
              onClick={resetSelectedTokenIds}
            >
              Reset
            </button>
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
      />
    </>
  );
};
