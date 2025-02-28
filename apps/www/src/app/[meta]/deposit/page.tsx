import React from "react";
import { ConnectCard } from "./ConnectCard";

export default async function Page() {
  // {
  //   params,
  // }: {
  //   params: Promise<{ meta: string }>;
  // }
  // const { meta } = await params;

  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-6rem)]">
        <ConnectCard />
      </div>
    </>
  );
}
