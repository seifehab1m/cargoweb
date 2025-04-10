"use client";
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "antd";
import { GripVertical, SlidersHorizontal } from "lucide-react";
import PopoverCard from "@/src/components/shared/pop-over/PopoverCard";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { usePathname } from "@/src/i18n/routing";
import { getFilterOptionItems } from "./filterHelpers";

// Define item type for drag-and-drop
const ItemTypes = { ITEM: "item" };

interface DraggableCheckboxProps {
  item: string;
  index: number;
  moveItem: (fromIndex: number, toIndex: number) => void;
  checked: boolean;
  onCheckChange: (index: number, checked: boolean) => void;
}

const DraggableCheckbox: React.FC<DraggableCheckboxProps> = ({
  item,
  index,
  moveItem,
  checked,
  onCheckChange,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.ITEM,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: ItemTypes.ITEM,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const dragDropRef = (node: HTMLDivElement | null) => {
    dragRef(node);
    dropRef(node);
  };

  return (
    <Form.Item name={item} valuePropName="checked">
      <div
        ref={dragDropRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          cursor: "move",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <GripVertical size={15} />
        <Checkbox
          checked={checked}
          onChange={(e) => onCheckChange(index, e.target.checked)}
          style={{ marginRight: "8px" }}
        >
          {item}
        </Checkbox>
      </div>
    </Form.Item>
  );
};

// TableOptionsFilter
export default function FilterFreightForwarderTable({
  checkedStates,
  setCheckedStates,
}: {
  checkedStates: boolean[];
  setCheckedStates: (states: boolean[]) => void;
}) {
  const params = usePathname();

  const [items, setItems] = useState<string[]>(() =>
    getFilterOptionItems(params)
  );
  const [tempCheckedStates, setTempCheckedStates] =
    useState<boolean[]>(checkedStates);
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  useEffect(() => {
    setTempCheckedStates([...checkedStates]);
  }, [checkedStates]);

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);

    const updatedCheckedStates = [...tempCheckedStates];
    const [movedChecked] = updatedCheckedStates.splice(fromIndex, 1);
    updatedCheckedStates.splice(toIndex, 0, movedChecked);
    setTempCheckedStates(updatedCheckedStates);
  };

  const handleCheckChange = (index: number, checked: boolean) => {
    const updatedCheckedStates = [...tempCheckedStates];
    updatedCheckedStates[index] = checked;
    setTempCheckedStates(updatedCheckedStates);
  };

  const handleFormSubmit = () => {
    setCheckedStates([...tempCheckedStates]);
    setPopoverVisible(false); // Close Popover on Apply
  };

  const handleCancel = () => {
    setTempCheckedStates([...checkedStates]); // Reset changes
    setPopoverVisible(false); // Close Popover on Cancel
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <PopoverCard
        placement="bottomLeft"
        open={popoverVisible}
        onOpenChange={setPopoverVisible}
        content={
          <Form
            layout="vertical"
            className="flex flex-col  !px-4 !max-w-xs ant-input-checkbox-wrapper"
            onFinish={handleFormSubmit}
          >
            <div>
              <h2 className="text-lg font-medium">Customize your view</h2>
              <p className="text-sm text-darkGray">
                Drag and drop column headers to rearrange them, or hide columns
                by unchecking them.
              </p>
            </div>
            {items.map((item, index) => (
              <DraggableCheckbox
                key={item}
                item={item}
                index={index}
                moveItem={moveItem}
                checked={tempCheckedStates[index]}
                onCheckChange={handleCheckChange}
              />
            ))}
            <div className="mt-2 flex gap-3 items-center">
              <Button
                className="w-full !shadow-none !text-sm "
                type="primary"
                htmlType="submit"
              >
                Apply
              </Button>
              <Button
                type="primary"
                className="w-full !text-sm !shadow-none  !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </Form>
        }
      >
        <div
          className="flex gap-1 items-center ms-auto"
          onClick={() => setPopoverVisible(true)}
        >
          <SlidersHorizontal size={15} />
          <h5 className="text-sm text-darkGray">Table Options</h5>
        </div>
      </PopoverCard>
    </DndProvider>
  );
}
