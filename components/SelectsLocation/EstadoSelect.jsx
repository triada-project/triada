import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function EstadoSelect() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Select
      label="Estado de residencia"
      isRequired
      //autoFocus={true}
      variant="bordered"
      radius="sm"
      className={`w-[328px] h-14 lg:w-[30rem]`}
      //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
      {...register("estado", { required: true })}
    >
      <SelectItem key={"Nuevo León"}>Nuevo León</SelectItem>
      <SelectItem key={"CDMX"}>CDMX</SelectItem>
      <SelectItem key={"Jalisco"}>Jalisco</SelectItem>
    </Select>
  );
}
