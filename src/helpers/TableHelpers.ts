import dayjs from "dayjs";
import { ShipmentType } from "../components/pages/freight-forwarder/shared/tableTypes";
import { getKeyByValue } from "./helpers";
import { carrierType, CurrencyOptions, LoadUnit, TransportMode } from "../network/eNum";

export function formatServiceTableData(data: ShipmentType[]): ShipmentType[] {
  return data.map((item) => ({
    ...item,
    key: item.id,
    createdDate:
      dayjs(item.createdDate).format("MMM DD YYYY") === "Invalid Date"
        ? ""
        : dayjs(item.createdDate).format("MMM DD YYYY"),
    validFrom:
      dayjs(item.validFrom).format("MMM DD YYYY") === "Invalid Date"
        ? ""
        : dayjs(item.validFrom).format("MMM DD YYYY"),
    validTo:
      dayjs(item.validTo).format("MMM DD YYYY") === "Invalid Date"
        ? ""
        : dayjs(item.validTo).format("MMM DD YYYY"),
    mode: getKeyByValue(TransportMode, item?.mode) as string,
    loadsUnits:
      typeof item?.loadsUnits === "string"
        ? item?.loadsUnits
        : item?.loadsUnits?.map((item) => getKeyByValue(LoadUnit, item) + ", "),
    currency: getKeyByValue(CurrencyOptions, item?.currency) as string,
    type: getKeyByValue(carrierType, item?.type) as string,
  }));
}
