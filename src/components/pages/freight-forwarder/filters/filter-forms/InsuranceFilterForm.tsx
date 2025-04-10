import { Checkbox, Form, Input } from "antd";
import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";

export default function InsuranceFilterForm() {
  return (
    <>
      <DatePickerFormItem label="Created from " name="createdFrom" />
      <DatePickerFormItem label="Created to" name="createdTo" />
      <Form.Item name="fullName" label=" Name ">
        <Input placeholder="Enter your  name" />
      </Form.Item>
      <div className="col-span-">
        <Form.Item name="Description" label="Description ">
          <Input placeholder="Enter your  description" />
        </Form.Item>
      </div>
      <Form.Item label="Pricing" name="Activated">
        <Checkbox.Group>
          <Checkbox value={1}>Premimum</Checkbox>
          <Checkbox value={2}>Flat fee</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="Activated" name="Activated">
        <Checkbox.Group>
          <Checkbox value={1}>Yes</Checkbox>
          <Checkbox value={2}>No</Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </>
  );
}
