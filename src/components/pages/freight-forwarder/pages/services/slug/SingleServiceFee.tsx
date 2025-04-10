import React from "react";
import LayoutViewSingleDetails from "../../view-single-details/LayoutViewSingleDetails";
import CardServiceFee from "./CardServiceFee";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SingleServiceFee({ service }: { service?: any }) {
  return (
    <LayoutViewSingleDetails title="Service Fees">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {service?.perUnitFees?.map((fee: any, index: number) => (
        <CardServiceFee key={index} fee={fee} />
      ))}
    </LayoutViewSingleDetails>
  );
}
