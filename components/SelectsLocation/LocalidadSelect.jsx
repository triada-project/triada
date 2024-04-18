import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function LocalidadSelect() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Select
      label="Localidad"
      isRequired
      variant="bordered"
      radius="sm"
      className=" w-[328px] h-14 lg:w-[30rem]"
      {...register("localidad")}
    >
      {}
      <SelectItem key={"Monterrey"}>Monterrey</SelectItem>
      <SelectItem key={"Santa Catarina"}>Santa Catarina</SelectItem>
      <SelectItem key={"San Pedro"}>San Pedro</SelectItem>
    </Select>
  );
}
