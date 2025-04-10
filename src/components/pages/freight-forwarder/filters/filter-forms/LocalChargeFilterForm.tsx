import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import FeeLockupId from "../../form-helpers/FeeLockupId";

export default function LocalChargeFilterForm() {
  return (
    <>
      <DatePickerFormItem label="Created from " name="createdFrom" />
      <DatePickerFormItem label="Created to" name="createdTo" />
      <FeeLockupId  required={false}/>
      <ModeDropDown required={false}  />
      <DatePickerFormItem label="Valid From" name="validFrom" />
      <DatePickerFormItem label="Valid to" name="validTo" />
      <CountriesDropDown label="Country" />
      <CountriesDropDown label="Region" name="region" />
    </>
  );
}
