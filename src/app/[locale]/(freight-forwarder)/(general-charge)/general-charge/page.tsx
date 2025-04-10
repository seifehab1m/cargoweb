import FreightForwarderHeadLine from "@/src/components/pages/freight-forwarder/shared/FreightForwarderHeadLine";
import FreightForwarderTable from "@/src/components/pages/freight-forwarder/shared/FreightForwarderTable";
import React from "react";

export default function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  console.log(params);
  return (
    <div className="container py-10">
      <FreightForwarderHeadLine headlinetitle="General Charge" />
      <FreightForwarderTable searchParams={searchParams} />
    </div>
  );
}
