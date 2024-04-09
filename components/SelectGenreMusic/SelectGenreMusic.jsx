import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { users, musicalGenre } from "./data";

export default function SelectGenreMusic(props) {
  return (
    <Select
      isRequired
      className={props.selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
      items={musicalGenre}
      label={
        props.selectType === "home" ? "Género Musical" : "Géneros Musicales"
      }
      variant="bordered"
      isMultiline={true}
      selectionMode={props.selectType === "home" ? "single" : "multiple"}
      placeholder={
        props.selectType === "home"
          ? "Selecciona un género musical"
          : "Selecciona uno o más géneros musicales"
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
                {item.data.musicalGenre}
              </Chip>
            ))}
          </div>
        );
      }}
    >
      {(musicalGenre) => (
        <SelectItem key={musicalGenre.id} textValue={musicalGenre.musicalGenre}>
          <div className="flex gap-2 items-center">
            {/* <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="sm"
              src={user.avatar}
            /> */}
            <div className="flex flex-col">
              <span className="text-small">{musicalGenre.musicalGenre}</span>
              {/* <span className="text-tiny text-default-400">{user.email}</span> */}
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
