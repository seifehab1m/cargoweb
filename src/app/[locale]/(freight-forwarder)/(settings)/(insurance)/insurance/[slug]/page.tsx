import ViewSinglePageDetailsHeader from "@/src/components/pages/freight-forwarder/pages/view-single-details/ViewSinglePageDetailsHeader";
import InsuranceConfiguration from "@/src/components/pages/settings/insurance/slug/InsuranceConfiguration";
import InsurancePricing from "@/src/components/pages/settings/insurance/slug/InsurancePricing";
import React from "react";

export default function page() {
  return (
    <div className="container py-10">
      <ViewSinglePageDetailsHeader
        title="View Insurance"
        //   service={service}
      />

      <div className="flex flex-col gap-y-10">
        <InsuranceConfiguration />
        <InsurancePricing />
      </div>
    </div>
  );
}
