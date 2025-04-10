import { Form, Input } from "antd";
import React from "react";
import CarriersType from "../../form-helpers/CarriersType";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import UploadImage from "../../form-helpers/UploadImage";

export default function CarrierForm() {
  return (
    <div className="flex flex-col gap-y-4  ">
      <Form.Item
        name="primaryName"
        label="Carrier Name *"
        rules={[{ required: true, message: "Please enter your Carrier name" }]}
      >
        <Input placeholder="Enter your Carrier name" />
      </Form.Item>
      <Form.Item
        name="code"
        label="Carrier Code *"
        rules={[{ required: true, message: "Please enter your Carrier Code" }]}
      >
        <Input placeholder="Enter your Carrier Code" />
      </Form.Item>
      <CarriersType />
      <CountriesDropDown label="Country" name="countryId" isMultiple={false} />
      <UploadImage name="logo" label="Carrier logo" />
    </div>
  );
}
