import React, { useEffect, useState } from "react";
import { Button, Form, message } from "antd";
import { Filter } from "lucide-react";
import PopoverCard from "@/src/components/shared/pop-over/PopoverCard";
import useParams from "@/src/helpers/params";
import { ItemTypeOriginsAndDestinations } from "../form-helpers/formTypes";
import { postRequest } from "@/src/network/api";
import ServiceFilterForm from "./filter-forms/ServiceFilterForm";
import { getApiTableColumns, handleFilteruri } from "./filterHelpers";
import { usePathname } from "@/src/i18n/routing";
import LocalChargeFilterForm from "./filter-forms/LocalChargeFilterForm";
import UsersFilterForm from "./filter-forms/UsersFilterForm";
import RolesFilterForm from "./filter-forms/RolesFilterForm";
import CarriersFilterForm from "./filter-forms/CarriersFilterForm";
import TermsAndConditionsFilterForm from "./filter-forms/TermsAndConditionsFilterForm";
import DemurrageAndDetentionFilterForm from "./filter-forms/DemurrageAndDetentionFilterForm";
import InsuranceFilterForm from "./filter-forms/InsuranceFilterForm";
import TarrifFilterForm from "./filter-forms/TarrifFilterForm";
import GeneralChargeFilterForm from "./filter-forms/GeneralChargeFilterForm";

export default function TableOptionsFilter({
  searchParams,
  setTableData,
  setLoading,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTableData?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLoading?: any;
}) {
  const pathName = usePathname();
  const [form] = Form.useForm();
  const { addParams } = useParams();
  const [originPortId, setOrigins] = useState<ItemTypeOriginsAndDestinations[]>(
    []
  );
  const [destinationPortId, setDestinations] = useState<
    ItemTypeOriginsAndDestinations[]
  >([]);

  useEffect(() => {
    const body = {
      criteria: {
        ...searchParams,
        originPortId: originPortId?.[0]?.portId,
        destinationPortId: destinationPortId?.[0]?.portId,
      },
    };
    setLoading(true);

    postRequest(getApiTableColumns(pathName), body)
      .then((res) => {
        setLoading(false);
        if (setTableData) {
          setTableData(res?.data?.data);
        }
      })
      .catch((err) => {
        message.error(err?.message);
        setLoading(false);
      });
  }, [
    searchParams,
    originPortId,
    destinationPortId,
    setLoading,
    setTableData,
    pathName,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any,
  const handleFormSubmit = (values: any) => {
    handleFilteruri(values, addParams, originPortId, destinationPortId);
  };

  return (
    <PopoverCard
      placement="bottomLeft"
      content={
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col !gap-[6px] !px-4 !max-w-[480px] ant-input-checkbox-wrapper"
          onFinish={handleFormSubmit}
        >
          <div>
            <h2 className="text-lg font-medium">Refine Your Search</h2>
            <p className="text-sm text-darkGray">
              Narrow down your options by applying filters to find the most
              relevant results quickly
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-1">
            {pathName?.startsWith("/services") && (
              <ServiceFilterForm
                setOrigins={setOrigins}
                setDestinations={setDestinations}
              />
            )}
            {pathName?.startsWith("/local-charge") && <LocalChargeFilterForm />}
            {pathName?.startsWith("/general-charge") && (
              <GeneralChargeFilterForm />
            )}
            {pathName?.startsWith("/users") && <UsersFilterForm />}
            {pathName?.startsWith("/roles") && <RolesFilterForm />}
            {pathName?.startsWith("/carriers") && <CarriersFilterForm />}
            {pathName?.startsWith("/terms-and-conditions") && (
              <TermsAndConditionsFilterForm
                setOrigins={setOrigins}
                setDestinations={setDestinations}
              />
            )}
            {pathName?.startsWith("/demurrage-and-detention") && (
              <DemurrageAndDetentionFilterForm />
            )}
            {pathName?.startsWith("/insurance") && <InsuranceFilterForm />}
            {pathName?.startsWith("/tarrif") && <TarrifFilterForm />}
          </div>

          <div className="mt-4 flex gap-3 items-center">
            <Button
              className="!shadow-none !text-sm w-[100px]"
              type="primary"
              onClick={() => form.submit()} // ✅ Fix: Use an arrow function
              htmlType="submit"
            >
              Apply
            </Button>
            <Button
              type="primary"
              className="!text-sm !shadow-none w-[100px] !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
            >
              Cancel
            </Button>
          </div>
        </Form>
      }
    >
      <div className="flex gap-1 items-center">
        <Filter size={15} />
        <h5 className="text-sm text-darkGray">Filter</h5>
      </div>
    </PopoverCard>
  );
}
