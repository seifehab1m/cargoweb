import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import FeeLockupId from "../../form-helpers/FeeLockupId";
import LoadTypesDropDown from "../../form-helpers/LoadTypesDropDown";

export default function GeneralChargeFilterForm() {
  return (
    <>
      <FeeLockupId required={false} />
      <ModeDropDown required={false} />
      <DatePickerFormItem label="Valid From" name="validFrom" />
      <DatePickerFormItem label="Valid to" name="validTo" />
      <LoadTypesDropDown />
      <CountriesDropDown label="Via Location(s)" name="viaLocations" />
    </>
  );
}
