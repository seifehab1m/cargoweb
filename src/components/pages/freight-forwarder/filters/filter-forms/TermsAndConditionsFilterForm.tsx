import { Checkbox, Form, Input } from "antd";
import React, { Dispatch } from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import { ItemTypeOriginsAndDestinations } from "../../form-helpers/formTypes";
import OriginsAndDestinationsTreeSelect from "../../form-helpers/origins-and-destinations-services/OriginsAndDestinationsTreeSelect";

export default function TermsAndConditionsFilterForm({
  setOrigins,
  setDestinations,
}: {
  setOrigins: Dispatch<React.SetStateAction<ItemTypeOriginsAndDestinations[]>>;
  setDestinations: Dispatch<
    React.SetStateAction<ItemTypeOriginsAndDestinations[]>
  >;
}) {
  return (
    <>
      <DatePickerFormItem label="Created from " name="createdFrom" />
      <DatePickerFormItem label="Created to" name="createdTo" />
      <Form.Item name="fullName" label="Full Name ">
        <Input placeholder="Enter your Full name" />
      </Form.Item>
      <ModeDropDown required={false} />
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
      <Form.Item label="Activated" name="Activated">
        <Checkbox.Group>
          <Checkbox value={1}>Yes</Checkbox>
          <Checkbox value={2}>No</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="description" label="Description ">
        <Input placeholder="Enter your description" />
      </Form.Item>
    </>
  );
}
