import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { musicalGenre, typeEvents } from "./data";

export default function SelectTypeEvents(props) {
  return (
    <Select
      isRequired
      items={typeEvents}
      label={props.selectType === "home" ? "Tipo de evento" : "Tipos de evento"}
      className={props.selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
      variant="bordered"
      isMultiline={true}
      selectionMode={props.selectType === "home" ? "single" : "multiple"}
      placeholder={
        props.selectType === "home"
          ? "Selecciona el tipo de tu evento"
          : "Selecciona uno o más tipos de evento"
      }
      //labelPlacement="outside"
      classNames={{
        base: `${props.width}`,
        trigger: "min-h-unit-12 py-2",
      }}
      // className={` h-16 ${props.width}`}
      renderValue={(items) => {
        return (
          <div className="flex flex-wrap gap-2">
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
          <div className="flex gap-2 items-center">
            {/* <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="sm"
              src={user.avatar}
            /> */}
            <div className="flex flex-col">
              <span className="text-small">{typeEvents.typeEvents}</span>
              {/* <span className="text-tiny text-default-400">{user.email}</span> */}
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
