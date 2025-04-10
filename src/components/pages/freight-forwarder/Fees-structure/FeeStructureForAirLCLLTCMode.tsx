import { Form, Input, Radio, Button, Select } from "antd";
import React, { useState } from "react";
import { Trash } from "lucide-react"; // Import the Trash icon from lucide-react
import { useSearchParams } from "next/navigation";

export default function FeeStructureForAirLCLLTCMode() {
  const [selectedOption, setSelectedOption] = useState(1);

  const searchParams = useSearchParams();
  const unitOfMeasure = searchParams.get("unitOfMeasure")?.toLowerCase();
  const isUnitOfMeasurePerKgOrCbm =
    unitOfMeasure === "perkglb" || unitOfMeasure === "percbmcft";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRadioChange = (e: any) => {
    setSelectedOption(e.target.value);
    console.log("Selected:", e.target.value);
  };

  // Options for the Select field
  const dimFactorType = [{ label: "Ccmkg", value: 1 }];

  return (
    <>
      <h4 className="text-titleColor pt-5">Fee structure</h4>
      <div className="flex flex-col gap-y-2 pt-1">
        {isUnitOfMeasurePerKgOrCbm && (
          <>
            <Form.Item label="Based On" name="chargeType" initialValue={1}>
              <Radio.Group onChange={handleRadioChange} value={selectedOption}>
                <Radio value={1}>Actual weight</Radio>
                <Radio value={2}>Chargeable weight</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Min" name="min">
              <Input type="number" placeholder="Enter Min value" />
            </Form.Item>

            <Form.List
              name="weightBreaks"
              initialValue={[{ value: "", weight: "" }]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div key={key} className="flex gap-2 items-center">
                      <Form.Item
                        {...restField}
                        name={[name, "value"]}
                        rules={[
                          { required: true, message: "This field is required" },
                        ]}
                        style={{ width: "20%" }}
                      >
                        <Input type="number" placeholder=" value" />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "weight"]}
                        rules={[
                          { required: true, message: "This field is required" },
                        ]}
                        style={{ width: "80%" }}
                      >
                        <Input type="number" placeholder="weight" />
                      </Form.Item>

                      <Button
                        type="link"
                        onClick={() => remove(name)}
                        style={{ marginLeft: "8px" }}
                        icon={<Trash size={16} />}
                      />
                    </div>
                  ))}

                  <Form.Item>
                    <Button
                      type="text"
                      onClick={() => add()}
                      block
                      className="!text-primaryLight"
                    >
                      Add weight break
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item label="Max" name="max">
              <Input placeholder="Enter Max value" />
            </Form.Item>

            <Form.Item label="Base" name="base">
              <Input placeholder="Enter Base value" />
            </Form.Item>

            {selectedOption === 2 && (
              <Form.Item label="Dim factor" name="dimFactor">
                <div className="flex gap-6">
                  <Form.Item
                    name="dimFactorValue"
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                    style={{ width: "70%" }}
                  >
                    <Input type="number" placeholder="Dim factor value" />
                  </Form.Item>

                  <Form.Item
                    name="dimFactorType"
                    rules={[
                      { required: true, message: "This field is required" },
                    ]}
                    style={{ width: "30%", height: "100%" }}
                  >
                    <Select
                      placeholder="Select option"
                      options={dimFactorType}
                    />
                  </Form.Item>
                </div>
              </Form.Item>
            )}
          </>
        )}

        {unitOfMeasure === "perweightmeasure" && (
          <>
            <Form.Item label="Fee charge" name="value">
              <Input placeholder="Enter Fee charge" />
            </Form.Item>

            <Form.Item label="Min" name="min">
              <Input placeholder="Enter Min value" />
            </Form.Item>

            <Form.Item label="Max" name="max">
              <Input placeholder="Enter Max value" />
            </Form.Item>
            <Form.Item label="Dim factor">
              <div className="flex gap-6">
                <Form.Item
                  name="dimFactorValue"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                  style={{ width: "70%" }}
                >
                  <Input type="number" placeholder="Dim factor value" />
                </Form.Item>

                <Form.Item
                  name="dimFactorType"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                  style={{ width: "30%", height: "100%" }}
                >
                  <Select placeholder="Select option" options={dimFactorType} />
                </Form.Item>
              </div>
            </Form.Item>
          </>
        )}
      </div>
    </>
  );
}
