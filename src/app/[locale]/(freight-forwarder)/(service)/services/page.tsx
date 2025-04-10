import React from "react";
import FreightForwarderHeadLine from "@/src/components/pages/freight-forwarder/shared/FreightForwarderHeadLine";
import FreightForwarderTable from "@/src/components/pages/freight-forwarder/shared/FreightForwarderTable";

export default function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  console.log( params);
  return (
    <div className="container py-10">
      <FreightForwarderHeadLine headlinetitle="Services" />
      <FreightForwarderTable searchParams={searchParams} />
    </div>
  );
}
