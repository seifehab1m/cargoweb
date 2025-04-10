import LayoutViewSingleDetails from "@/src/components/pages/freight-forwarder/pages/view-single-details/LayoutViewSingleDetails";
import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";
import { getKeyByValue } from "@/src/helpers/helpers";
import { UnitOfMeasurementOptions } from "@/src/network/eNum";
import ViewTermsAndConditionsContent from "./ViewTermsAndConditionsContent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ViewSingleTermsAndConditions({
  service,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service?: any;
}) {
  return (
    <LayoutViewSingleDetails title="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-9">
        <TitleAndDescribtion title="Name" description="" />
        <TitleAndDescribtion
          title="Mode"
          description={
            getKeyByValue(UnitOfMeasurementOptions, service?.mode) ?? ""
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
        <TitleAndDescribtion
          title="Commodity"
          description={service?.description}
        />
      </div>
      <TitleAndDescribtion title="HS Codes" description="" />
      <ViewTermsAndConditionsContent />
    </LayoutViewSingleDetails>
  );
}
