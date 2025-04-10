import FreightForwarderHeadLine from "@/src/components/pages/freight-forwarder/shared/FreightForwarderHeadLine";
import FreightForwarderTable from "@/src/components/pages/freight-forwarder/shared/FreightForwarderTable";
import React from "react";

export default function page() {
  return (
    <div className="container py-10">
      <FreightForwarderHeadLine headlinetitle="Demurrage & Detention" hideBulkEdit/>
      <FreightForwarderTable />
    </div>
  );
}
