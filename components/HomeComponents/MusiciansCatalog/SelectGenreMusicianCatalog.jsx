import React from "react";
import { Select, SelectItem, Chip } from "@nextui-org/react";
import { musicalGenre } from "/components/SelectGenreMusic/data.js";

export default function SelectGenreMusicianCatalog(props) {
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
          ? ""
          : "Selecciona uno o más géneros musicales"
      }
      classNames={{
        base: `${props.width}`,
        trigger: "min-h-unit-12 py-2",
      }}
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
            <div className="flex flex-col">
              <span className="text-small">{musicalGenre.musicalGenre}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
