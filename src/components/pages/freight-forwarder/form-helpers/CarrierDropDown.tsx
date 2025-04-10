import { getRequest } from "@/src/network/api";
import { Button, Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import ModalCarriers from "../pages/carriers/ModalCarriers";

type OptionType = { label: string; value: string };
export default function DropDownCarrier({
  carrierId,
  carrierName,
}: {
  carrierId?: string;
  carrierName?: string;
}) {
  const [carriers, setCarriersValue] = useState("");
  const [options, setOptions] = useState<OptionType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (carrierId && carrierName) {
      setOptions([
        {
          label: carrierName,
          value: carrierId,
        },
      ]);
    }
  }, [carrierId, carrierName]);

  useEffect(() => {
    if (carriers?.trim() !== "" && carriers?.length > 2) {
      getRequest(
        `/tazamun-freight-forwarder/api/v1/Carriers/autoComplete?text=${carriers}`
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
  }, [carriers]);

  return (
    <>
      <Form.Item
        name="carrierId"
        label={"carriers" + ""}
        required={false}
        // rules={[{ required: true, message: "Please enter your mode" }]}
      >
        <Select
          showSearch
          filterOption={false}
          onSearch={(value) => setCarriersValue(value)}
          // onChange={handleChange}
          options={options}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          // options={carriers?.map((carrier: any) => ({
          //   value: carrier.id,
          //   label: carrier.primaryName,
          // }))}
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
                  className=" !shadow-none w-full !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the dropdown from closing
                    showModal();
                  }}
                >
                  Add new carrier
                </Button>
              </div>
            </div>
          )}
        />
      </Form.Item>
      <ModalCarriers isModalVisible={isModalVisible} closeModal={closeModal} />
    </>
  );
}
