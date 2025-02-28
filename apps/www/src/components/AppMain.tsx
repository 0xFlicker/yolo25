import { AppBar } from "./AppBar";
import { SiteMenu } from "./SiteMenu";
import { DesktopHomeMenu } from "./DesktopHomeMenu";
import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";
import NextImage from "next/image";

export function AppMain({
  headerLeft,
  headerRight,
  children,
  disableConnect,
  disableDesktopMenu,
  isDeposit,
  isInventory,
}: PropsWithChildren<
  {
    headerLeft?: ReactNode;
    headerRight?: ReactNode;
    disableConnect?: boolean;
    disableDesktopMenu?: boolean;
    isDeposit?: boolean;
    isInventory?: boolean;
  } & ComponentPropsWithoutRef<typeof SiteMenu>
>) {
  const menu = (
    <>
      <li className="border-t border-gray-200 my-2 list-none" />
      <SiteMenu isDeposit={isDeposit} isInventory={isInventory} />
      <li className="border-t border-gray-200 my-2 list-none" />
    </>
  );
  return (
    <main className="relative flex w-full flex-col flex-auto">
      <AppBar
        disableConnect={disableConnect}
        menu={menu}
        title={
          <>
            <NextImage src="/velogo.png" alt="logo" width={200} height={40} />
            {headerLeft}
          </>
        }
        right={<>{headerRight}</>}
      />
      <div className="flex flex-grow min-h-screen-without-header">
        {!disableDesktopMenu && (
          <div className="lg:flex hidden">
            <DesktopHomeMenu>{menu}</DesktopHomeMenu>
          </div>
        )}
        <div className="flex-grow">{children}</div>
      </div>
    </main>
  );
}
