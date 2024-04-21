import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { users, musicalGenre } from "./data";

export default function SelectGenreMusic({
  selectType,
  width,
  onChange,
  selectedKeys,
}) {
  return (
    <Select
      isRequired
      onChange={onChange}
      selectedKeys={selectedKeys}
      className={selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
      items={musicalGenre}
      label={selectType === "home" ? "Género Musical" : "Géneros Musicales"}
      variant="bordered"
      isMultiline={true}
      selectionMode={selectType === "home" ? "single" : "multiple"}
      placeholder={
        selectType === "home"
          ? "Selecciona un género musical"
          : "Selecciona uno o más géneros musicales"
      }
      //labelPlacement="outside"
      classNames={{
        base: `${width}`,
        trigger: "min-h-unit-12 py-2",
      }}
      // className={` h-16 ${width}`}
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
