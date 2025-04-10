import { DatePicker, DatePickerProps, Form } from "antd";
import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useSearchParams } from "next/navigation";

dayjs.extend(utc);

export default function DatePickerFormItem({
  label,
  name,
  ...other
}: {
  label: string;
  name: string;
} & DatePickerProps) {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get(name);
  return (
    <Form.Item
      label={label}
      name={name}
      getValueProps={(value) => ({
        value: value ? dayjs(value) : null,
      })}
      normalize={(value) => (value ? dayjs(value).utc(true).toISOString() : null)}
      initialValue={initialValue}
    >
      <DatePicker
        style={{ width: "100%" }}
        disabledDate={(current) => current && current < dayjs().startOf("day")}
        {...other}
      />
    </Form.Item>
  );
}
