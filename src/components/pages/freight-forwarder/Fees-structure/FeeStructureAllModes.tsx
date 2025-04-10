import { Form, Input, Radio, Select, Checkbox } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function FeeStructureAllModes() {
  const [selectedOption, setSelectedOption] = useState(1);

  const searchParams = useSearchParams();
  const unitOfMeasure = searchParams.get("unitOfMeasure")?.toLocaleLowerCase();
  const modeType = searchParams.get("mode");

  console.log("unitOfMeasure", unitOfMeasure, modeType);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRadioChange = (e: any) => {
    setSelectedOption(e.target.value);
    console.log("Selected:", e.target.value);
  };

  const options = [
    { label: "LAX", value: "LAX", desc: "LAX " },
    { label: "JED", value: "JED", desc: "JED" },
    { label: "TEK", value: "TEK", desc: "TEK" },
  ];

  return (
    <>
      <h4 className="text-titleColor pt-6">Fee structure</h4>
      <div className="flex flex-col gap-y-2 pt-1">
        {unitOfMeasure === "perflat" && (
          <Form.Item
            label="Fee charge*"
            name="value"
            rules={[
              { required: true, message: "Please enter your Fee charge" },
            ]}
          >
            <Input placeholder="Enter Fee charge" />
          </Form.Item>
        )}

        {unitOfMeasure === "perpercentage" && (
          <>
            <Form.Item
              label="Based on"
              name="percentageCalculationType"
              initialValue={1}
            >
              <Radio.Group onChange={handleRadioChange} value={selectedOption}>
                <Radio value={1}>Fees</Radio>
                <Radio value={2}>Quote Total</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="Fees" label="Fees*">
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select one country"
                options={options}
              />
            </Form.Item>
            <Form.Item
              label="Percentage*"
              name="percentage"
              rules={[
                { required: true, message: "Please enter your percentage" },
              ]}
            >
              <Input placeholder="Enter Percentage" />
            </Form.Item>
            <Form.Item
              label="Min*"
              name="min"
              rules={[{ required: true, message: "Please enter min" }]}
            >
              <Input placeholder="Enter Min value" />
            </Form.Item>
            <Form.Item
              label="Max*"
              name="max"
              rules={[{ required: true, message: "Please enter max" }]}
            >
              <Input placeholder="Enter Max value" />
            </Form.Item>

            {selectedOption === 2 && (
              <Form.Item label="Excluded legs" name="execludedLegs">
                <Checkbox.Group>
                  <Checkbox value={1}>Pickup</Checkbox>
                  <Checkbox value={2}>Delivery</Checkbox>
                  <Checkbox value={3}>Main Leg</Checkbox>
                  <Checkbox value={4}>Origin</Checkbox>
                  <Checkbox value={5}>Destination</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            )}
          </>
        )}

        {unitOfMeasure === "perunit" && (
          <>
            <Form.Item
              label="Fee charge*"
              name="value"
              rules={[{ required: true, message: "Please enter Fee charge" }]}
            >
              <Input placeholder="Enter Fee charge" />
            </Form.Item>

            <Form.Item
              label="Min*"
              name="min"
              rules={[{ required: true, message: "Please enter Min value" }]}
            >
              <Input placeholder="Enter Min value" />
            </Form.Item>

            <Form.Item
              label="Max*"
              name="max"
              rules={[{ required: true, message: "Please enter Max value" }]}
            >
              <Input placeholder="Enter Max value" />
            </Form.Item>
          </>
        )}
      </div>
    </>
  );
}
