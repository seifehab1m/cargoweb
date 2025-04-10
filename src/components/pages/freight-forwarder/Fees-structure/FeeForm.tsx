"use client";
import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { CurrencyOptions, UnitOfMeasurementOptions } from "@/src/network/eNum";
import FeeStructureFCLMode from "./FeeStructureFCLMode";
import useParams from "@/src/helpers/params";
import { useSearchParams } from "next/navigation";
import FeeStructureAllModes from "./FeeStructureAllModes";
import FeeStructureForAirLCLLTCMode from "./FeeStructureForAirLCLLTCMode";
import FeeLockupId from "../form-helpers/FeeLockupId";
import { getAppliedMode } from "./feeHelpers";

export default function FeeForm({
  setFeeData,
  closeDrawer,
  isEditMode,
  setIsEditMode,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFeeData: any;
  closeDrawer?: () => void;
  isEditMode?: number;
  setIsEditMode?: (isEditMode: number | undefined) => void;
}) {
  const [feeCodeName, setFeeCodeName] = useState("");
  const { addParams } = useParams();
  const [form] = Form.useForm();
  const searchParams = useSearchParams();
  const modeType = searchParams.get("mode") ?? "1";
  const unitOfMeasure = searchParams.get("unitOfMeasure");
  const appliedMode = getAppliedMode(modeType);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFeeData((prevFeesList: any[]) => {
      if (typeof isEditMode === "number") {
        return prevFeesList.map((fee, i) =>
          i === isEditMode ? { ...fee, ...values, feeCodeName } : fee
        );
      } else {
        return [...prevFeesList, { ...values, feeCodeName }];
      }
    });

    form.resetFields();
    if (closeDrawer) closeDrawer();
    if (setIsEditMode) setIsEditMode(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUnitOfMeasureChange = (e: any, option: any) => {
    addParams({ mode: [e] });
    addParams({ unitOfMeasure: [option?.label?.toLowerCase()] });
  };

  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <h4 className="text-titleColor pb-1">Fee info</h4>
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-5 items-center">
          <div className="w-2/3">
            <FeeLockupId setFeeCodeName={setFeeCodeName} />
          </div>
          <Form.Item
            className="w-1/3"
            label="Currency *"
            name="currency"
            rules={[{ required: true, message: "Please select Currency" }]}
          >
            <Select
              options={Object.entries(CurrencyOptions).map(([key, value]) => ({
                value,
                label: key,
              }))}
              placeholder="Select Currency"
            />
          </Form.Item>
        </div>

        <Form.Item
          label="Unit of Measure *"
          name="unit"
          rules={[
            { required: true, message: "Please Select Unit of Measure " },
          ]}
          initialValue={
            unitOfMeasure &&
            UnitOfMeasurementOptions[
              unitOfMeasure as keyof typeof UnitOfMeasurementOptions
            ]
          }
        >
          <Select
            options={Object.entries(UnitOfMeasurementOptions).map(
              ([key, value]) => ({
                value,
                label: key,
              })
            )}
            onChange={(value, option) =>
              handleUnitOfMeasureChange(value, option)
            }
            placeholder="Select Unit of Measure"
          />
        </Form.Item>

        <Form.Item
          label="Fee Comment"
          name="description"
          rules={[{ required: true, message: "Please Select Fee Comment " }]}
        >
          <Input placeholder="Enter Fee Comment" />
        </Form.Item>
      </div>

      {appliedMode === "allModes" && <FeeStructureAllModes />}
      {appliedMode === "airLclLTLModes" && <FeeStructureForAirLCLLTCMode />}
      {appliedMode === "FCLMode" && <FeeStructureFCLMode />}

      <Form.Item>
        <Button className="mt-10" type="primary" htmlType="submit" block>
          Create fee
        </Button>
      </Form.Item>
    </Form>
  );
}
