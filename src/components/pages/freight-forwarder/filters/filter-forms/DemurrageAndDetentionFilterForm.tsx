import { Form, Input, Slider } from "antd";
import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";

export default function DemurrageAndDetentionFilterForm() {
  return (
    <>
      <DatePickerFormItem label="Created from " name="createdFrom" />
      <DatePickerFormItem label="Created to" name="createdTo" />
      <Form.Item name="fullName" label=" Name ">
        <Input placeholder="Enter your  name" />
      </Form.Item>
      <Form.Item label="Demurrage Free time (days)" name="transitTime">
        <Slider range defaultValue={[10, 30]} min={0} max={60} />
      </Form.Item>
      <div className="col-span-2">
        <Form.Item name="Description" label="Description ">
          <Input placeholder="Enter your  description" />
        </Form.Item>
      </div>
    </>
  );
}
