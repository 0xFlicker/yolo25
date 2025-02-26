"use client";
import { useReducer, useCallback } from "react";
import { BaseError, erc721Abi, Transaction } from "viem";
import { WriteContractData } from "wagmi/query";
import {
  useWriteIerc721SetApprovalForAll,
  useWriteYoloStakeBatchDepositFor,
} from "@/wagmi/generated";

import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useSelectable } from "./context";
import { useNotifications } from "@/features/notifications/Context";
import { META_DEX_ORIGIN, META_DEX_CHAIN } from "@/wagmi/contracts";

// -------------------------------
// State & Actions
// -------------------------------
type TransactionKind = "approval" | "wrap" | string;

interface ActiveTransaction {
  kind: TransactionKind;
  hash?: WriteContractData;
  context?: bigint[];
}

interface CompletedTransaction {
  kind: string;
  hash: WriteContractData;
}

interface TransactionState {
  transactionModelOpen: boolean;
  activeTransactionHashList: ActiveTransaction[];
  completedTransactionHashList: CompletedTransaction[];
}

type TransactionAction =
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" }
  | { type: "ADD_ACTIVE_TX"; payload: { kind: TransactionKind } }
  | {
      type: "SET_ACTIVE_TX_HASH";
      payload: {
        kind: TransactionKind;
        hash: WriteContractData;
        context?: bigint[];
      };
    }
  | {
      type: "REMOVE_ACTIVE_TX";
      payload: { hash: WriteContractData | undefined };
    }
  | { type: "COMPLETE_TX"; payload: { kind: string; hash: WriteContractData } };

// -------------------------------
// Reducer
// -------------------------------
const transactionReducer = (
  state: TransactionState,
  action: TransactionAction
): TransactionState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, transactionModelOpen: true };
    case "CLOSE_MODAL":
      return { ...state, transactionModelOpen: false };
    case "ADD_ACTIVE_TX":
      return {
        ...state,
        transactionModelOpen: true,
        activeTransactionHashList: [
          ...state.activeTransactionHashList.filter(
            (t) => t.kind !== action.payload.kind
          ),
          { kind: action.payload.kind },
        ],
      };
    case "SET_ACTIVE_TX_HASH":
      return {
        ...state,
        transactionModelOpen: true,
        activeTransactionHashList: [
          ...state.activeTransactionHashList.filter(
            (t) => t.kind !== action.payload.kind
          ),
          {
            kind: action.payload.kind,
            hash: action.payload.hash,
            context: action.payload.context,
          },
        ],
      };
    case "REMOVE_ACTIVE_TX":
      return {
        ...state,
        activeTransactionHashList: state.activeTransactionHashList.filter(
          (t) => t.hash !== action.payload.hash
        ),
        transactionModelOpen: state.activeTransactionHashList.length > 1, // If we remove the last item, close modal
      };
    case "COMPLETE_TX":
      return {
        ...state,
        completedTransactionHashList: [
          ...state.completedTransactionHashList,
          { kind: action.payload.kind, hash: action.payload.hash },
        ],
      };
    default:
      return state;
  }
};

const initialTransactionState: TransactionState = {
  transactionModelOpen: false,
  activeTransactionHashList: [],
  completedTransactionHashList: [],
};

