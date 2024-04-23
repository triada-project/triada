import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import estados from "../../data/estados.json";
import useSelectedStateStore from "@/stores/selectedStateStore";

//console.log(estados);

export default function EstadoSelect({ onChange, onBlur, selectedKeys }) {
  const setSelectedState = useSelectedStateStore(
    (state) => state.setSelectedState
  );

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
      onChange={onChange}
      // onBlur={onBlur}
      selectedKeys={selectedKeys}
    >
      {estados.map((estado) => (
        <SelectItem
          key={estado.nombre}
          onClick={() => handleEstadoChange(estado.nombre)}
        >
          {estado.nombre}
        </SelectItem>
      ))}
    </Select>
  );
}
