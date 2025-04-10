import React from "react";
import FreightForwarderHeadLine from "@/src/components/pages/freight-forwarder/shared/FreightForwarderHeadLine";
import FreightForwarderTable from "@/src/components/pages/freight-forwarder/shared/FreightForwarderTable";

export default function page() {
  return (
    <div className="container py-10">
      <FreightForwarderHeadLine headlinetitle="Fees" />
      <FreightForwarderTable />
    </div>
  );
}
