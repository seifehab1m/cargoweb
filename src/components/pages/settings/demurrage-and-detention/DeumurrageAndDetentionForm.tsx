import { Plus, Trash } from "lucide-react";
import { CurrencyOptions } from "@/src/network/eNum";
import { Button, Form, Input, Select } from "antd";

export default function DeumurrageAndDetentionForm({
  isDeumrrage = true,
}: {
  isDeumrrage?: boolean;
}) {
  return (
    <div className="flex flex-col gap-y-3">
      <Form.Item name="fullName" label="Free time (days)" layout="horizontal">
        <Input placeholder="" />
      </Form.Item>

      <h5 className="text-primary text-base !font-[600] pt-3">
        {isDeumrrage ? "Demurrage" : "Detention"} cost intervals
      </h5>
      <Form.List
        name="weightBreaks"
        initialValue={[{ daysFrom: "", daysTo: "", cost: "", currency: "" }]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="flex gap-2 items-center pb-2">
                <Form.Item
                  {...restField}
                  name={[name, "daysFrom"]}
                  label="Days From"
                  rules={[
                    { required: true, message: "Please enter Days From" },
                  ]}
                  style={{ width: "25%" }}
                >
                  <Input type="number" placeholder="Days From" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "daysTo"]}
                  label="Days To"
                  rules={[{ required: true, message: "Please enter Days To" }]}
                  style={{ width: "25%" }}
                >
                  <Input type="number" placeholder="Days To" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "cost"]}
                  label="Cost"
                  rules={[{ required: true, message: "Please enter Cost" }]}
                  style={{ width: "25%" }}
                >
                  <Input type="number" placeholder="Cost" />
                </Form.Item>

                <Form.Item label="Currency " name="currency">
                  <Select
                    options={Object.entries(CurrencyOptions).map(
                      ([key, value]) => ({
                        value,
                        label: key,
                      })
                    )}
                    placeholder="Select Currency"
                  />
                </Form.Item>

                <div className="flex items-center h-full">
                  <Button
                    type="link"
                    onClick={() => remove(name)}
                    style={{
                      marginTop: "28px",
                    }}
                    icon={<Trash size={16} />}
                  />
                </div>
              </div>
            ))}

            <Form.Item>
              <div
                onClick={() => add()}
                className="!text-primaryLight !w-fit  flex items-center gap-1 cursor-pointer"
              >
                <Plus size={15} />
                Add interval
              </div>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}
