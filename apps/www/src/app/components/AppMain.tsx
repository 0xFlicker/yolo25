import { AppBar } from "./AppBar";
import { SiteMenu } from "./SiteMenu";
import { DesktopHomeMenu } from "./DesktopHomeMenu";
import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";

export function AppMain({
  headerLeft,
  headerRight,
  children,
  title,
  disableConnect,
  disableDesktopMenu,
  isHome,
}: PropsWithChildren<
  {
    title?: ReactNode;
    headerLeft?: ReactNode;
    headerRight?: ReactNode;
    disableConnect?: boolean;
    disableDesktopMenu?: boolean;
  } & ComponentPropsWithoutRef<typeof SiteMenu>
>) {
  const menu = (
    <>
      <li className="border-t border-gray-200 my-2 list-none" />
      <SiteMenu isHome={isHome} />
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
            <h1 className="text-2xl font-bold">{title}</h1>
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
