"use client";
import { useReducer, useCallback } from "react";
import { BaseError } from "viem";
import { WriteContractData } from "wagmi/query";
import { yoloStakeAbi } from "@/wagmi/generated";

import { sepolia, type base } from "viem/chains";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

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
export function useApproveAndWrap(
  chainId: typeof sepolia.id | typeof base.id,
  toWrapSelectedTokenIds: bigint[]
) {
  const {
    resetWrapSelectedTokenIds,
    addToPendingWrapTokenIds,
    removeFromPendingWrapTokenIds,
    addToCompletedWrapTokenIds,
  } = useFameusWrap();

  const [transactionState, dispatch] = useReducer(
    transactionReducer,
    initialTransactionState
  );
  const { address } = useAccount();
  const { addNotification } = useNotifications();

  // Contract calls
  const { data: isApprovedForAll } = useReadFameMirrorIsApprovedForAll({
    address: societyFromNetwork(chainId),
    args: address ? [address, govSocietyFromNetwork(chainId)] : undefined,
  });
  const { writeContractAsync: writeFameMirrorSetApprovalForAll } =
    useWriteFameMirrorSetApprovalForAll();
  const { writeContractAsync: writeGovSocietyDepositFor } =
    useWriteGovSocietyDepositFor();

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
      removeFromPendingWrapTokenIds(...tokenIds);
      addToCompletedWrapTokenIds(...tokenIds);
      if (address) {
        revalidate(chainId === sepolia.id ? "sepolia" : "base", address);
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
      if (!isApprovedForAll && toWrapSelectedTokenIds.length !== 0) {
        dispatch({ type: "ADD_ACTIVE_TX", payload: { kind: "approval" } });
        try {
          const approvalResponse = await writeFameMirrorSetApprovalForAll({
            address: societyFromNetwork(chainId),
            args: [govSocietyFromNetwork(chainId), true],
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
        addToPendingWrapTokenIds(...toWrapSelectedTokenIds);
        const depositResponse = await writeGovSocietyDepositFor({
          address: govSocietyFromNetwork(chainId),
          args: [address, toWrapSelectedTokenIds],
        });
        dispatch({
          type: "SET_ACTIVE_TX_HASH",
          payload: {
            kind: "wrap",
            hash: depositResponse,
            context: toWrapSelectedTokenIds,
          },
        });
        resetWrapSelectedTokenIds();
      }
    } catch (error) {
      removeFromPendingWrapTokenIds(...toWrapSelectedTokenIds);
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
    toWrapSelectedTokenIds,
    writeFameMirrorSetApprovalForAll,
    chainId,
    addNotification,
    addToPendingWrapTokenIds,
    writeGovSocietyDepositFor,
    resetWrapSelectedTokenIds,
    removeFromPendingWrapTokenIds,
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