// -------------------------------
// Hook
// -------------------------------
export function useApproveAndDeposit({
  chainId,
  metaVeNft,
  ourStaker,
  selectedTokenIds,
}: (typeof META_DEX_CHAIN)[META_DEX_ORIGIN] & { selectedTokenIds: bigint[] }) {
  const {
    resetSelectedTokenIds,
    addToPendingTokenIds,
    removeFromPendingTokenIds,
    addToCompletedTokenIds,
  } = useSelectable();

  const [transactionState, dispatch] = useReducer(
    transactionReducer,
    initialTransactionState
  );
  const { address } = useAccount();
  const { addNotification } = useNotifications();

  // Contract calls
  const { data: isApprovedForAll } = useReadContract({
    chainId,
    abi: erc721Abi,
    address: metaVeNft,
    functionName: "isApprovedForAll",
    args: address ? [address, ourStaker] : undefined,
  });
  const { writeContractAsync: writeIerc721SetApprovalForAll } =
    useWriteIerc721SetApprovalForAll();

  const { writeContractAsync: writeYoloStakeBatchDepositFor } =
    useWriteYoloStakeBatchDepositFor();

  // Transaction watchers
  const { isSuccess: isSuccess0, isError: isError0 } =
    useWaitForTransactionReceipt({
      hash: transactionState.activeTransactionHashList[0]?.hash,
    });
  const { isSuccess: isSuccess1, isError: isError1 } =
    useWaitForTransactionReceipt({
      hash: transactionState.activeTransactionHashList[1]?.hash,
    });

  // -----------------------------------------
  // Effects for success/failure notifications
  // -----------------------------------------
  function noticeSuccess(
    kind: TransactionKind,
    hash: WriteContractData,
    tokenIds?: bigint[]
  ) {
    addNotification({
      message: `${kind.charAt(0).toUpperCase() + kind.slice(1)} successful`,
      type: "success",
      id: `${kind}-success`,
      autoHideMs: 5000,
    });
    if (kind === "wrap" && tokenIds && tokenIds.length > 0) {
      removeFromPendingTokenIds(...tokenIds);
      addToCompletedTokenIds(...tokenIds);
      if (address) {
        // revalidate(chainId === sepolia.id ? "sepolia" : "base", address);
      }
      dispatch({
        type: "COMPLETE_TX",
        payload: { kind: "wrapped tokens", hash },
      });
    }
  }
  if (isSuccess0 && transactionState.activeTransactionHashList[0]?.hash) {
    const kind = transactionState.activeTransactionHashList[0]?.kind;
    noticeSuccess(
      kind,
      transactionState.activeTransactionHashList[0]?.hash,
      transactionState.activeTransactionHashList[0]?.context
    );
  }
  if (isSuccess1 && transactionState.activeTransactionHashList[1]?.hash) {
    const kind = transactionState.activeTransactionHashList[1]?.kind;
    noticeSuccess(
      kind,
      transactionState.activeTransactionHashList[1]?.hash,
      transactionState.activeTransactionHashList[1]?.context
    );
  }

  if (isSuccess0 || isError0) {
    dispatch({
      type: "REMOVE_ACTIVE_TX",
      payload: { hash: transactionState.activeTransactionHashList[0]?.hash },
    });
  }
  if (isSuccess1 || isError1) {
    dispatch({
      type: "REMOVE_ACTIVE_TX",
      payload: { hash: transactionState.activeTransactionHashList[1]?.hash },
    });
  }

  // -----------------------------------------
  // Main wrap call
  // -----------------------------------------
  const wrap = useCallback(async () => {
    if (!address) return;
    try {
      dispatch({ type: "OPEN_MODAL" });

      let approvalWasAttemptedAndFailed = false;

      // Attempt approval if needed
      if (!isApprovedForAll && selectedTokenIds.length !== 0) {
        dispatch({ type: "ADD_ACTIVE_TX", payload: { kind: "approval" } });
        try {
          const approvalResponse = await writeIerc721SetApprovalForAll({
            address: metaVeNft,
            args: [ourStaker, true],
            chainId,
          });
          dispatch({
            type: "SET_ACTIVE_TX_HASH",
            payload: { kind: "approval", hash: approvalResponse },
          });
        } catch (error) {
          approvalWasAttemptedAndFailed = true;
          if (error instanceof BaseError) {
            addNotification({
              message: error.metaMessages?.length
                ? error.metaMessages.map((m) => <p key={m}>{m}</p>)
                : error.message,
              type: "error",
              id: "approval-error",
              autoHideMs: 5000,
            });
          }
          dispatch({ type: "CLOSE_MODAL" });
        }
      }

      // Wrap
      if (!approvalWasAttemptedAndFailed) {
        dispatch({ type: "ADD_ACTIVE_TX", payload: { kind: "wrap" } });
        addToPendingTokenIds(...selectedTokenIds);
        const depositResponse = await writeYoloStakeBatchDepositFor({
          address: ourStaker,
          args: [address, selectedTokenIds],
          chainId,
        });
        dispatch({
          type: "SET_ACTIVE_TX_HASH",
          payload: {
            kind: "wrap",
            hash: depositResponse,
            context: selectedTokenIds,
          },
        });
        resetSelectedTokenIds();
      }
    } catch (error) {
      removeFromPendingTokenIds(...selectedTokenIds);
      if (error instanceof BaseError) {
        dispatch({ type: "CLOSE_MODAL" });
        addNotification({
          message: error.metaMessages?.length
            ? error.metaMessages.map((m) => <p key={m}>{m}</p>)
            : error.message,
          type: "error",
          id: "wrap-error",
          autoHideMs: 5000,
        });
      }
    } finally {
      // If no active transactions, close the modal
      if (!transactionState.activeTransactionHashList.length) {
        dispatch({ type: "CLOSE_MODAL" });
      }
    }
  }, [
    address,
    isApprovedForAll,
    selectedTokenIds,
    writeIerc721SetApprovalForAll,
    metaVeNft,
    ourStaker,
    chainId,
    addNotification,
    addToPendingTokenIds,
    writeYoloStakeBatchDepositFor,
    resetSelectedTokenIds,
    removeFromPendingTokenIds,
    transactionState.activeTransactionHashList.length,
  ]);

  // -----------------------------------------
  // Handlers for the TransactionsModal
  // -----------------------------------------
  const closeTransactionModal = useCallback(() => {
    dispatch({ type: "CLOSE_MODAL" });
  }, []);

  const onTransactionConfirmed = useCallback((tx: Transaction<unknown>) => {
    dispatch({ type: "REMOVE_ACTIVE_TX", payload: { hash: tx.hash } });
  }, []);

  return {
    transactionState,
    wrap,
    closeTransactionModal,
    onTransactionConfirmed,
    isApprovedForAll,
  };
}
