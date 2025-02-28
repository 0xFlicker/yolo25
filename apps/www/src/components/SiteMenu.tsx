"use client";
import { FC } from "react";
import { BanknotesIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./MenuItem";
import { useParams } from "next/navigation";

export const SiteMenu: FC<{
  isDeposit?: boolean;
  isInventory?: boolean;
}> = ({ isDeposit = false, isInventory = false }) => {
  const params = useParams();
  const meta = Array.isArray(params.meta) ? params.meta[0] : params.meta;
  if (!meta) return null;
  return (
    <>
      <MenuItem
        href={`/${meta}/deposit`}
        disabled={isDeposit}
        icon={<BanknotesIcon />}
        text="Deposit"
      />
      <MenuItem
        href={`/${meta}/inventory`}
        disabled={isInventory}
        icon={<ArchiveBoxIcon />}
        text="Inventory"
      />
    </>
  );
};
