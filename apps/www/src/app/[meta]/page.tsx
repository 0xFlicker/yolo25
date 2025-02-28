import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ meta: string }>;
}) {
  const { meta } = await params;
  redirect(`/${meta}/deposit/`);

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-6rem)]" />
  );
}
