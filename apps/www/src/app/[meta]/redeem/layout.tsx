import React, { ReactNode } from "react";
import { RedirectWhenConnected } from "@/components/RedirectWhenConnected";
import { META_DEX_CHAIN, stringToMeta } from "@/wagmi/contracts";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ meta: string }>;
}) {
  const { meta } = await params;
  const metaDexChain = META_DEX_CHAIN[stringToMeta(meta)];
  return (
    <>
      {children}
      <RedirectWhenConnected
        pathPrefix={`${meta}/redeem`}
        toChain={metaDexChain.chainId}
      />
    </>
  );
}
