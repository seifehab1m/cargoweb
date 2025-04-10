"use client";
import React, { useState } from "react";
import { Form, TreeSelect } from "antd";

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    selectable: false, // Make parent non-selectable
    children: [
      {
        value: "child 1-0",
        title: "child 1111",
      },
      {
        value: "child 1-1",
        title: "child 1-1",
      },
    ],
  },
  {
    value: "parent 2",
    title: "parent 2",
    selectable: false, // Make parent non-selectable
    children: [
      {
        value: "child 2-0",
        title: "child 2-0",
      },
      {
        value: "child 2-2",
        title: "child 2-2",
      },
    ],
  },
];

const DestinationTreeSelect: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Form.Item
      name="destinations"
      label={"Destination" + "*"}
      required={false}
      // rules={[
      //   { required: true, message: "Please enter your Origin(s)" },
      // ]}
    >
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </Form.Item>
  );
};

export default DestinationTreeSelect;
