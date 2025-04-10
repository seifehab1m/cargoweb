"use client";

import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import {
  Form,
  Select,
  Drawer,
  Input,
  Button,
  message,
  Radio,
  Checkbox,
} from "antd";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import FeeForm from "../../Fees-structure/FeeForm";
import { FeeIcon } from "@/src/assets/images/svgs/FeeIcon";
import { Plus } from "lucide-react";
import LoadUnitCheckboxs from "../../form-helpers/LoadUnitCheckboxs";
import DropDownCarrier from "../../form-helpers/CarrierDropDown";
import { CurrencyOptions } from "@/src/network/eNum";
import HSCodeDropDown from "../../form-helpers/HSCodeDropDown";
import CardCreationFee from "../../Fees-structure/CardCreationFee";
import { getRequest, postRequest, putRequest } from "@/src/network/api";
import NewServiceLayout from "../../layouts/NewServiceLayout";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import ModeDropDown from "../../form-helpers/ModeDropDown";
import DatePickerFormItem from "../../form-helpers/DatePickerFormItem";
import ModalErrorAddFee from "../services/ModalErrorAddFee";
import ModalCreationStatus from "../services/ModalCreationStatus";
import ConditionalOriginsAndDestinationTreeSelect from "../../form-helpers/ConditionalOriginsAndDestinationTreeSelect";
import { ItemTypeOriginsAndDestinations } from "../../form-helpers/formTypes";
import Loading from "@/src/components/shared/loading/Loading";
import {
  getIntialValuesConditionalOriginsOrDestinations,
  getIntialValuesConditionalOriginsOrDestinationsWithPortId,
} from "../../form-helpers/origins-and-destinations-services/helperOriginsAndDestinations";

