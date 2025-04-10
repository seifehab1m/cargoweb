"use client";
import React, { useState } from "react";
import { Table } from "antd";
import FilterFreightForwarderTable from "../filters/TableOptionsFilter";
import TableOptionsFilter from "../filters/FilterFreightForwarderTable";
import { ShipmentType } from "./tableTypes";
import { hanldeServiceTableColumns } from "../pages/services/table-helpers/TableServices";
import { formatServiceTableData } from "@/src/helpers/TableHelpers";
import { usePathname } from "@/src/i18n/routing";

export default function FreightForwarderTable({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const pathName = usePathname();
  const [tableData, setTableData] = useState<ShipmentType[]>([]);
  const [loading, setLoading] = useState(false);
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(hanldeServiceTableColumns([], pathName)?.length).fill(true)
  );

  return (
    <div className="border rounded-lg overflow-x-auto mt-9">
      <div className="flex  sm:flex-row items-center gap-4 sm:gap-9 py-4 px-4 ">
        <FilterFreightForwarderTable
          checkedStates={checkedStates}
          setCheckedStates={setCheckedStates}
        />
        <TableOptionsFilter
          searchParams={searchParams}
          setTableData={setTableData}
          setLoading={setLoading}
        />
      </div>
      <div className="overflow-x-auto">
        <Table<ShipmentType>
          columns={hanldeServiceTableColumns(checkedStates, pathName)}
          dataSource={formatServiceTableData(tableData)}
          loading={loading}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
}
