import { CurrencyOptions } from '@/src/network/eNum'
import { Button, Form, Input, Select } from 'antd'
import { Plus, Trash } from 'lucide-react'
import React from 'react'

export default function FlatFeeInsurance() {
  return (
    <Form.List
    name="weightBreaks"
    initialValue={[
      { daysFrom: "", daysTo: "", cost: "", currency: "" },
    ]}
  >
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <div key={key} className="flex gap-2 items-center pb-2">
            <Form.Item
              {...restField}
              name={[name, "daysFrom"]}
              label="Goods value from"
              rules={[
                {
                  required: true,
                  message: "Please enter Days From",
                },
              ]}
              style={{ width: "30%" }}
            >
              <Input type="number" placeholder="Days From" />
            </Form.Item>

            <Form.Item
              {...restField}
              name={[name, "daysTo"]}
              label="Goods value to"
              rules={[
                { required: true, message: "Please enter Days To" },
              ]}
              style={{ width: "30%" }}
            >
              <Input type="number" placeholder="Days To" />
            </Form.Item>

            <Form.Item
              {...restField}
              name={[name, "cost"]}
              label="Flat value"
              rules={[
                { required: true, message: "Please enter Cost" },
              ]}
              style={{ width: "30%" }}
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
            Add value range
          </div>
        </Form.Item>
      </>
    )}
  </Form.List>
  )
}
