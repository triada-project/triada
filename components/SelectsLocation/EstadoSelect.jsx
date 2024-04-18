import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import estados from "../../data/estados.json";
import useSelectedStateStore from "@/stores/selectedStateStore";

//console.log(estados);

export default function EstadoSelect() {
  const setSelectedState = useSelectedStateStore(
    (state) => state.setSelectedState
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEstadoChange = (selectedEstado) => {
    setSelectedState(selectedEstado);
  };

  return (
    <Select
      label="Estado de residencia"
      isRequired
      variant="bordered"
      radius="sm"
      className="w-[328px] h-14 lg:w-[30rem]"
      {...register("estado", { required: true })}
    >
      {estados.map((estado) => (
        <SelectItem
          key={estado.clave}
          onClick={() => handleEstadoChange(estado.nombre)}
        >
          {estado.nombre}
        </SelectItem>
      ))}
    </Select>
  );
}
