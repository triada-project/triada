import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { users, musicalGenre } from "./data";

export default function SelectGenreMusic(props) {
  return (
    <Select
      isRequired
      items={musicalGenre}
      label="Géneros Musicales"
      variant="bordered"
      isMultiline={true}
      selectionMode="multiple"
      placeholder="Selecciona uno o más géneros"
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
              <Chip key={item.key}>{item.data.musicalGenre}</Chip>
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
