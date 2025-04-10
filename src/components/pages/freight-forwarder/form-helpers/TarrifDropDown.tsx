import { getRequest } from "@/src/network/api";
import { Button, Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import ModalTarrif from "../pages/tarrif/ModalTarrif";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TarrifDropDown({ intialValue }: { intialValue?: any }) {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [tarrifsValue, setTarrifsValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formInstance = Form.useFormInstance();

  useEffect(() => {
    if (intialValue?.tariff?.id && intialValue?.tariff?.name) {
      formInstance.setFieldsValue({
        tariffId: intialValue?.tariff?.id,
      });
      setOptions([
        {
          label: intialValue?.tariff?.name,
          value: intialValue?.tariff?.id,
        },
      ]);
    }
  }, [intialValue, formInstance]);

  useEffect(() => {
    if (tarrifsValue?.trim() !== "" && tarrifsValue?.length > 2) {
      getRequest(
        `/tazamun-freight-forwarder/api/v1/Tariff/autoComplete?text=${tarrifsValue}`
      ).then((res) => {
        setOptions(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          res?.data?.map((item: any) => ({
            label: item?.localizedAutoCompleteName,
            value: item?.id,
          })) || []
        );
      });
    }
  }, [tarrifsValue]);

  const handleSelectChange = (value: string) => {
    formInstance.setFieldsValue({ tariffId: value }); // Only pass the ID, not the label-object
  };

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <Form.Item
        name="tariffId"
        label={"Tariff Name *"}
        rules={[
          {
            required: true,
            message: "Please select Tariff name",
          },
        ]}
      >
        <Select
          placeholder="Search for Tariff name"
          showSearch
          filterOption={false}
          onSearch={(value) => setTarrifsValue(value)}
          onChange={handleSelectChange} // Handle change to only pass ID
          options={options}
          allowClear
          dropdownRender={(menu) => (
            <div>
              {menu}
              <div
                style={{
                  padding: "8px",
                  textAlign: "center",
                  borderTop: "1px solid #e8e8e8",
                }}
              >
                <Button
                  type="primary"
                  className="!shadow-none w-full !bg-[#FAFAFA] !text-darkGray !border-[#D5D7DA]"
                  onClick={(e) => {
                    e.stopPropagation();
                    showModal();
                  }}
                >
                  Add new Tariff
                </Button>
              </div>
            </div>
          )}
        />
      </Form.Item>

      {/* Modal */}
      <ModalTarrif isModalVisible={isModalVisible} closeModal={closeModal} />
    </>
  );
}
