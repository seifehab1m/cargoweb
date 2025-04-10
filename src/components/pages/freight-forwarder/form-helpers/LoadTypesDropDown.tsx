import { LoadUnit } from "@/src/network/eNum";
import { Form, Select } from "antd";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function LoadTypesDropDown() {
  const searchParams = useSearchParams();
  const initialValue = searchParams.getAll("loadType");

  const parsedInitialValue = Array.isArray(initialValue)
    ? initialValue.map(Number)
    : Number(initialValue);

  return (
    <Form.Item
      label="Load Type"
      name="loadUnit"
      initialValue={parsedInitialValue}
    >
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Select one country"
        options={Object.entries(LoadUnit).map(([key, value]) => ({
          value,
          label: key,
        }))}
      />
    </Form.Item>
  );
}
