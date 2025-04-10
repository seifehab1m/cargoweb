"use client";
import { CurrencyOptions, TransportMode } from "@/src/network/eNum";
import { Button, Form, Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import DropDownCarrier from "../../form-helpers/CarrierDropDown";
import { getRequest, postRequest, putRequest } from "@/src/network/api";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import dayjs from "dayjs";
import ModalCreationStatus from "../services/ModalCreationStatus";

export default function TarrifForm({
  isTarrifModal = false,
  slug,
}: {
  isTarrifModal?: boolean;
  slug?: string;
}) {
  const [formInstance] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [tarrif, setTarrif] = useState<TARRIFTYPE>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (slug && tarrif) {
      formInstance.setFieldsValue({
        ...tarrif,
      });
    }
  }, [slug, tarrif, formInstance]);

  useEffect(() => {
    if (slug) {
      getRequest(`/tazamun-freight-forwarder/api/v1/Tariff/${slug}`)
        .then((res) => {
          setTarrif(res?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [slug]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    setLoading(true);
    if (
      values?.validFrom &&
      values?.validTo &&
      dayjs(values?.validFrom).isAfter(values?.validTo)
    ) {
      message.error("Valid From date cannot be after Valid To date.");
      return;
    }

    const body = {
      ...values,
      validFrom: values.validFrom
        ? dayjs(values.validFrom).toISOString()
        : null,
      validTo: values.validTo ? dayjs(values.validTo).toISOString() : null,
      status: 0,
    };
    try {
      const request = slug
        ? putRequest(`/tazamun-freight-forwarder/api/v1/Tariff/${slug}`, body)
        : postRequest("/tazamun-freight-forwarder/api/v1/Tariff", body);

      await request;
      setLoading(false);
      message.success(
        slug ? "Tarrif updated successfully" : "Tarrif created successfully"
      );
      showModal();
      formInstance.resetFields();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      // message.destroy(); // 👈 clear any existing toasts
      message.error(error?.message || "Something went wrong");
    }
  };

  return (
    <Form
      form={formInstance}
      name="register"
      onFinish={onFinish}
      layout="vertical"
      style={{
        maxWidth: !isTarrifModal ? "75%" : "100%",
      }}
    >
      <div
        className={`grid md:grid-cols-2 grid-cols-1 ${
          isTarrifModal ? " gap-3" : "gap-4 gap-y-6"
        } `}
      >
        <Form.Item
          name="name"
          label={"Traffic Name" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="contactNumber"
          label={"Contract number" + "*"}
          required={false}
          rules={[{ required: true, message: "" }]}
        >
          <Input type="number" />
        </Form.Item>
        <DatePickerFormItem label="Valid From" name="validFrom" />
        <DatePickerFormItem label="Valid to" name="validTo" />

        <Form.Item
          name="mode"
          label={"mode" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter your mode" }]}
        >
          <Select
            options={Object.entries(TransportMode).map(([key, value]) => ({
              value: value,
              label: key,
            }))}
          />
        </Form.Item>
        <DropDownCarrier
          carrierId={tarrif?.carrierId}
          carrierName={tarrif?.carrierName}
        />
        <Form.Item
          label="Currency *"
          name="currency"
          // rules={[{ required: false, message: "Please select Currency" }]}
        >
          <Select
            options={Object.entries(CurrencyOptions).map(([key, value]) => ({
              value,
              label: key,
            }))}
            placeholder="Select Currency"
          />
        </Form.Item>
        <Form.Item
          name="via"
          label={"Via" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter your mode" }]}
        >
          <Input />
        </Form.Item>
      </div>
      {!isTarrifModal ? (
        <Form.Item>
          <Button
            className="mt-7 !w-[105px] "
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Save Tarrif
          </Button>
        </Form.Item>
      ) : (
        <div className="mt-5 flex gap-3 items-center">
          <Button
            className="w-full !shadow-none !text-sm "
            type="primary"
            htmlType="submit"
          >
            Apply
          </Button>
          <Button
            type="primary"
            className="w-full !text-sm !shadow-none   !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
          >
            Cancel
          </Button>
        </div>
      )}

      <ModalCreationStatus
        isSuccessModalVisible={isModalVisible}
        closeSuccessModal={closeModal}
        title="Tarrif has been saved successfully"
        description="You can now use this tarrif in your rates"
        btnText="Go to tarrif"
        hrefBtn="/tarrifs"
        status="success"
      />
    </Form>
  );
}

type TARRIFTYPE = {
  name: string;
  validFrom: string;
  validTo: string;
  mode: number;
  carrierId: string;
  carrierName: string;
  currency: number;
  via: string;
  contractNumber: string | null;
  status: number;
  id: string;
};
