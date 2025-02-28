"use client";
import { createContext, useState, useCallback, useContext } from "react";

export type SelectableTokensContextType = {
  selectedTokenIds: bigint[];
  pendingTokenIds: bigint[];
  completedTokenIds: bigint[];
  addToSelectedTokenIds: (...tokenIds: bigint[]) => void;
  removeFromSelectedTokenIds: (...tokenIds: bigint[]) => void;
  resetSelectedTokenIds: () => void;
  addToPendingTokenIds: (...tokenIds: bigint[]) => void;
  removeFromPendingTokenIds: (...tokenIds: bigint[]) => void;
  resetPendingTokenIds: () => void;
  addToCompletedTokenIds: (...tokenIds: bigint[]) => void;
  removeFromCompletedTokenIds: (...tokenIds: bigint[]) => void;
  resetCompletedTokenIds: () => void;
};

export const SelectableContext = createContext<SelectableTokensContextType>({
  selectedTokenIds: [],
  pendingTokenIds: [],
  completedTokenIds: [],
  addToSelectedTokenIds: () => {},
  removeFromSelectedTokenIds: () => {},
  resetSelectedTokenIds: () => {},
  addToPendingTokenIds: () => {},
  removeFromPendingTokenIds: () => {},
  resetPendingTokenIds: () => {},
  addToCompletedTokenIds: () => {},
  removeFromCompletedTokenIds: () => {},
  resetCompletedTokenIds: () => {},
});

export const SelectableProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedTokenIds, setSelectedTokenIds] = useState<bigint[]>([]);
  const [pendingTokenIds, setPendingTokenIds] = useState<bigint[]>([]);
  const [completedTokenIds, setCompletedTokenIds] = useState<bigint[]>([]);

  const addToSelectedTokenIds = useCallback((...tokenIds: bigint[]) => {
    setSelectedTokenIds((prev) => [
      ...tokenIds,
      ...prev.filter((id) => !tokenIds.includes(id)),
    ]);
  }, []);

  const removeFromSelectedTokenIds = useCallback((...tokenIds: bigint[]) => {
    setSelectedTokenIds((prev) => prev.filter((id) => !tokenIds.includes(id)));
  }, []);

  const addToPendingTokenIds = useCallback((...tokenIds: bigint[]) => {
    setPendingTokenIds((prev) => [
      ...tokenIds,
      ...prev.filter((id) => !tokenIds.includes(id)),
    ]);
  }, []);

  const removeFromPendingTokenIds = useCallback((...tokenIds: bigint[]) => {
    setPendingTokenIds((prev) => prev.filter((id) => !tokenIds.includes(id)));
  }, []);

  const addToCompletedTokenIds = useCallback((...tokenIds: bigint[]) => {
    setCompletedTokenIds((prev) => [
      ...tokenIds,
      ...prev.filter((id) => !tokenIds.includes(id)),
    ]);
  }, []);

  const removeFromCompletedTokenIds = useCallback((...tokenIds: bigint[]) => {
    setCompletedTokenIds((prev) => prev.filter((id) => !tokenIds.includes(id)));
  }, []);

  return (
    <SelectableContext.Provider
      value={{
        selectedTokenIds,
        pendingTokenIds,
        completedTokenIds,
        addToSelectedTokenIds,
        removeFromSelectedTokenIds,
        resetSelectedTokenIds: () => setSelectedTokenIds([]),
        addToPendingTokenIds,
        removeFromPendingTokenIds,
        resetPendingTokenIds: () => setPendingTokenIds([]),
        addToCompletedTokenIds,
        removeFromCompletedTokenIds,
        resetCompletedTokenIds: () => setCompletedTokenIds([]),
      }}
    >
      {children}
    </SelectableContext.Provider>
  );
};

export const useSelectable = () => {
  const context = useContext(SelectableContext);
  if (!context) {
    throw new Error(
      "useSelectableContext must be used within a SelectableProvider"
    );
  }
  return context;
};
