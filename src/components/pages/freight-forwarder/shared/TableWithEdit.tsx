"use client";

import React, { useState } from "react";
import { Table, Input, Button, Form, Select } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Option } = Select;

interface ShipmentType {
  key: string;
  origins: string;
  destinations: string;
  validFrom: string;
  validTo: string;
  mode: string;
}

const EditableTable: React.FC = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<ShipmentType[]>([
    {
      key: "1",
      origins: "Cairo",
      destinations: "Dubai",
      validFrom: "2025-03-01",
      validTo: "2025-12-31",
      mode: "Air",
    },
    {
      key: "2",
      origins: "New York",
      destinations: "London",
      validFrom: "2025-03-05",
      validTo: "2025-12-31",
      mode: "Sea",
    },
  ]);
  console.log(setDataSource);

  const columns: ColumnsType<ShipmentType> = [
    {
      title: "Origin",
      dataIndex: "origins",
      key: "origins",
      render: (text, record) => (
        <Form.Item name={[record.key, "origins"]} initialValue={text}>
          <Select style={{ width: 120 }}>
            <Option value="Cairo">Cairo</Option>
            <Option value="New York">New York</Option>
            <Option value="Tokyo">Tokyo</Option>
          </Select>
        </Form.Item>
      ),
    },
    {
      title: "Destination",
      dataIndex: "destinations",
      key: "destinations",
      render: (text, record) => (
        <Form.Item name={[record.key, "destinations"]} initialValue={text}>
          <Select style={{ width: 120 }}>
            <Option value="Dubai">Dubai</Option>
            <Option value="London">London</Option>
            <Option value="Paris">Paris</Option>
          </Select>
        </Form.Item>
      ),
    },
    {
      title: "Valid From",
      dataIndex: "validFrom",
      key: "validFrom",
      render: (text, record) => (
        <Form.Item name={[record.key, "validFrom"]} initialValue={text}>
          <Input />
        </Form.Item>
      ),
    },
    {
      title: "Valid To",
      dataIndex: "validTo",
      key: "validTo",
      render: (text, record) => (
        <Form.Item name={[record.key, "validTo"]} initialValue={text}>
          <Input />
        </Form.Item>
      ),
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
      render: (text, record) => (
        <Form.Item name={[record.key, "mode"]} initialValue={text}>
          <Select style={{ width: 120 }}>
            <Option value="Air">Air</Option>
            <Option value="Sea">Sea</Option>
            <Option value="Land">Land</Option>
          </Select>
        </Form.Item>
      ),
    },
  ];

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      console.log("Saved Data:", values);
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <Form form={form} component={false}>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <Button type="primary" onClick={handleSave} style={{ marginTop: 16 }}>
        Save Changes
      </Button>
    </Form>
  );
};

export default EditableTable;
