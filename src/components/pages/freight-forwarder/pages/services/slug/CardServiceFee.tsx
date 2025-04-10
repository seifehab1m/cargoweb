import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";
import { getKeyByValue } from "@/src/helpers/helpers";
import { UnitOfMeasurementOptions } from "@/src/network/eNum";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardServiceFee({ fee }: { fee: any }) {
  return (
    <div className="bg-white border border-[#E9EAEB] p-6 rounded-lg w-full mb-3 shadow-md flex flex-col gap-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <TitleAndDescribtion title="Fee code and name" description="" />
        <TitleAndDescribtion title="Currency" description={fee?.currency} />
        <TitleAndDescribtion title="Unit of measure" description={getKeyByValue(UnitOfMeasurementOptions, fee?.unit)??""} />
        <TitleAndDescribtion title="Fee comment" description={fee?.description} />
      </div>
      <TitleAndDescribtion title="Fee charge" description={fee?.value} />
    </div>
  );
}
