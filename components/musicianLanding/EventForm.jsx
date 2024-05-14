import React from "react";
import ReactDOM from "react-dom";
import { Contrail_One, Josefin_Sans, Lato } from "next/font/google";
import {
  Input,
  Select,
  SelectSection,
  SelectItem,
  DatePicker,
  Checkbox,
} from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";
import ButtonPink from "./ButtonPink";
import dataMusician from "../../objects/musicianObject.json";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });
const { users } = dataMusician;

export default function EventForm() {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      date: "",
    },
  });
  const onSubmit = async (data) => {
    const phonePrefix = "+52" + data.phone;
    const fecha = new Date(data.date.year, data.date.month - 1, data.date.day);
    const fechaFormateada = fecha.toLocaleDateString();
    console.log(data);
    try {
      const response = await fetch("http://localhost:3005/events", {
        method: "POST",
        body: JSON.stringify({
          address: {
            state: data.state,
            city: data.city,
            street: data.street,
            neigbourhood: data.neigbourhood,
            zipCode: data.zipCode,
            exteriorNumber: data.exteriorNumber,
            interiorNumber: data.interiorNumber,
            reference: data.reference,
          },
          date: fechaFormateada,
          endHour: data.endHour,
          eventName: data.eventName,
          eventType: data.eventType,
          phoneClient: phonePrefix,
          startHour: data.startHour,
          totalHours: getTotalHours(),
          payment: totalRes(),
          isChecked: data.isChecked,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const eventData = await response.json();
      console.log(eventData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const watchStartHour = watch("startHour", "00:00");
  const watchEndHour = watch("endHour", "00:00");
  // Función para calcular y mostrar total de horas
  const getTotalHours = () => {
    var startHourValue = watchStartHour; //getValues("startHour");
    var endHourValue = watchEndHour; //getValues("endHour");

    // Validar si se han seleccionado ambas horas
    if (startHourValue && endHourValue) {
      // Convertir horas de texto a objetos Date para facilitar el cálculo
      const startTime = new Date(`2024-04-29T${startHourValue}`);

      const endTime = new Date(`2024-04-29T${endHourValue}`);

      // Calcular la diferencia en milisegundos
      const difference = endTime - startTime;

      // Convertir la diferencia a horas
      const totalHours = difference / (1000 * 60 * 60);

      // Mostrar el total de horas
      return totalHours;
    } else {
      return 0; // Mostrar 0 si no se han seleccionado ambas horas
    }
  };

  const totalRes = () => {
    return users.eventFee * getTotalHours();
  };

  return (
    <section className="border-2 rounded-lg p-5 mt-10flex flex-col  lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py- lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
      <h1 className="{`${roboto.classname} text-[#312971] text-2xl text-center font-bold sm:text-[30px]">
        Inicia la reservación para tu evento aquí
      </h1>
      <div className="border border-blue-700 bg-blue-100 rounded-md mt-5 flex ">
        <div>
          <Image
            src={info_FILL1}
            alt="info"
            width={20}
            height={20}
            className="ml-2 mt-2 mr-5"
          />
        </div>

        <div className="flex">
          <p className="text-blue-700 flex-auto text-center p-2">Disponible:</p>
          {users.availability.map((slot) => (
            <p
              className="text-blue-700 flex-auto text-center p-2"
              key={slot.day}
            >
              {slot.day}: {slot.hours}
            </p>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:gap-4 w-full">
          <span className="  gap-2 w-1/2">
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 mb-2 sm:text-[20px]">
              Elige una fecha
            </h2>

            <div className="w-full max-w-xl flex flex-row gap-4">
              <Controller
                name="date"
                control={control}
                rules={{ required: true }} // Add your validation rules here
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    isRequired
                    onChange={onChange}
                    format="mm/dd/yyyy"
                    label="Mes / Día / Año"
                    variant="bordered"
                    radius="sm"
                  />
                )}
              />
            </div>
          </span>
          <span className="items-center gap-2 w-1/2">
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 mb-2 sm:text-[20px]">
              Elige el horario
            </h2>
            <div className="sm:flex items-center gap-4 w-full">
              <Select
                id="startHour"
                label="Hora de inicio"
                isRequired
                variant="bordered"
                radius="sm"
                {...register("startHour", { required: true })}
              >
                <SelectItem key={"09:00"}>09:00</SelectItem>
                <SelectItem key={"10:00"}>10:00</SelectItem>
                <SelectItem key={"11:00"}>11:00</SelectItem>
                <SelectItem key={"12:00"}>12:00</SelectItem>
                <SelectItem key={"13:00"}>13:00</SelectItem>
                <SelectItem key={"14:00"}>14:00</SelectItem>
                <SelectItem key={"15:00"}>15:00</SelectItem>
                <SelectItem key={"16:00"}>16:00</SelectItem>
                <SelectItem key={"17:00"}>17:00</SelectItem>
                <SelectItem key={"18:00"}>18:00</SelectItem>
                <SelectItem key={"19:00"}>19:00</SelectItem>
                <SelectItem key={"20:00"}>20:00</SelectItem>
                <SelectItem key={"21:00"}>21:00</SelectItem>
                <SelectItem key={"22:00"}>22:00</SelectItem>
              </Select>
              <Select
                id="endHour"
                label="Hora de fin"
                isRequired
                variant="bordered"
                radius="sm"
                {...register("endHour", { required: true })}
              >
                <SelectItem key={"10:00"}>10:00</SelectItem>
                <SelectItem key={"11:00"}>11:00</SelectItem>
                <SelectItem key={"12:00"}>12:00</SelectItem>
                <SelectItem key={"13:00"}>13:00</SelectItem>
                <SelectItem key={"14:00"}>14:00</SelectItem>
                <SelectItem key={"15:00"}>15:00</SelectItem>
                <SelectItem key={"16:00"}>16:00</SelectItem>
                <SelectItem key={"17:00"}>17:00</SelectItem>
                <SelectItem key={"18:00"}>18:00</SelectItem>
                <SelectItem key={"19:00"}>19:00</SelectItem>
                <SelectItem key={"20:00"}>20:00</SelectItem>
                <SelectItem key={"21:00"}>21:00</SelectItem>
                <SelectItem key={"22:00"}>22:00</SelectItem>
                <SelectItem key={"23:00"}>23:00</SelectItem>
              </Select>
            </div>
          </span>
        </div>
        <h2 className="{`${josefin.classname} text-[#37474F] mt-5 m-b font-semibold sm:text-[20px]">
          Detalles del evento
        </h2>
        <div className=" flex flex-col items-center gap-5 mt-5">
          <div className="sm:flex gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Estado"
              onChange={(e) => setValue(e.target.value)}
              {...register("state", { maxLength: 30, required: false })}
              className="sm:w-1/2"
            />

            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Ciudad"
              onChange={(e) => setValue(e.target.value)}
              {...register("city", {
                required: false,
              })}
              className="sm:w-1/2 mt-5 sm:mt-0"
            />
          </div>
          <div className="sm:flex gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Colonia"
              onChange={(e) => setValue(e.target.value)}
              {...register("neigbourhood", { maxLength: 30 })}
              className="sm:w-1/2"
            />
            <Input
              variant="bordered"
              radius="sm"
              label="Código postal"
              onChange={(e) => setValue(e.target.value)}
              {...register("zipCode", {
                required: false,
              })}
              className="sm:w-1/2 mt-5 sm:mt-0"
            />
          </div>
          <div className="sm:flex items-center gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Calle"
              onChange={(e) => setValue(e.target.value)}
              {...register("street", { maxLength: 80 })}
            />

            <div className="sm:flex items-center gap-4 w-full">
              <Input
                isRequired
                variant="bordered"
                radius="sm"
                label="Número exterior"
                onChange={(e) => setValue(e.target.value)}
                {...register("exteriorNumber", {})}
                className="mt-5 sm:mt-0"
              />
              <Input
                variant="bordered"
                radius="sm"
                label="Número interior"
                onChange={(e) => setValue(e.target.value)}
                {...register("interiorNumber")}
                className="mt-5 sm:mt-0"
              />
            </div>
          </div>
          <div className="sm:flex items-center gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Referencia"
              onChange={(e) => setValue(e.target.value)}
              {...register("reference", { maxLength: 80 })}
            />
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Teléfono"
              onChange={(e) => setValue(e.target.value)}
              {...register("phone", { pattern: /^[0-9]{10}$/ })}
              className="mt-5 sm:mt-0"
            />
          </div>
          <div className="sm:flex items-center gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Nombre de evento"
              onChange={(e) => setValue(e.target.value)}
              {...register("eventName", { maxLength: 50 })}
            />
            <Select
              isRequired
              variant="bordered"
              radius="sm"
              label="Tipo de evento"
              onChange={(e) => setValue(e.target.value)}
              {...register("eventType")}
              className="mt-5 sm:mt-0"
            >
              <SelectItem key={"Boda"}>Boda</SelectItem>
              <SelectItem key={"Cena"}>Cena</SelectItem>
              <SelectItem key={"Concierto en recinto"}>
                Concierto en recinto
              </SelectItem>
              <SelectItem key={"Coorporativo"}>Coorporativo</SelectItem>
              <SelectItem key={"Cumpleaños"}>Cumpleaños</SelectItem>
              <SelectItem key={"Presentación en bar"}>
                Presentación en bar
              </SelectItem>
              <SelectItem key={"Servicio religioso"}>
                Servicio religioso
              </SelectItem>
            </Select>
          </div>
          <div className="text-[#455A64] w-full divide-y ">
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold sm:text-[20px] divide-[#455A64]">
              Resumen
            </h2>
            <div className="flex mt-4">
              <p className="w-1/2">Horas contratadas</p>
              <p className="w-1/2 text-right">{getTotalHours()} horas</p>
            </div>
            <div className="flex mt-4">
              <p className="w-2/3">Total de reservación</p>
              <p className="w-1/3 text-right">${totalRes()}</p>
            </div>
          </div>
          <Checkbox isRequired {...register("isChecked")}>
            Acepto términos y condiciones
          </Checkbox>
          {/* if !token then modal iniciar sesión */}
          <ButtonPink
            width="w-[280px] lg:w-[30rem]"
            text="Pagar"
            type="submit"
          />
          <div className="border border-blue-700 bg-blue-100 rounded-md  flex">
            <div>
              <Image
                src={info_FILL1}
                alt="info"
                width={20}
                height={20}
                className="ml-2 mt-2 mr-5"
              />
            </div>
            <div>
              <p className="text-blue-700 flex-auto text-center p-2">
                Al terminar tu proceso de compra, tu dinero estará protegido sin
                cobrarse. Si el artista acepta tu reservación se cobrará el día
                del evento mediante un código que te haremos llegar. Si el
                artista rechaza la reservación, se te devolverá integro.
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
