import React from "react";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import OfficeDropDown from "../../form-helpers/OfficeDropDown";
import RolesDropDown from "../../form-helpers/RolesDropDown";
import EmailFormItem from "../../form-helpers/EmailFormItem";
import { Checkbox, Form, Input } from "antd";

export default function UsersFilterForm() {
  return (
    <>
      <DatePickerFormItem label="Created From" name="createdFrom" />
      <DatePickerFormItem label="Created To " name="createdTo" />
      <EmailFormItem />
      <OfficeDropDown />
      <Form.Item
        name="Phone"
        label={"Phone " + "*"}
        required={false}
        rules={[{ required: true, message: "" }]}
      >
        <Input type="number" />
      </Form.Item>
      <RolesDropDown />
      <Form.Item label="Status" name="Status">
        <Checkbox.Group>
          <Checkbox value={1}>Active</Checkbox>
          <Checkbox value={2}>InActive</Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </>
  );
}
