import { Form, Input } from "antd";
import React from "react";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import CarriersType from "../../form-helpers/CarriersType";
import { useSearchParams } from "next/navigation";

export default function CarriersFilterForm() {
  const searchParams = useSearchParams();
  const initialValueName = searchParams.get("name");
  return (
    <>
      <Form.Item
        initialValue={initialValueName}
        name="name"
        label="Carrier Name *"
      >
        <Input placeholder="Enter your Carrier name" />
      </Form.Item>
      <Form.Item name="code" label="Carrier Code *">
        <Input placeholder="Enter your Carrier Code" />
      </Form.Item>
      <CarriersType />
      <CountriesDropDown label="Country" name="country" />
    </>
  );
}
