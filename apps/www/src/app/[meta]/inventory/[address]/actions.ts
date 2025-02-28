"use server";

import { revalidatePath } from "next/cache";

export async function revalidate(
  meta: "stuxnet" | "aerodrome" | "velodrome",
  address: string
) {
  revalidatePath(`/${meta}/inventory/${address}`);
}
