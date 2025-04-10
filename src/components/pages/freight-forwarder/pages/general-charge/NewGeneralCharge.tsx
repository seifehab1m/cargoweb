"use client";

import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import { Form, Select, Drawer, Input, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import FeeForm from "../../Fees-structure/FeeForm";
import { FeeIcon } from "@/src/assets/images/svgs/FeeIcon";
import { Plus } from "lucide-react";
import LoadUnitCheckboxs from "../../form-helpers/LoadUnitCheckboxs";
import DropDownCarrier from "../../form-helpers/CarrierDropDown";
import { CurrencyOptions, TransportMode } from "@/src/network/eNum";
import HSCodeDropDown from "../../form-helpers/HSCodeDropDown";
import CardCreationFee from "../../Fees-structure/CardCreationFee";
import { getRequest, postRequest, putRequest } from "@/src/network/api";
import NewServiceLayout from "../../layouts/NewServiceLayout";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import Loading from "@/src/components/shared/loading/Loading";
import ModalSuccessGenralCharge from "./modals/ModalSuccessGenralCharge";
import ModalErrorAddFee from "../services/ModalErrorAddFee";

export default function NewGeneralCharge({ slug }: { slug?: string }) {
  const [form] = Form.useForm();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [generalCharge, setGeneralCharge] = useState<GeneralChargeType>();
  const [feeData, setFeeData] = useState([]);
  const [hsCodeLookups, setHsCodeLookups] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalError, setIsModalError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [loadingGeneralCharge, setLoadingGeneralCharge] = useState<boolean>(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  const openModalError = () => setIsModalError(true);
  const closeModalError = () => setIsModalError(false);

  console.log(generalCharge, "ffksks");

  useEffect(() => {
    if (slug) {
      setLoadingGeneralCharge(true);
      getRequest(`/tazamun-freight-forwarder/api/v1/GeneralCharges/${slug}`)
        .then((res) => {
          setGeneralCharge(res?.data);
          setLoadingGeneralCharge(false);
          form.setFieldsValue({
            ...res?.data,
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setFeeData([res?.data?.perUnitFee] as any);
        })
        .catch(() => {
          setLoadingGeneralCharge(false);
          message.error("An error occurred while fetching the service.");
        });
    }
  }, [slug, form]);

  if (loadingGeneralCharge) return <Loading />;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    if (feeData.length === 0) {
      openModalError();
      return;
    }
    setLoadingData(true);
    const body = {
      ...values,
      perUnitFee: feeData[0],
      hsCodeLookups,
      status: 1,
    };
    const request = slug
      ? putRequest(
          `/tazamun-freight-forwarder/api/v1/GeneralCharges/${slug}`,
          body
        )
      : postRequest("/tazamun-freight-forwarder/api/v1/GeneralCharges", body);

    await request;
    setLoadingData(false);

    message.success(
      slug ? "Service Edited successfully" : "Service created successfully"
    );
    showModal();
    form.resetFields();
    setFeeData([]);
  };

  return (
    <main className="container py-10">
      <div className="flex items-center gap-2 pb-11">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">
          {slug ? "Edit" : "New"} General Charge
        </h2>
      </div>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        style={{
          margin: "0 auto",
        }}
      >
        <div className="flex flex-col gap-6">
          <NewServiceLayout title="Charge info">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
              <Form.Item
                name="mode"
                label={"mode" + "*"}
                required={false}
                rules={[{ required: true, message: "Please enter your mode" }]}
              >
                <Select
                  options={Object.entries(TransportMode).map(
                    ([key, value]) => ({
                      value: value,
                      label: key,
                    })
                  )}
                />
              </Form.Item>
              <Form.Item
                label="Currency *"
                name="currency"
                // rules={[{ required: false, message: "Please select Currency" }]}
              >
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
              <DatePickerFormItem label="Valid From" name="validFrom" />
              <DatePickerFormItem label="Valid to" name="validTo" />

              <Form.Item
                name="via"
                label={"Via" + "*"}
                required={false}
                rules={[{ required: true, message: "Please enter your mode" }]}
              >
                <Input />
              </Form.Item>

              <div />
            </div>
          </NewServiceLayout>

          <NewServiceLayout title="Charge Application">
            <div className="grid  md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
              <DropDownCarrier
                carrierId={generalCharge?.carrierId}
                carrierName={generalCharge?.carrierName}
              />
              <LoadUnitCheckboxs />
            </div>
            <HSCodeDropDown setHsCodeLookups={setHsCodeLookups} />
            <Form.Item
              style={{ paddingTop: "24px" }}
              name="description"
              label={"Commodity"}
              required={false}
            >
              <TextArea
                rows={3}
                placeholder="Enter commodity description ..."
              />
            </Form.Item>
          </NewServiceLayout>
          {/* service fees cards */}
          <NewServiceLayout title="Service Fees">
            {feeData?.length === 0 && (
              <div className="flex items-center gap-2 border border-[#E9EAEB] p-4 rounded-lg w-full mb-3">
                <FeeIcon />
                <h5 className="text-primaryLight">
                  One or more fee can be added to this service
                </h5>
              </div>
            )}
            <div className="flex flex-col gap-y-3">
              {feeData?.map((fee, index) => (
                <CardCreationFee
                  key={index}
                  setFeeData={setFeeData}
                  index={index}
                  fee={fee}
                />
              ))}
            </div>

            <div
              className="flex items-center gap-1 pt-4 cursor-pointer "
              onClick={showDrawer}
            >
              <Plus size={20} color="#3F60C9" />
              <h5 className="text-sm text-primaryLight">Add fee</h5>
            </div>
          </NewServiceLayout>
        </div>

        <Drawer
          title="Add Fee"
          placement="right"
          onClose={closeDrawer}
          open={isDrawerVisible}
          width={600}
        >
          <FeeForm setFeeData={setFeeData} closeDrawer={closeDrawer} />
        </Drawer>
        <ModalSuccessGenralCharge
          isVisible={isModalVisible}
          onClose={closeModal}
        />
        <ModalErrorAddFee
          isModalVisible={isModalError}
          closeModal={closeModalError}
          showDrawer={showDrawer}
        />
        <Form.Item>
          <Button
            className="mt-9 !w-[105px] "
            type="primary"
            htmlType="submit"
            block
            loading={loadingData}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

type GeneralChargeType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  perUnitFee: any;
  hsCodeLookups: string[];
  status: number;
  carrierId: string;
  carrierName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};