"use client";
import React, { useEffect, useState } from "react";
import { Form, TreeSelect } from "antd";
import { LoadUnit } from "@/src/network/eNum";

const LoadUnitCheckboxs: React.FC<{
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intialValue?: any;
}> = ({ required, intialValue }) => {
  const [value, setValue] = useState<string[] | undefined>([]);
  const formInstance = Form.useFormInstance();

  useEffect(() => {
    if (intialValue?.loadUnits?.length > 0) {
      formInstance.setFieldsValue({
        loadUnits: intialValue?.loadUnits,
      });
    }
  }, [intialValue, formInstance]);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  return (
    <Form.Item
      name="loadUnits"
      label={"Load Units" + "*"}
      rules={[{ required, message: `Please select load unit` }]}
    >
      <TreeSelect
        treeData={Object.entries(LoadUnit).map(([key, value]) => ({
          value: value,
          title: key,
        }))}
        value={value}
        onChange={onChange}
        treeCheckable={true} // Enables checkboxes
        showCheckedStrategy={TreeSelect.SHOW_CHILD}
        //   searchPlaceholder="Search here"
        style={{ width: "100%" }}
        allowClear
        showSearch={false}
        multiple
        popupClassName="tree-select-load-unit" // Add this class
      />
    </Form.Item>
  );
};

export default LoadUnitCheckboxs;
