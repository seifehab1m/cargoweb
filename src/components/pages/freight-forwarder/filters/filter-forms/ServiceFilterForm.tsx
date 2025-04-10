import React, { Dispatch } from "react";
import OriginsAndDestinationsTreeSelect from "../../form-helpers/origins-and-destinations-services/OriginsAndDestinationsTreeSelect";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import LoadTypesDropDown from "../../form-helpers/LoadTypesDropDown";
import { Form, Slider } from "antd";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import { ItemTypeOriginsAndDestinations } from "../../form-helpers/formTypes";

export default function ServiceFilterForm({
  setOrigins,
  setDestinations,
}: {
  setOrigins: Dispatch<React.SetStateAction<ItemTypeOriginsAndDestinations[]>>;
  setDestinations: Dispatch<React.SetStateAction<ItemTypeOriginsAndDestinations[]>>;
}) {
  return (
    <>
      <OriginsAndDestinationsTreeSelect
        name="origins"
        label="Origin(s) *"
        setOptions={setOrigins}
      />

      <OriginsAndDestinationsTreeSelect
        name="destinations"
        label="Destination(s) *"
        setOptions={setDestinations}
      />

      <DatePickerFormItem label="Valid From" name="validFrom" />
      <DatePickerFormItem label="Valid to" name="validTo" />
      <ModeDropDown required={false} />
      <LoadTypesDropDown />
      <CountriesDropDown label="Via Location(s)" name="viaLocations" />

      <Form.Item label="Transit Time" name="transitTime">
        <Slider range defaultValue={[10, 30]} min={0} max={60} />
      </Form.Item>
    </>
  );
}
