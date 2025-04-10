import { Form, Input, Select, Checkbox, Button } from "antd";
import React from "react";
import { Trash } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { LoadUnit } from "@/src/network/eNum";

export default function FeeStructureFCLMode() {
  const searchParams = useSearchParams();
  const unitOfMeasure = searchParams.get("unitOfMeasure")?.toLocaleLowerCase();
  const isUnitOfMeasurePerKgOrCbm =
    unitOfMeasure === "perteu" || unitOfMeasure === "perton";

  const options = [
    { label: "LAX", value: "LAX", desc: "LAX " },
    { label: "JED", value: "JED", desc: "JED" },
    { label: "TEK", value: "TEK", desc: "TEK" },
  ];

  return (
    <>
      <h4 className="text-titleColor pt-5">Fee structure</h4>
      <div className="flex flex-col gap-y-2 pt-1">
        {isUnitOfMeasurePerKgOrCbm && (
          <>
            <Form.Item label="Charge" name="charge">
              <Input placeholder="Enter charge" />
            </Form.Item>

            <Form.Item label="Min" name="min">
              <Input placeholder="Enter Min value" />
            </Form.Item>

            <Form.Item label="Max" name="max">
              <Input placeholder="Enter Max value" />
            </Form.Item>

            {unitOfMeasure === "perteu" && (
              <Form.Item label="Base" name="base">
                <Input placeholder="Enter Base value" />
              </Form.Item>
            )}
          </>
        )}

        {unitOfMeasure === "percontainer" && (
          <Form.List name="perContainerFees" initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <div className="flex gap-3 w-full items-center">
                      <Form.Item
                        {...restField}
                        name={[name, "containerSize"]}
                        label="Container Size"
                        rules={[{ required: false }]}
                        style={{ width: "25%" }}
                      >
                        <Select
                          placeholder="Container size"
                          options={options}
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "loadContainer"]}
                        label="Container Type"
                        rules={[{ required: false }]}
                        style={{ width: "25%" }}
                      >
                        <Select
                          placeholder="Container type"
                          options={Object.entries(LoadUnit).map(
                            ([key, value]) => ({
                              value,
                              label: key,
                            })
                          )}
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "value"]}
                        label="Charge"
                        rules={[{ required: false }]}
                        style={{ width: "25%" }}
                      >
                        <Input placeholder="Charge" />
                      </Form.Item>

                      <div className="flex items-center pt-8 w-1/4">
                        <Form.Item
                          {...restField}
                          name={[name, "isOverWeight"]}
                          valuePropName="checked"
                        >
                          <Checkbox>Overweight</Checkbox>
                        </Form.Item>

                        <Button
                          type="link"
                          onClick={() => remove(name)}
                          style={{ margin: "0px", padding: "0px" }}
                          icon={<Trash size={16} />}
                        />
                      </div>
                    </div>

                    <Form.Item shouldUpdate noStyle>
                      {({ getFieldValue }) =>
                        getFieldValue([
                          "perContainerFees",
                          name,
                          "isOverWeight",
                        ]) && (
                          <div className="flex flex-col gap-1 ">
                            <div className="flex gap-3 mt-2 ">
                              <Form.Item
                                {...restField}
                                name={[name, "firstWeight"]}
                                label="first Weight"
                                className="w-1/2"
                              >
                                <Input placeholder="Enter up to" />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, "firstWeightValue"]}
                                label="first Value"
                                className="w-1/2"
                              >
                                <Input placeholder="Enter charge" />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, "secondWeight"]}
                                label="second Weight"
                                className="w-1/2"
                              >
                                <Input placeholder="Enter up to" />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, "secondWeightValue"]}
                                label="second Value"
                                className="w-1/2"
                              >
                                <Input placeholder="Enter charge" />
                              </Form.Item>
                            </div>
                            <div className="flex flex-col pt-4">
                              <h4 className="text-nowrap">above that</h4>
                              <Form.Item
                                {...restField}
                                name={[name, "aboveWeightValue"]}
                                label="Charge"
                                className="w-full"
                              >
                                <Input placeholder="Enter charge" />
                              </Form.Item>
                            </div>
                            <Form.Item
                              name="isIncremental"
                              valuePropName="checked"
                            >
                              <Checkbox>Increment values</Checkbox>
                            </Form.Item>
                          </div>
                        )
                      }
                    </Form.Item>
                  </div>
                ))}

                <Form.Item>
                  <Button type="text" onClick={() => add()} block>
                    Add Another container
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        )}
      </div>
    </>
  );
}
