"use client";
import { TransportMode } from "@/src/network/eNum";
import { Form, Select } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function ModeDropDown({
  required = true,
  intailValue,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intailValue?: any;
  required?: boolean;
}) {
  const searchParams = useSearchParams();
  const IntialValueMode = searchParams.get("mode");

  const formInstance = Form.useFormInstance();

  useEffect(() => {
    if (intailValue?.mode) {
      formInstance.setFieldsValue({
        mode: +intailValue?.mode,
      });
    } else {
      formInstance.setFieldsValue({
        mode: IntialValueMode && +IntialValueMode,
      });
    }
  }, [IntialValueMode, formInstance, intailValue]);

  return (
    <Form.Item
      name="mode"
      label={required ? "mode" + "*" : "mode"}
      required={false}
      rules={[{ required: required, message: "Please enter your mode" }]}
    >
      <Select
        options={Object.entries(TransportMode).map(([key, value]) => ({
          value: value,
          label: key,
        }))}
      />
    </Form.Item>
  );
}
