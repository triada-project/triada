import { useState } from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { Checkbox } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import ButtonPink from "./perfil-cliente/ButtonPink";
import { Toaster, toast } from "sonner";

// ... tus importaciones de componentes ...

export default function Availability({ data }) {
  const idUser = data._id;
  //console.log(idUser, "data desde componente");
  const daysOfWeek = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ];

  const hours24 = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  // Estado para almacenar la disponibilidad por día
  const [availability, setAvailability] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { isChecked: false, start: null, end: null };
      return acc;
    }, {})
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmit = (data) => {
  //     if (validateAvailability()) {
  //       // Transformar el objeto availability en un array de objetos
  //       const formattedAvailability = daysOfWeek.reduce((acc, day) => {
  //         if (availability[day].isChecked) {
  //           acc.push({
  //             day,
  //             start: availability[day].start,
  //             end: availability[day].end,
  //           });
  //         }
  //         return acc;
  //       }, []);

  //       console.log("Disponibilidad formateada:", formattedAvailability);

  //     }
  //   };
  const onSubmit = async (data) => {
    if (validateAvailability()) {
      // Transformar el objeto availability en un array de objetos
      const formattedAvailability = daysOfWeek.reduce((acc, day) => {
        if (availability[day].isChecked) {
          acc.push({
            day,
            start: availability[day].start?.currentKey,
            end: availability[day].end?.currentKey,
          });
        }
        return acc;
      }, []);

      try {
        const response = await fetch(`http://localhost:4000/users/${idUser}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ availability: formattedAvailability }),
        });

        // Manejo de la respuesta del servidor
        if (response.ok) {
          const data = await response.json(); // Obtiene los datos de respuesta (opcional)
          toast.success("Disponibilidad actualizada con éxito");
        } else {
          toast.error("Error al actualizar disponibilidad");
        }
      } catch (error) {
        console.error("Error al enviar datos al servidor:", error);
        toast.error("Error al enviar datos al servidor");
      }
    }
  };

  const validateAvailability = () => {
    let isValid = true;
    let atLeastOneDayChecked = false;

    for (const day of daysOfWeek) {
      const dayAvailability = availability[day];

      if (dayAvailability.isChecked) {
        atLeastOneDayChecked = true;

        // Verificar si se han seleccionado AMBOS horarios
        if (!dayAvailability.start || !dayAvailability.end) {
          toast.warning(
            `Por favor, selecciona tanto la hora de inicio como la de fin para ${
              day[0].toUpperCase() + day.slice(1)
            }.`
          );
          isValid = false;
          break;
        }

        // Verificar si la hora de inicio es estrictamente anterior a la hora de fin
        const startHour = parseInt(
          dayAvailability.start?.currentKey.split(":")[0],
          10
        );
        const endHour = parseInt(
          dayAvailability.end?.currentKey.split(":")[0],
          10
        );

        if (startHour >= endHour) {
          toast.warning(
            `La hora de fin debe ser posterior a la hora de inicio para ${
              day[0].toUpperCase() + day.slice(1)
            }.`
          );
          isValid = false;
          break;
        }
      }
    }

    if (!atLeastOneDayChecked) {
      toast.warning("Por favor, selecciona al menos un día de la semana.");
      isValid = false;
    }

    return isValid;
  };

  const handleChangeCheckbox = (day) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: {
        ...prevAvailability[day],
        isChecked: !prevAvailability[day].isChecked,
      },
    }));
  };

  const handleChangeSelect = (day, type, value) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: { ...prevAvailability[day], [type]: value },
    }));
  };

  return (
    // ... (estructura principal del componente)
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toaster richColors closeButton />
      <div className="border-2 rounded-lg p-5 flex flex-col lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py- lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex mb-2 items-center gap-4">
            <div className="w-24">
              <Checkbox
                isSelected={availability[day].isChecked}
                onChange={() => handleChangeCheckbox(day)}
              >
                {day[0].toUpperCase() + day.slice(1)}
              </Checkbox>
            </div>
            <div className="flex gap-2">
              <Select
                label="Hora de inicio"
                isDisabled={!availability[day].isChecked}
                variant="bordered"
                radius="sm"
                className="w-32"
                selectedKey={availability[day].start}
                onSelectionChange={(key) =>
                  handleChangeSelect(day, "start", key)
                }
              >
                {hours24.map((hour) => (
                  <SelectItem key={hour}>{hour}</SelectItem>
                ))}
                {/* ... (opciones de horas) ... */}
              </Select>
              <Select
                label="Hora de fin"
                isDisabled={!availability[day].isChecked}
                variant="bordered"
                radius="sm"
                className="w-32"
                selectedKey={availability[day].end}
                onSelectionChange={(key) => handleChangeSelect(day, "end", key)}
              >
                {hours24
                  .filter((hour) => hour !== "00:00")
                  .map((hour) => (
                    <SelectItem key={hour}>{hour}</SelectItem>
                  ))}
                {/* ... (opciones de horas) ... */}
              </Select>
            </div>
          </div>
        ))}

        <div className="mt-5 w-full flex justify-center">
          <ButtonPink text="Actualizar" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </form>
  );
}
