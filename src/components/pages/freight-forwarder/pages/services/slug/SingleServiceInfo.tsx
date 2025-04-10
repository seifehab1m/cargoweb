import LayoutViewSingleDetails from "@/src/components/pages/freight-forwarder/pages/view-single-details/LayoutViewSingleDetails";
import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";
import { getKeyByValue } from "@/src/helpers/helpers";
import { UnitOfMeasurementOptions } from "@/src/network/eNum";
import dayjs from "dayjs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SingleServiceInfo({ service }: { service?: any }) {
  return (
    <LayoutViewSingleDetails title="Service Info">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-9">
        <TitleAndDescribtion title="Origin(s)" description="" />
        <TitleAndDescribtion title="Destination(s)" description="" />
        <TitleAndDescribtion
          title="Mode"
          description={
            getKeyByValue(UnitOfMeasurementOptions, service?.mode) ?? ""
          }
        />
        <TitleAndDescribtion
          title="Transit time"
          description={service?.transitTimeFrom + "-" + service?.transitTimeTo}
        />
        <TitleAndDescribtion
          title="Load units"
          description={
            service?.loadUnits
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // ?.map((item: any) => getKeyByValue(LoadUnit, item))
            // .join(", ")
          }
        />
        <TitleAndDescribtion title="Carrier" description="" />
        <TitleAndDescribtion title="Via" description={service?.via} />
        <TitleAndDescribtion
          title="Validity"
          description={`${
            !service?.validFrom
              ? ""
              : dayjs(service?.validFrom).format("MMM D, YYYY")
          } - 
            ${
              !service?.validTo
                ? ""
                : dayjs(service?.validTo).format("MMM D, YYYY")
            }`}
        />
      </div>
      <div className="pt-4 flex flex-col gap-y-6">
        <TitleAndDescribtion title="HS Codes" description="" />
        <TitleAndDescribtion
          title="Commodity"
          description={service?.description}
        />
      </div>
    </LayoutViewSingleDetails>
  );
}
