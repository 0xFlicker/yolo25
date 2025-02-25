import { FC } from "react";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./MenuItem";

export const SiteMenu: FC<{
  isHome?: boolean;
}> = ({ isHome = false }) => {
  return (
    <>
      <MenuItem
        href="/"
        disabled={isHome}
        icon={<HomeModernIcon />}
        text="Home"
      />
    </>
  );
};
