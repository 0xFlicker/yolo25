"use client";

import React, { FC, useMemo } from "react";
import { useSelectable } from "./context";
import { SelectableGrid } from "./SelectableGrid";

export const VeNFTGrid: FC<{
  initialTokenIds: bigint[];
}> = ({ initialTokenIds }) => {
  const {
    selectedTokenIds,
    addToSelectedTokenIds,
    removeFromSelectedTokenIds,
    pendingTokenIds,
    completedTokenIds,
  } = useSelectable();

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
    <SelectableGrid
      onTokenSelected={addToSelectedTokenIds}
      onTokenUnselected={removeFromSelectedTokenIds}
      tokenIds={tokenIdsToDisplay}
      selectedTokenIds={selectedTokenIds}
      pendingTokenIds={pendingTokenIds}
    />
  );
};
