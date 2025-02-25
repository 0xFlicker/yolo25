"use client";

import { FC, ReactNode, useState } from "react";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { HomeMenu } from "./HomeMenu";
import { ConnectKitButton } from "connectkit";

interface AppBarLeftProps {
  menu?: ReactNode;
}

export const AppBarClientLeft: FC<AppBarLeftProps> = ({ menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menu && (
        <button
          onClick={() => setMenuOpen(true)}
          className="ml-2 mr-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        >
          <HomeModernIcon className="h-6 w-6" />
        </button>
      )}
      {menu && (
        <>
          <HomeMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            {menu}
          </HomeMenu>
        </>
      )}
    </>
  );
};

interface AppBarRightProps {
  disableConnect?: boolean;
}

export const AppBarClientRight: FC<AppBarRightProps> = ({ disableConnect }) => {
  if (disableConnect) return null;

  return <ConnectKitButton />;
};
