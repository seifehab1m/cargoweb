import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import RolesDropDown from "../../form-helpers/RolesDropDown";
import { Form, Slider } from "antd";

export default function RolesFilterForm() {
  return (
    <>
      <DatePickerFormItem label="Created From" name="createdFrom" />
      <DatePickerFormItem label="Created To " name="createdTo" />
      <RolesDropDown />
      <div/>
      <Form.Item label="No. of Users" name="transitTime">
        <Slider range defaultValue={[10, 30]} min={0} max={60} />
      </Form.Item>
    </>
  );
}
