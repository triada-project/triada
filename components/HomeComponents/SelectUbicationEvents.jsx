import React from "react";
import { Select, SelectItem, Chip } from "@nextui-org/react";
import { MexicanStates } from "../SelectGenreMusic/data";

export default function SelectUbicationEvents(props) {
  return (
    <Select
      isRequired
      items={MexicanStates}
      label={props.selectType === "home" ? "Ubicación" : "Ubicación"}
      className={props.selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
      variant="bordered"
      isMultiline={true}
      selectionMode={props.selectType === "home" ? "single" : "multiple"}
      placeholder={
        props.selectType === "home" ? "" : "Selecciona una ubicación"
      }
      classNames="w-[328px] sm:w-[164px] sm:h-[45px] lg:w-[300px] "
      renderValue={(items) => {
        return (
          <div className="flex flex-wrap pt-2  gap-2 ">
            {items.map((item) => (
              <Chip key={item.key} className=" bg-[#081540] text-white">
                {item.data.MexicanStates}
              </Chip>
            ))}
          </div>
        );
      }}
    >
      {(MexicanStates) => (
        <SelectItem key={MexicanStates.clave} textValue={MexicanStates.nombre}>
          <div className="flex pt-2 gap-2 items-center">
            <div className="flex flex-col ">
              <span className="text-small">{MexicanStates.nombre}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
