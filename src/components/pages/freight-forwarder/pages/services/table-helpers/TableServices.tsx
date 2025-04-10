import React from "react";
import { Button, Dropdown } from "antd";
import type { TableProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Link from "next/link";
import { ShipmentType } from "../../../shared/tableTypes";
import { ArrowUpDown } from "lucide-react";

export const columnsServices: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Origin <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "origins",
    key: "origins",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Destination <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "destinations",
    key: "destinations",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid From <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validFrom",
    key: "validFrom",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid To <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validTo",
    key: "validTo",
  },
  { title: "Mode", dataIndex: "mode", key: "mode" },
  { title: "Load", dataIndex: "loadsUnits", key: "loadsUnits" },
  {
    title: (
      <div className="flex items-center gap-1">
        Tariff Name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "tariffName",
    key: "tariffName",
  },
  { title: "Via", dataIndex: "via", key: "via" },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/services/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-service/${record.id}`}>Edit Service</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/services/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsLocalCharge: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Fee Code <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "fee",
    key: "fee",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Origin <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "conditionalOrigins",
    key: "conditionalOrigins",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Destination <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "conditionalDestinations",
    key: "conditionalDestinations",
  },
  // {
  //   title: (
  //     <div className="flex items-center gap-1">
  //       Name <ArrowUpDown size={15} />
  //     </div>
  //   ),
  //   dataIndex: "name",
  //   key: "name",
  // },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid From <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validFrom",
    key: "validFrom",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid To <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validTo",
    key: "validTo",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Mode <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "mode",
    key: "mode",
  },
  // {
  //   title: (
  //     <div className="flex items-center gap-1">
  //       Apply <ArrowUpDown size={15} />
  //     </div>
  //   ),
  //   dataIndex: "apply",
  //   key: "apply",
  // },
  {
    title: (
      <div className="flex items-center gap-1">
        Country <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "country",
    key: "country",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: (
                <Link href={`/local-charge/${record.id}`}>View Details</Link>
              ),
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-local-charge/${record.id}`}>
                  Edit Local Charge
                </Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/local-charge/${record.id}`}>
                  Deactivate Local Charge
                </Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsGeneralCharge: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Fee Code <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "fee",
    key: "fee",
  },
  {
    title: <div className="flex items-center gap-1">Mode</div>,
    dataIndex: "mode",
    key: "mode",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid From <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validFrom",
    key: "validFrom",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid To <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validTo",
    key: "validTo",
  },
  {
    title: <div className="flex items-center gap-1">Load</div>,
    dataIndex: "loadsUnits",
    key: "loadsUnits",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Carrier <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "carrierName",
    key: "carrierName",
  },
  {
    title: <div className="flex items-center gap-1">Commodities</div>,
    dataIndex: "commodities",
    key: "commodities",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: (
                <Link href={`/general-charge/${record.id}`}>View Details</Link>
              ),
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-general-charge/${record.id}`}>
                  Edit General Charge
                </Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/general-charge/${record.id}`}>
                  Deactivate General Charge
                </Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsUsers: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Created <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "created",
    key: "created",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Full Name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "fullName",
    key: "fullName",
  },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: (
      <div className="flex items-center gap-1">
        Office <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "office",
    key: "office",
  },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Role", dataIndex: "role", key: "role" },
  { title: "Status", dataIndex: "status", key: "status" },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/services/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-service/${record.id}`}>Edit Service</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/services/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsRoles: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Created <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "created",
    key: "created",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Role Name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        No. Of Users <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "users",
    key: "users",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/services/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-service/${record.id}`}>Edit Service</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/services/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsCarriers: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Carrier name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "primaryName",
    key: "primaryName",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Carrier code <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "code",
    key: "code",
  },
  {
    title: <div className="flex items-center gap-1">Type</div>,
    dataIndex: "type",
    key: "type",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Country <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "countryName",
    key: "countryName",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/carriers/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-carrier/${record.id}`}>Edit Carrier</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/carriers/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsTermsAndConditions: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Created <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "created",
    key: "created",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Full Name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: <div className="flex items-center gap-1">Description</div>,
    dataIndex: "description",
    key: "description",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Mode <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "mode",
    key: "mode",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Origin <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "origins",
    key: "origins",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Destination <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "destinations",
    key: "destinations",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Activated <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "activated",
    key: "activated",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/services/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-service/${record.id}`}>Edit Service</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/services/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsDemurrageAndDetention: TableProps<ShipmentType>["columns"] =
  [
    {
      title: (
        <div className="flex items-center gap-1">
          Created <ArrowUpDown size={15} />
        </div>
      ),
      dataIndex: "created",
      key: "created",
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Role name <ArrowUpDown size={15} />
        </div>
      ),
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: <div className="flex items-center gap-1">Description</div>,
      dataIndex: "description",
      key: "description",
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Demurrage Free time (days) <ArrowUpDown size={15} />
        </div>
      ),
      dataIndex: "demurrageFreeTime",
      key: "demurrageFreeTime",
    },
    {
      title: (
        <div className="flex items-center gap-1">
          Activated <ArrowUpDown size={15} />
        </div>
      ),
      dataIndex: "activated",
      key: "activated",
    },
    {
      title: "",
      key: "actions",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "view",
                label: (
                  <Link href={`/services/${record.id}`}>View Details</Link>
                ),
              },
              {
                key: "edit",
                label: (
                  <Link href={`/edit-service/${record.id}`}>Edit Service</Link>
                ),
              },
              {
                key: "deactivate",
                label: (
                  <Link href={`/services/${record.id}`}>
                    Deactivate Service
                  </Link>
                ),
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

export const columnsInsurance: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Created <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "created",
    key: "created",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Policy Name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: <div className="flex items-center gap-1">Description</div>,
    dataIndex: "description",
    key: "description",
  },
  {
    title: <div className="flex items-center gap-1">Pricing</div>,
    dataIndex: "description",
    key: "description",
  },
  {
    title: <div className="flex items-center gap-1">Activated</div>,
    dataIndex: "activated",
    key: "activated",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/services/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-service/${record.id}`}>Edit Service</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/services/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const columnsTarrifs: TableProps<ShipmentType>["columns"] = [
  {
    title: (
      <div className="flex items-center gap-1">
        Tariff name <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "name",
    key: "name",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Contract number <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "contractNumber",
    key: "contractNumber",
  },
  {
    title: <div className="flex items-center gap-1">Created on</div>,
    dataIndex: "createdDate",
    key: "createdDate",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid From <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validFrom",
    key: "validFrom",
  },
  {
    title: (
      <div className="flex items-center gap-1">
        Valid To <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "validTo",
    key: "validTo",
  },
  { title: "Mode", dataIndex: "mode", key: "mode" },
  {
    title: (
      <div className="flex items-center gap-1">
        Currency <ArrowUpDown size={15} />
      </div>
    ),
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: [
            {
              key: "view",
              label: <Link href={`/tarrifs/${record.id}`}>View Details</Link>,
            },
            {
              key: "edit",
              label: (
                <Link href={`/edit-tarrif/${record.id}`}>Edit tarrif</Link>
              ),
            },
            {
              key: "deactivate",
              label: (
                <Link href={`/tarrifs/${record.id}`}>Deactivate Service</Link>
              ),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

export const hanldeServiceTableColumns = (
  checkedStates: boolean[],
  pathName: string
) => {
  if (pathName.startsWith("/services")) {
    return columnsServices?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/local-charge")) {
    return columnsLocalCharge?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/users")) {
    return columnsUsers?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/roles")) {
    return columnsRoles?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/general-charge")) {
    return columnsGeneralCharge?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/carriers")) {
    return columnsCarriers?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/terms-and-conditions")) {
    return columnsTermsAndConditions?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/demurrage-and-detention")) {
    return columnsDemurrageAndDetention?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/insurance")) {
    return columnsInsurance?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  } else if (pathName.startsWith("/tarrifs")) {
    return columnsTarrifs?.map((item, index) => {
      item.hidden = !checkedStates[index];
      return item;
    });
  }
};
