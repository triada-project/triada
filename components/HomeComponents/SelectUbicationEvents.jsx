import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import {
  musicalGenre,
  typeEvents,
  MexicanStates,
} from "../SelectGenreMusic/data";

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
      //labelPlacement="outside"
      classNames="w-[328px] sm:w-[164px] sm:h-[45px] lg:w-[300px] "
      // className={` h-16 ${props.width}`}
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
            {/* <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="sm"
              src={user.avatar}
            /> */}
            <div className="flex flex-col ">
              <span className="text-small">{MexicanStates.nombre}</span>
              {/* <span className="text-tiny text-default-400">{user.email}</span> */}
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
