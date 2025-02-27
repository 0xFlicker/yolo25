"use client";
import { FC } from "react";
import {
  BanknotesIcon,
  BeakerIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { MenuItem } from "./MenuItem";
import { useParams } from "next/navigation";

export const SiteMenu: FC<{
  isDeposit?: boolean;
  isStake?: boolean;
  isInventory?: boolean;
}> = ({ isDeposit = false, isStake = false, isInventory = false }) => {
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
        href={`/${meta}/stake`}
        disabled={isStake}
        icon={<BeakerIcon />}
        text="Stake"
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
