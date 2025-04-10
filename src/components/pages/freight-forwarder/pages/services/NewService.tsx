"use client";

import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import { Form, Drawer, Input, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { FeeIcon } from "@/src/assets/images/svgs/FeeIcon";
import { Plus } from "lucide-react";
import { getRequest, postRequest, putRequest } from "@/src/network/api";
import NewServiceLayout from "../../layouts/NewServiceLayout";
import FeeForm from "../../Fees-structure/FeeForm";
import OriginsAndDestinationsTreeSelect from "../../form-helpers/origins-and-destinations-services/OriginsAndDestinationsTreeSelect";
import LoadUnitCheckboxs from "../../form-helpers/LoadUnitCheckboxs";
import DropDownCarrier from "../../form-helpers/CarrierDropDown";
import HSCodeDropDown from "../../form-helpers/HSCodeDropDown";
import CardCreationFee from "../../Fees-structure/CardCreationFee";
import TarrifDropDown from "../../form-helpers/TarrifDropDown";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import { ItemTypeOriginsAndDestinations } from "../../form-helpers/formTypes";
import ModalErrorAddFee from "./ModalErrorAddFee";
import ModalCreationStatus from "./ModalCreationStatus";
import Loading from "@/src/components/shared/loading/Loading";
import {
  getIntialValuesOriginsOrDestinations,
  getIntialValuesOriginsOrDestinationsWithPortId,
} from "../../form-helpers/origins-and-destinations-services/helperOriginsAndDestinations";

export default function NewService({ slug }: { slug?: string }) {
  const [form] = Form.useForm();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ServiceLoading, setServiceLoading] = useState(false);
  const [feeData, setFeeData] = useState([]);
  const [isEditMode, setIsEditMode] = useState<number | undefined>();
  const [origins, setOrigins] = useState<ItemTypeOriginsAndDestinations[]>([]);
  const [destinations, setDestinations] = useState<
    ItemTypeOriginsAndDestinations[]
  >([]);
  interface ServiceType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    perUnitFees?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  const [service, setService] = useState<ServiceType>({ perUnitFees: [] });
  const [hsCodeLookups, setHsCodeLookups] = useState([]);

  useEffect(() => {
    if (slug) {
      setServiceLoading(true);
      getRequest(`/tazamun-freight-forwarder/api/v1/Services/${slug}`)
        .then((res) => {
          setService(res?.data);
          setServiceLoading(false);
          form.setFieldsValue({
            ...res?.data,
            origins: getIntialValuesOriginsOrDestinations(res?.data?.origins),
            destinations: getIntialValuesOriginsOrDestinations(
              res?.data?.destinations
            ),
          });
          setFeeData(res?.data?.perUnitFees);
        })
        .catch(() => {
          setServiceLoading(false);
          message.error("An error occurred while fetching the service.");
        });
    }
  }, [slug, form]);

  if (ServiceLoading) return <Loading />;

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const openSuccessModal = () => setIsSuccessModalVisible(true);
  const closeSuccessModal = () => setIsSuccessModalVisible(false);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    if (feeData.length === 0) {
      openModal();
      return;
    }

    setLoading(true);

    try {
      const body = {
        ...values,
        origins: [
          ...getIntialValuesOriginsOrDestinationsWithPortId(service?.origins),
          ...origins,
        ],
        destinations: [
          ...getIntialValuesOriginsOrDestinationsWithPortId(
            service?.destinations
          ),
          ...destinations,
        ],
        perUnitFees: feeData,
        hsCodeLookups,
        status: 1,
      };

      const request = slug
        ? putRequest(`/tazamun-freight-forwarder/api/v1/Services/${slug}`, body)
        : postRequest("/tazamun-freight-forwarder/api/v1/Services", body);

      await request;

      message.success(
        slug ? "Service Edited successfully" : "Service created successfully"
      );
      form.resetFields();
      setFeeData([]);
      openSuccessModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(
        error?.message || `Error ${slug ? "editing" : "creating"} service`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-10">
      <div className="flex items-center gap-2 pb-11">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">
          {slug ? "Edit" : "New"} Service
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
          <NewServiceLayout>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
              <TarrifDropDown intialValue={service} />
              <ModeDropDown intailValue={service} />
              <LoadUnitCheckboxs required intialValue={service} />
              <OriginsAndDestinationsTreeSelect
                name="origins"
                label="Origin(s) *"
                setOptions={setOrigins}
                required
                intailValue={service}
              />
              <OriginsAndDestinationsTreeSelect
                name="destinations"
                label="Destination(s) *"
                setOptions={setDestinations}
                required
              />
              <div className="flex justify-between gap-3 ">
                <Form.Item
                  className="w-1/2"
                  name="transitTimeFrom"
                  label={"Transit Time" + "*"}
                  required={false}
                  rules={[
                    { required: true, message: "Please enter your mode" },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  className="w-1/2"
                  name="transitTimeTo"
                  label={" "}
                  required={false}
                  rules={[
                    { required: true, message: "Please enter your mode" },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </div>
              <DropDownCarrier
                carrierName={service?.carrierName}
                carrierId={service?.carrierId}
              />
              <Form.Item name="via" label={"Via"} required={false}>
                <Input />
              </Form.Item>
              <div className="flex  gap-3 ">
                <div className="w-1/2">
                  <DatePickerFormItem label="Valid From" name="validFrom" />
                </div>
                <div className="w-1/2">
                  <DatePickerFormItem label="Valid to" name="validTo" />
                </div>
              </div>
            </div>
            <HSCodeDropDown setHsCodeLookups={setHsCodeLookups} isRequired />
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
                  showDrawer={showDrawer}
                  setIsEditMode={setIsEditMode}
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
          <FeeForm
            setFeeData={setFeeData}
            closeDrawer={closeDrawer}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
          />
        </Drawer>

        <ModalErrorAddFee
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          showDrawer={showDrawer}
        />
        <ModalCreationStatus
          isSuccessModalVisible={isSuccessModalVisible}
          closeSuccessModal={closeSuccessModal}
        />

        <Form.Item>
          <Button
            className="mt-9 !w-[105px] "
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Save Service
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
