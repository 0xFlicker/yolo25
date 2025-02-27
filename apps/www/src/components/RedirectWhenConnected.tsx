"use client";

import { FC, useEffect, useState } from "react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { useRouter, usePathname } from "next/navigation";

export const RedirectWhenConnected: FC<{
  pathPrefix: string;
  pathPostfix?: string;
  toChain: number;
}> = ({ pathPrefix, pathPostfix, toChain }) => {
  const [targetChainId, setTargetChainId] = useState<number | undefined>(
    toChain
  );
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const { chains, switchChainAsync, isSuccess, isPending } = useSwitchChain({
    mutation: {
      onMutate(variables) {
        setTargetChainId(variables.chainId);
      },
      onError() {
        setTargetChainId(toChain);
      },
      onSettled() {},
    },
  });
  const chain = chains.find((c) => c.id === toChain);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (
      !isPending &&
      targetChainId &&
      chain &&
      !isSuccess &&
      targetChainId !== chainId &&
      address
    ) {
      console.log("switching chain", targetChainId);
      switchChainAsync({ chainId: targetChainId }).then((newChain) => {
        if (newChain) {
          router.replace(
            `/${pathPrefix ? pathPrefix + "/" : ""}${address}${pathPostfix ? "/" + pathPostfix : ""}`
          );
        }
      });
    }
  }, [
    targetChainId,
    chain,
    isSuccess,
    chainId,
    switchChainAsync,
    router,
    pathPrefix,
    address,
    isPending,
    pathPostfix,
  ]);

  useEffect(() => {
    const possiblePath = `/${pathPrefix ? pathPrefix + "/" : ""}${address}${pathPostfix ? "/" + pathPostfix : ""}`;
    if (
      isConnected &&
      address &&
      pathname !== possiblePath &&
      targetChainId === chainId
    ) {
      // console.log(`redirecting to ${possiblePath} with chainId ${chainId}`);
      router.replace(possiblePath);
    }
  }, [
    isConnected,
    address,
    pathname,
    pathPrefix,
    router,
    chainId,
    pathPostfix,
    targetChainId,
  ]);

  return null;
};