export default function NewLocalCharge({ slug }: { slug?: string }) {
  const [form] = Form.useForm();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [feeData, setFeeData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [hsCodeLookups, setHsCodeLookups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [origins, setOrigins] = useState<ItemTypeOriginsAndDestinations[]>([]);
  const [destinations, setDestinations] = useState<
    ItemTypeOriginsAndDestinations[]
  >([]);
  const [generalCharge, setGeneralCharge] = useState<GeneralChargeType>();
  const [loadingGeneralCharge, setLoadingGeneralCharge] = useState(false);

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const openSuccessModal = () => setIsSuccessModalVisible(true);
  const closeSuccessModal = () => setIsSuccessModalVisible(false);

  console.log(generalCharge?.origins, "const [second] = first");

  useEffect(() => {
    if (slug) {
      setLoadingGeneralCharge(true);
      getRequest(`/tazamun-freight-forwarder/api/v1/LocalCharges/${slug}`)
        .then((res) => {
          setGeneralCharge(res?.data);
          setLoadingGeneralCharge(false);
          form.setFieldsValue({
            ...res?.data,
            origins: getIntialValuesConditionalOriginsOrDestinations(
              res?.data?.origins
            ),
            destinations: getIntialValuesConditionalOriginsOrDestinations(
              res?.data?.destinations
            ),
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
      openModal();
      return;
    }

    setLoading(true);
    const body = {
      ...values,
      perUnitFee: feeData[0],
      status: 1,
      hsCodeLookups,
      origins: [
        ...getIntialValuesConditionalOriginsOrDestinationsWithPortId(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          generalCharge?.origins ?? [] as any
        ),
        ...origins,
      ],
      destinations: [
        ...getIntialValuesConditionalOriginsOrDestinationsWithPortId(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          generalCharge?.destinations ?? [] as any
        ),
        ...destinations,
      ],
    };
    try {
      const request = slug
        ? putRequest(
            `/tazamun-freight-forwarder/api/v1/LocalCharges/${slug}`,
            body
          )
        : postRequest("/tazamun-freight-forwarder/api/v1/LocalCharges", body);
      await request;
      setLoading(false);
      openSuccessModal();
      form.resetFields();
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <main className="container py-10">
      <div className="flex items-center gap-2 pb-11">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">
          {slug ? "Edit" : "New"}Local Charge
        </h2>
      </div>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        style={{ margin: "0 auto" }}
      >
        <div className="flex flex-col gap-6">
          <NewServiceLayout title="Charge info">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 pb-6">
              {/* <FeeLockupId /> */}
              <ModeDropDown required />
              <CountriesDropDown
                isMultiple={false}
                intialCountry={{
                  localizedAutoCompleteName: generalCharge?.countryName,
                  id: generalCharge?.countryId,
                }}
              />
              <Form.Item label="Currency *" name="currency">
                <Select
                  options={Object.entries(CurrencyOptions).map(
                    ([key, value]) => ({ value, label: key })
                  )}
                  placeholder="Select Currency"
                />
              </Form.Item>
              <Form.Item label="Apply To">
                <div className="flex gap-4">
                  <Form.Item
                    name="applyToOrigin"
                    valuePropName="checked"
                    noStyle
                  >
                    <Checkbox>Origin</Checkbox>
                  </Form.Item>
                  <Form.Item
                    name="applyToDestination"
                    valuePropName="checked"
                    noStyle
                  >
                    <Checkbox>Destination</Checkbox>
                  </Form.Item>
                </div>
              </Form.Item>

              <DatePickerFormItem label="Valid From" name="validFrom" />
              <DatePickerFormItem label="Valid To" name="validTo" />
              <div />
            </div>
            <ConditionalOriginsAndDestinationTreeSelect
              name="origins"
              label="Conditional origin (s)"
              setOptions={setOrigins}
            />
            <Form.Item className="!py-5" name="isOrigionCondationExecluded">
              <Radio.Group defaultValue="Include listed">
                <Radio value={true}>Include listed</Radio>
                <Radio value={false}>Exclude listed</Radio>
              </Radio.Group>
            </Form.Item>
            <ConditionalOriginsAndDestinationTreeSelect
              name="destinations"
              label="Conditional destination (s)"
              setOptions={setDestinations}
            />
            <Form.Item className="!pt-5" name="isDestinationCondationExecluded">
              <Radio.Group defaultValue="Include listed">
                <Radio value={true}>Include listed</Radio>
                <Radio value={false}>Exclude listed</Radio>
              </Radio.Group>
            </Form.Item>
          </NewServiceLayout>

          <NewServiceLayout title="Charge Application">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
              <DropDownCarrier
                carrierId={generalCharge?.carrierId}
                carrierName={generalCharge?.carrierName}
              />
              <Form.Item
                name="via"
                label="Via *"
                rules={[{ required: true, message: "Please enter your mode" }]}
              >
                <Input />
              </Form.Item>
              <LoadUnitCheckboxs />
            </div>

            <HSCodeDropDown setHsCodeLookups={setHsCodeLookups} />
            <Form.Item
              style={{ paddingTop: "24px" }}
              name="description"
              label="Commodity"
            >
              <TextArea
                rows={3}
                placeholder="Enter commodity description ..."
                maxLength={6}
              />
            </Form.Item>

            <Form.Item className="!pt-5" name="isHazardous">
              <Radio.Group defaultValue="none">
                <Radio value={false}>none</Radio>
                <Radio value={true}>Hazardous</Radio>
                <Radio value={false}>Customs</Radio>
              </Radio.Group>
            </Form.Item>
          </NewServiceLayout>

          <NewServiceLayout title="Service Fees">
            {feeData?.length === 0 && (
              <div className="flex items-center gap-2 border border-[#E9EAEB] p-4 rounded-lg w-full mb-3">
                <FeeIcon />
                <h5 className="text-primaryLight">
                  One or more fees can be added to this service
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
              className="flex items-center gap-1 pt-4 cursor-pointer"
              onClick={showDrawer}
            >
              <Plus size={20} color="#3F60C9" />
              <h5 className="text-sm text-primaryLight">Add fee</h5>
            </div>
          </NewServiceLayout>
        </div>
        <ModalErrorAddFee
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          showDrawer={showDrawer}
        />
        <ModalCreationStatus
          isSuccessModalVisible={isSuccessModalVisible}
          closeSuccessModal={closeSuccessModal}
          title="Local charge has been saved successfully"
          description="You can now use this local charge in your rates"
          btnText="Go to local charge"
          hrefBtn="/local-charge"
          status="success"
        />
        <Drawer
          title="Add Fee"
          placement="right"
          onClose={closeDrawer}
          open={isDrawerVisible}
          width={600}
        >
          <FeeForm setFeeData={setFeeData} />
        </Drawer>

        <Form.Item>
          <Button
            className="mt-9 !w-[105px]"
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

type GeneralChargeType = {
  id?: string;
  countryId?: string;
  countryName?: string;
  currency?: number;
  applyToOrigin?: number;
  applyToDestination?: number;
  validFrom?: string;
  validTo?: string;
  status?: number;
  perUnitFee?: number;
  carrierId?: string;
  carrierName?: string;
  origins?: ItemTypeOriginsAndDestinations[];
  destinations?: ItemTypeOriginsAndDestinations[];
};
