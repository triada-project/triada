import React from "react";
import { Select, SelectItem, Chip } from "@nextui-org/react";
import { typeEvents } from "../SelectGenreMusic/data";

export default function SelectHomeEvents(props) {
  return (
    <Select
      isRequired
      items={typeEvents}
      label={props.selectType === "home" ? "Tipo de evento" : "Tipos de evento"}
      className={props.selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
      variant="bordered"
      isMultiline={true}
      selectionMode={props.selectType === "home" ? "single" : "multiple"}
      classNames="w-[328px] sm:w-[164px] sm:h-[45px] lg:w-[300px] "
      renderValue={(items) => {
        return (
          <div className="flex flex-wrap pt-2  gap-2 ">
            {items.map((item) => (
              <Chip key={item.key} className=" bg-[#081540] text-white">
                {item.data.typeEvents}
              </Chip>
            ))}
          </div>
        );
      }}
    >
      {(typeEvents) => (
        <SelectItem key={typeEvents.id} textValue={typeEvents.typeEvents}>
          <div className="flex pt-2 gap-2 items-center">
            <div className="flex flex-col ">
              <span className="text-small">{typeEvents.typeEvents}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
