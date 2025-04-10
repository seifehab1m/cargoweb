import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import { Form, Input } from "antd";
import CarriersType from "../../form-helpers/CarriersType";
import CurrencyDropDown from "../../form-helpers/CurrencyDropDown";
import { useSearchParams } from "next/navigation";

export default function TarrifFilterForm() {
  const searchParams = useSearchParams();
  const initialValueTarrif = searchParams.get("name");
  return (
    <>
      <Form.Item name="name" label="Tarrif Name " initialValue={initialValueTarrif}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item name="contactNumber" label="Contact Number ">
        <Input placeholder="" />
      </Form.Item>
      <DatePickerFormItem label="Created from " name="createdFrom" />
      <DatePickerFormItem label="Created to" name="createdTo" />
      <DatePickerFormItem label="Valid From" name="validFrom" />
      <DatePickerFormItem label="Valid to" name="validTo" />
      <ModeDropDown required={false} />
      <CarriersType />
      <CurrencyDropDown />
      <CountriesDropDown label="Via Location(s)" name="viaLocations" />
    </>
  );
}
