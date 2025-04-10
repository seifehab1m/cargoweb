import React from "react";
import LayoutViewSingleDetails from "../../../freight-forwarder/pages/view-single-details/LayoutViewSingleDetails";
import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";

export default function InsuranceConfiguration() {
  return (
    <LayoutViewSingleDetails title="Insurance Configurations">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-9">
        <TitleAndDescribtion title="Name" description="" />
        <TitleAndDescribtion
          title="Mode"
          description={
            ""
            // getKeyByValue(UnitOfMeasurementOptions, service?.mode) ?? ""
          }
        />
        <TitleAndDescribtion title="Description" description="" />
        <TitleAndDescribtion
          title="Origins (countries | ports)"
          description=""
        />
        <TitleAndDescribtion
          title="Destinations (countries | ports)"
          description=""
        />

        <TitleAndDescribtion title="Applies on" description="" />
      </div>
      <div className="pt-4 flex flex-col gap-y-6">
        <TitleAndDescribtion title="Commodity" description={""} />
      </div>
    </LayoutViewSingleDetails>
  );
}
