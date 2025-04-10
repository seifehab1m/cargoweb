"use client";
import { ItemTypeOriginsAndDestinations } from "@/src/components/pages/freight-forwarder/form-helpers/formTypes";
import HSCodeDropDown from "@/src/components/pages/freight-forwarder/form-helpers/HSCodeDropDown";
import ModeDropDown from "@/src/components/pages/freight-forwarder/form-helpers/ModeDropDown";
import OriginsAndDestinationsTreeSelect from "@/src/components/pages/freight-forwarder/form-helpers/origins-and-destinations-services/OriginsAndDestinationsTreeSelect";
import MainHeader from "@/src/components/shared/main-header/MainHeader";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

// Dynamically import the markdown editor to prevent SSR issues.
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const Page: React.FC = () => {
  const [form] = Form.useForm();
  const [origins, setOrigins] = useState<ItemTypeOriginsAndDestinations[]>([]);
  const [destinations, setDestinations] = useState<
    ItemTypeOriginsAndDestinations[]
  >([]);
  const [hsCodeLookups, setHsCodeLookups] = useState([]);
  const [content, setContent] = useState("");

  const mdParser = new MarkdownIt();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log(
      "Form Values: ",
      { ...values, content },
      hsCodeLookups,
      origins,
      destinations
    );
  };

  const handleEditorChange = ({ text }: { text: string }) => {
    setContent(text);
  };

  return (
    <div className="container py-10">
      <MainHeader title="New Terms and Conditions" />
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: "75%" }}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <Form.Item
            name="name"
            label={"Name *"}
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>

          <ModeDropDown />

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="commodities"
            label="Commodities"
            rules={[{ required: true, message: "Please enter commodities" }]}
          >
            <Input />
          </Form.Item>

          <OriginsAndDestinationsTreeSelect
            name="origins"
            label="Origins (countries | ports) *"
            setOptions={setOrigins}
            required
          />

          <OriginsAndDestinationsTreeSelect
            name="destinations"
            label="Destinations (countries | ports) *"
            setOptions={setDestinations}
            required
          />
        </div>

        <HSCodeDropDown setHsCodeLookups={setHsCodeLookups} />

        <Form.Item name="containers" label="Applies on" className="!mt-6">
          <Checkbox.Group>
            <div className="flex flex-col gap-3">
              <Checkbox value="service 1">
                Shipments with customs brokerage
              </Checkbox>
              <Checkbox value="service 2">
                Shipments which contains hazardous goods
              </Checkbox>
              <Checkbox value="service 3">Shipments with insurance </Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>

        {/* Markdown Editor */}
        <Form.Item label="Terms and Conditions Content " className="!mt-6">
          <MdEditor
            style={{ height: "300px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </Form.Item>

        <Button className="!text-sm mt-5" type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Page;
