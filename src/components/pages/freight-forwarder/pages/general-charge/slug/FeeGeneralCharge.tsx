import React from "react";
import LayoutViewSingleDetails from "../../view-single-details/LayoutViewSingleDetails";
import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";
import { getKeyByValue } from "@/src/helpers/helpers";
import { UnitOfMeasurementOptions } from "@/src/network/eNum";

export default function FeeGeneralCharge({
  generalCharge,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generalCharge?: any;
}) {
  const perUnitFee = generalCharge?.perUnitFee;
  return (
    <LayoutViewSingleDetails title="Charge Fees">
      <div className="bg-white border border-[#E9EAEB] p-6 rounded-lg w-full mb-3 shadow-md flex flex-col gap-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <TitleAndDescribtion
            title="Unit of measure"
            description={
              getKeyByValue(UnitOfMeasurementOptions, perUnitFee?.unit) ?? ""
            }
          />
          <TitleAndDescribtion
            title="Fee Charge"
            description={perUnitFee?.value}
          />
          <TitleAndDescribtion
            title="Fee Comment"
            description={perUnitFee?.description}
          />
        </div>
      </div>
    </LayoutViewSingleDetails>
  );
}
