"use client";
import { useCallback, useEffect } from "react";
import { BaseError } from "viem";
import { useWriteVeVaultStakeBatchRedeemTo } from "@/wagmi/generated";

import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { useSelectable } from "./context";
import { useNotifications } from "@/features/notifications/Context";
import { META_DEX_ORIGIN, META_DEX_CHAIN } from "@/wagmi/contracts";
import { useTransactions } from "@/features/transaction-modal/TransactionContext";
import { revalidate } from "./actions";
import { useParams, useRouter } from "next/navigation";

// -------------------------------
// Hook
// -------------------------------
export function useRedeem({
  chainId,
  ourStaker,
  selectedTokenIds,
}: Omit<
  (typeof META_DEX_CHAIN)[META_DEX_ORIGIN],
  "fetchMetaVeNfts" | "metaVeNft" | "fetchMetaVeTokenImage"
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
    // addToPendingTokenIds,
    removeFromPendingTokenIds,
    addToCompletedTokenIds,
  } = useSelectable();

  const { address } = useAccount();
  const { addNotification } = useNotifications();

  const {
    writeContractAsync: writeVeVaultStakeBatchRedeemTo,
    data: redeemHash,
  } = useWriteVeVaultStakeBatchRedeemTo();

  // Transaction watchers
  const { data: transactionData } = useWaitForTransactionReceipt({
    hash: redeemHash,
    confirmations: 1,
  });

  useEffect(() => {
    if (transactionData && address) {
      closeModal();
      addNotification({
        message: "Transaction successful",
        type: "success",
        id: "tx-success",
        autoHideMs: 5000,
      });
      removeFromPendingTokenIds(...selectedTokenIds);
      addToCompletedTokenIds(...selectedTokenIds);
      revalidate(meta as "stuxnet" | "aerodrome" | "velodrome", address);
      router.refresh();
    }
  }, [
    transactionData,
    addNotification,
    selectedTokenIds,
    chainId,
    ourStaker,
    closeModal,
    removeFromPendingTokenIds,
    meta,
    address,
    router,
    addToCompletedTokenIds,
  ]);

  // -----------------------------------------
  // Main deposit call
  // -----------------------------------------
  const redeem = useCallback(async () => {
    if (!address) return;
    openModal();

    // Attempt approval if needed
    addTransaction({
      id: `redeem-${chainId}-${ourStaker}`,
      shortDescription: "redeem",
    });

    try {
      const approvalResponse = await writeVeVaultStakeBatchRedeemTo({
        address: ourStaker,
        args: [address, selectedTokenIds],
        chainId,
      });
      updateTransactionHash(`redeem-${chainId}-${ourStaker}`, approvalResponse);
      resetSelectedTokenIds();
    } catch (error) {
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
      removeTransaction(`approval-${chainId}-${ourStaker}`);
    }
  }, [
    address,
    openModal,
    addTransaction,
    chainId,
    ourStaker,
    writeVeVaultStakeBatchRedeemTo,
    selectedTokenIds,
    updateTransactionHash,
    resetSelectedTokenIds,
    removeTransaction,
    addNotification,
  ]);

  return {
    redeem,
  };
}
