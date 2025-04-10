"use client";
import React from "react";
import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import { Button } from "antd";
import { SquarePen } from "lucide-react";
import NewServiceBtn from "../btns/NewServiceBtn";
import Export from "../btns/Export";
import NewLocaleChargeBtn from "../btns/NewLocaleChargeBtn";
import NewGeneralChargeBtn from "../btns/NewGeneralChargeBtn";
import NewTarrifsBtn from "../btns/NewTarrifsBtn";
import NewCarriersBtn from "../btns/NewCarriersBtn";
import NewTermsAndConditionsBtn from "../btns/NewTermsAndConditionsBtn";
import NewDemurrageAndDetentionBtn from "../btns/NewDemurrageAndDetentionBtn";
import NewInsuranceBtn from "../btns/NewInsuranceBtn";

export default function FreightForwarderHeadLine({
  headlinetitle,
  hideBulkEdit = false,
}: {
  headlinetitle: string;
  hideBulkEdit?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
      <div className="flex items-center gap-2">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">
          {headlinetitle}
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {headlinetitle.startsWith("Local") ? (
          <NewLocaleChargeBtn />
        ) : headlinetitle.startsWith("General") ? (
          <NewGeneralChargeBtn />
        ) : headlinetitle.startsWith("Tarrifs") ? (
          <NewTarrifsBtn />
        ) : headlinetitle.startsWith("Carriers") ? (
          <NewCarriersBtn />
        ) : headlinetitle.startsWith("Terms") ? (
          <NewTermsAndConditionsBtn />
        ) : headlinetitle.startsWith("Demurrage") ? (
          <NewDemurrageAndDetentionBtn />
        ) : headlinetitle.startsWith("Insurance") ? (
          <NewInsuranceBtn />
        ) : (
          <NewServiceBtn />
        )}

        {!hideBulkEdit && (
          <Button ghost type="primary" htmlType="submit" className="!w-fit">
            <SquarePen size={15} />
            Bulk Edit
          </Button>
        )}

        <Export />
      </div>
    </div>
  );
}
