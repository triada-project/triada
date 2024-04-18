import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import estados from "../../data/estados.json";

//console.log(estados);

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
      {estados.map((estado) => (
        <SelectItem key={estado.clave}>{estado.nombre}</SelectItem>
      ))}
    </Select>
  );
}
