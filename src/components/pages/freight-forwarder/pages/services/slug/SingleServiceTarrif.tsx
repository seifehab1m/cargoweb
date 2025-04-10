import React from "react";
import LayoutViewSingleDetails from "../../view-single-details/LayoutViewSingleDetails";
import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";
import dayjs from "dayjs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SingleServiceTarrif({ service }: { service?: any }) {
  console.log(service, "sedrvice");
  return (
    <LayoutViewSingleDetails title="Tariff Info">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-9">
        <TitleAndDescribtion
          title="Tariff name"
          description={service?.tariff?.name}
        />
        <TitleAndDescribtion
          title="Tariff number"
          description={service?.tariff?.contractNumber}
        />
        <TitleAndDescribtion
          title="Upload time"
          description={
            !service?.tariff?.validFrom
              ? ""
              : dayjs(service?.validFrom).format("MMM D, YYYY")
          }
        />
        <TitleAndDescribtion
          title="Currency"
          description={service?.tariff?.currency}
        />
      </div>
    </LayoutViewSingleDetails>
  );
}
