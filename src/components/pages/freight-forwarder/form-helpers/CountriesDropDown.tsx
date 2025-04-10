import { getRequest } from "@/src/network/api";
import { Form, Select } from "antd";
// import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type OptionType = { label: string; value: string };

export default function CountriesDropDown({
  name = "countryId",
  label = "Country *",
  isMultiple = true,
  intialCountry,
}: {
  name?: string;
  label?: string;
  isMultiple?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intialCountry?: any;
}) {
  const [countriesId, setCountryId] = useState("");
  const [options, setOptions] = useState<OptionType[]>([{
    "label": "seif12",
    "value": "e16a4962-3c1b-457a-89aa-fef3179b0f77"
}]);
  // const seaechParams = useSearchParams();
  // const initialValue = seaechParams.getAll(name);
  console.log(options,"ffsddf");

  useEffect(() => {
    if (intialCountry) {
      setOptions([
        {
          label: intialCountry?.localizedAutoCompleteName,
          value: intialCountry?.id,
        },
      ]);
    }
  }, [intialCountry]);

  useEffect(() => {
    if (countriesId.trim() !== "" && countriesId.length > 2) {
      getRequest(
        `/tazamun-freight-forwarder/api/v1/Countries/country-autoComplete?text=${countriesId}`
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
  }, [countriesId]);

  return (
    <Form.Item
      label={label}
      name={name}
      // initialValue={initialValue}
      // style={{ paddingTop: "24px" }}
    >
      <Select
        mode={isMultiple ? "multiple" : undefined}
        placeholder="Search for Country"
        showSearch
        filterOption={false}
        onSearch={(value) => setCountryId(value)}
        options={options}
      />
    </Form.Item>
  );
}
