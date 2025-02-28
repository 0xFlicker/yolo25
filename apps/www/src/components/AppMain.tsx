import { AppBar } from "./AppBar";
import { PropsWithChildren, ReactNode } from "react";
import NextImage from "next/image";
import { TabMenu } from "./TabMenu";

export function AppMain({
  headerLeft,
  headerRight,
  children,
  disableConnect,
}: PropsWithChildren<{
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  disableConnect?: boolean;
}>) {
  return (
    <main className="relative flex w-full flex-col flex-auto">
      <AppBar
        disableConnect={disableConnect}
        title={
          <>
            <NextImage src="/velogo.png" alt="logo" width={200} height={40} />
            {headerLeft}
          </>
        }
        right={<>{headerRight}</>}
      />
      <TabMenu />
      <div className="flex-grow">{children}</div>
    </main>
  );
}
