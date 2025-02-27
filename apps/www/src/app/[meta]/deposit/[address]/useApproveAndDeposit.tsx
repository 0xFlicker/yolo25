"use client";
import { useCallback, useEffect } from "react";
import { BaseError, erc721Abi } from "viem";
import {
  useWriteIerc721SetApprovalForAll,
  useWriteVeVaultDepositBatchDepositFor,
} from "@/wagmi/generated";

import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useSelectable } from "./context";
import { useNotifications } from "@/features/notifications/Context";
import { META_DEX_ORIGIN, META_DEX_CHAIN } from "@/wagmi/contracts";
import { useTransactions } from "@/features/transaction-modal/TransactionContext";
import { revalidate } from "./actions";
import { useParams, useRouter } from "next/navigation";

// -------------------------------
// Hook
// -------------------------------
export function useApproveAndDeposit({
  chainId,
  metaVeNft,
  ourStaker,
  selectedTokenIds,
}: Omit<
  (typeof META_DEX_CHAIN)[META_DEX_ORIGIN],
  "fetchMetaVeNfts" | "fetchMetaVeTokenImage"
> & {
  selectedTokenIds: bigint[];
}) {
  const router = useRouter();
  const { meta: metaParams } = useParams();
  const meta =
    (Array.isArray(metaParams) ? metaParams[0] : metaParams) ?? "stuxnet";
  const {
    addTransaction,
    updateTransactionHash,
    closeModal,
    openModal,
    removeTransaction,
  } = useTransactions();

  const {
    resetSelectedTokenIds,
    addToPendingTokenIds,
    removeFromPendingTokenIds,
    // addToCompletedTokenIds,
  } = useSelectable();

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

  const { writeContractAsync: writeVeVaultDepositBatchDepositFor } =
    useWriteVeVaultDepositBatchDepositFor();

  // Transaction watchers
  const { data: transactionData } = useWaitForTransactionReceipt({
    hash: undefined,
  });

  useEffect(() => {
    if (transactionData) {
      // const tx = transactionData.transactionHash;
      closeModal();
      addNotification({
        message: "Transaction successful",
        type: "success",
        id: "tx-success",
        autoHideMs: 5000,
      });
    }
  }, [
    transactionData,
    addNotification,
    selectedTokenIds,
    chainId,
    metaVeNft,
    ourStaker,
    closeModal,
  ]);

  // -----------------------------------------
  // Main deposit call
  // -----------------------------------------
  const deposit = useCallback(async () => {
    if (!address) return;
    try {
      openModal();

      let approvalWasAttemptedAndFailed = false;

      // Attempt approval if needed
      if (!isApprovedForAll) {
        addTransaction({
          id: `approval-${chainId}-${metaVeNft}-${ourStaker}`,
          shortDescription: "approval",
        });

        try {
          const approvalResponse = await writeIerc721SetApprovalForAll({
            address: metaVeNft,
            args: [ourStaker, true],
            chainId,
          });
          updateTransactionHash(
            `approval-${chainId}-${metaVeNft}-${ourStaker}`,
            approvalResponse
          );
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
          removeTransaction(`approval-${chainId}-${metaVeNft}-${ourStaker}`);
        }
      }

      // Wrap
      if (!approvalWasAttemptedAndFailed) {
        addTransaction({
          id: `deposit-${chainId}-${metaVeNft}-${ourStaker}`,
          shortDescription: "deposit",
          context: selectedTokenIds,
        });

        addToPendingTokenIds(...selectedTokenIds);
        const depositResponse = await writeVeVaultDepositBatchDepositFor({
          address: ourStaker,
          args: [address, selectedTokenIds],
          chainId,
        });
        updateTransactionHash(
          `deposit-${chainId}-${metaVeNft}-${ourStaker}`,
          depositResponse
        );
        resetSelectedTokenIds();
        revalidate(meta as "stuxnet" | "aerodrome" | "velodrome", address);
        router.refresh();
      }
    } catch (error) {
      removeFromPendingTokenIds(...selectedTokenIds);
      if (error instanceof BaseError) {
        removeTransaction(`deposit-${chainId}-${metaVeNft}-${ourStaker}`);
        addNotification({
          message: error.metaMessages?.length
            ? error.metaMessages.map((m) => <p key={m}>{m}</p>)
            : error.message,
          type: "error",
          id: "wrap-error",
          autoHideMs: 5000,
        });
      }
    }
  }, [
    address,
    openModal,
    isApprovedForAll,
    addTransaction,
    chainId,
    metaVeNft,
    ourStaker,
    writeIerc721SetApprovalForAll,
    updateTransactionHash,
    removeTransaction,
    addNotification,
    selectedTokenIds,
    addToPendingTokenIds,
    writeVeVaultDepositBatchDepositFor,
    resetSelectedTokenIds,
    meta,
    router,
    removeFromPendingTokenIds,
  ]);

  return {
    deposit,
    isApprovedForAll,
  };
}
