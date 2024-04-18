import { Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import estadosMunicipios from "../../data/estados-municipios.json";
import useSelectedStateStore from "@/stores/selectedStateStore";

export default function LocalidadSelect() {
  const selectedState = useSelectedStateStore((state) => state.selectedState);
  console.log(selectedState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Filtrar las localidades según el estado seleccionado
  const localidades = estadosMunicipios[selectedState] || [];

  return (
    <Select
      label="Localidad"
      isRequired
      variant="bordered"
      radius="sm"
      className="w-[328px] h-14 lg:w-[30rem]"
      {...register("localidad")}
    >
      {localidades.map((localidad, index) => (
        <SelectItem key={index}>{localidad}</SelectItem>
      ))}
    </Select>
  );
}
