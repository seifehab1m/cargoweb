import { getKeyByValue } from "@/src/helpers/helpers";
import useParams from "@/src/helpers/params";
import { CurrencyOptions, UnitOfMeasurementOptions } from "@/src/network/eNum";
import { Copy, FilePenLine, Trash2 } from "lucide-react";
import React from "react";

export default function CardCreationFee({
  setFeeData,
  index,
  fee,
  showDrawer,
  setIsEditMode,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFeeData: any;
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fee: any;
  showDrawer?: () => void;
  setIsEditMode?: (isEditMode: number) => void;
}) {
  const { addParams } = useParams();

  const handleCopyFee = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFeeData((prevFeesList: any[]) => [...prevFeesList, prevFeesList[index]]);
  };

  const handleDeleteFee = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFeeData((prevFeesList: any[]) =>
      prevFeesList.filter((_, i) => i !== index)
    );
  };

  const handleEditFee = () => {
    if (showDrawer) showDrawer();

    addParams({ mode: [fee?.mode] });
    const unitKey = getKeyByValue(UnitOfMeasurementOptions, fee?.mode);
    if (unitKey) {
      addParams({ unitOfMeasure: [unitKey.toLocaleLowerCase()] });
    }

    if (setIsEditMode) setIsEditMode(index);
  };

  return (
    <div className="p-6 bg-[#F5F5F5] border rounded-lg">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div>
          <h6 className="text-sm text-darkGray pb-2">Fee code and name</h6>
          <h5 className="text-titleColor text-base">{fee?.feeCodeName}</h5>
        </div>
        <div className=" mx-auto">
          <h6 className="text-sm text-darkGray pb-2">Currency</h6>
          <h5 className="text-titleColor text-base">
            {fee?.value} {getKeyByValue(CurrencyOptions, fee?.currency)}
          </h5>
        </div>
        <div className=" mx-auto">
          <h6 className="text-sm text-darkGray pb-2">Unit of measure</h6>
          <h5 className="text-titleColor text-base">
            {getKeyByValue(UnitOfMeasurementOptions, fee?.unit)}
          </h5>
        </div>
        <div className="ms-auto">
          <h6 className="text-sm text-darkGray pb-2">Fee comment</h6>
          <h5 className="text-titleColor text-base">{fee?.description}</h5>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-2 mt-4">
        <div className="flex gap-2">
          <h6 className="text-sm text-darkGray ">Fee charge</h6>
          <h5 className="text-titleColor font-base">{fee?.value}</h5>
        </div>
        <div className="flex gap-4  mt-7">
          <Copy
            size={22}
            fontWeight={0}
            className="cursor-pointer "
            onClick={handleCopyFee}
          />
          <FilePenLine
            size={22}
            className="cursor-pointer"
            onClick={handleEditFee}
          />
          <Trash2
            size={22}
            className="cursor-pointer"
            onClick={handleDeleteFee}
          />
        </div>
      </div>
    </div>
  );
}
