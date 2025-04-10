import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";
import LayoutViewSingleDetails from "../../view-single-details/LayoutViewSingleDetails";
import { getKeyByValue } from "@/src/helpers/helpers";
import {
  CurrencyOptions,
  LoadUnit,
  UnitOfMeasurementOptions,
} from "@/src/network/eNum";
import dayjs from "dayjs";

export default function ChargeInfoGeneralCharge({
  generalCharge,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generalCharge?: any;
}) {
  return (
    <LayoutViewSingleDetails title="Charge Info">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-9">
        <TitleAndDescribtion title="Fee code and name" description={" "} />
        <TitleAndDescribtion
          title="Currency"
          description={
            getKeyByValue(CurrencyOptions, generalCharge?.currency) as string
          }
        />
        <TitleAndDescribtion
          title="Mode"
          description={
            getKeyByValue(UnitOfMeasurementOptions, generalCharge?.mode) ?? ""
          }
        />
        <TitleAndDescribtion
          title="Carrier"
          description={generalCharge?.carrierName}
        />
        <TitleAndDescribtion title="Via" description={generalCharge?.via} />
        <TitleAndDescribtion
          title="Load units"
          description={generalCharge?.loadUnits
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ?.map((item: any) => getKeyByValue(LoadUnit, item))
            .join(", ")}
        />
        <TitleAndDescribtion
          title="Valid From"
          description={`${
            !generalCharge?.validFrom
              ? ""
              : dayjs(generalCharge?.validFrom).format("MMM D, YYYY")
          } `}
        />
        <TitleAndDescribtion
          title="Valid to"
          description={`${
            !generalCharge?.validTo
              ? ""
              : dayjs(generalCharge?.validTo).format("MMM D, YYYY")
          } `}
        />
      </div>
      <TitleAndDescribtion title="Commodity" description={generalCharge?.via} />
    </LayoutViewSingleDetails>
  );
}
