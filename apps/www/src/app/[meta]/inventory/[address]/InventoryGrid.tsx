"use client";

import React, { FC, useMemo } from "react";
import cn from "classnames";
import { useSelectable } from "./context";
import { SelectableGrid } from "./SelectableGrid";
import { useRedeem } from "./useRedeem";
import { Address } from "viem";
import { SupportedChains } from "../../supported-chains";

export const InventoryGrid: FC<{
  chainId: SupportedChains;
  ourStaker: Address;
  ourToken: Address;
  initialTokenIds: bigint[];
}> = ({ chainId, ourStaker, ourToken, initialTokenIds }) => {
  const {
    selectedTokenIds,
    addToSelectedTokenIds,
    removeFromSelectedTokenIds,
    pendingTokenIds,
    completedTokenIds,
    resetSelectedTokenIds,
  } = useSelectable();

  const { redeem } = useRedeem({
    chainId,
    ourStaker,
    ourToken,
    selectedTokenIds,
  });

  const tokenIdsToDisplay = useMemo(() => {
    const filteredIndexes = initialTokenIds
      .map((_, index) => index)
      .filter(
        (index) =>
          !pendingTokenIds.includes(initialTokenIds[index]) &&
          !completedTokenIds.includes(initialTokenIds[index])
      );

    return filteredIndexes.map((i) => initialTokenIds[i]);
  }, [initialTokenIds, pendingTokenIds, completedTokenIds]);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            className={cn("bg-blue-500 text-white px-4 py-2 rounded-md")}
            disabled={selectedTokenIds.length === 0}
            onClick={redeem}
          >
            Redeem
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
