import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import ButtonPink from "../perfil-cliente/ButtonPink";
import { useForm, Controller } from "react-hook-form";
import SelectGenreMusic from "../SelectGenreMusic/SelectGenreMusic";
import SelectTypeEvents from "../SelectGenreMusic/SelectTypeEvents";
import LocalidadSelect from "../SelectsLocation/LocalidadSelect";
import EstadoSelect from "../SelectsLocation/EstadoSelect";
import useTokenStore from "@/stores/tokenStore";
import { users, musicalGenre } from "../SelectGenreMusic/data";
import { useState } from "react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InfoFormMusico(props) {
  const tokenObject = useTokenStore((state) => state.tokenObject);
  console.log(tokenObject);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      state: "",
      city: "",
      musicalGenre: "",
      eventType: "",
    },
  });

  // const [values, setValues] = useState([]);

  // const handleSelectionChange = (e) => {
  //   setValues(new Set(e.target.value.split(",")));
  // };

  // console.log(Array.from(values));
  // console.log(values);
  // console.log(errors);

  async function onSubmit(data) {
    const response = await fetch(
      `http://localhost:4000/users/${tokenObject?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          city: data.city,
          state: data.state,
          description: data.description,
          eventFee: data.eventFee,
          eventType: data.eventType.split(","),
          maximumHours: data.maximumHours,
          musicalGenre: data.musicalGenre.split(","),
        }),
      }
    );
  }

  //const onSubmit = (data) => console.log(data);

  // Verificar si el tokenObject está listo
  if (!tokenObject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center mt-11 lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py-5 lg:border-opacity-25 lg:shadow-lg lg:items-start ">
      <h2 className={`${josefine.className} text-black text-xl font-semibold`}>
        Información
      </h2>
      {errors.estado && (
        <h3 className=" text-danger">* Favor de compeltar todos los campos</h3>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col items-center gap-7 pt-11">
          <Input
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Nombre para mostrar"
            {...register("name")}
          />

          <Controller
            name="state"
            control={control}
            rules={{ required: true }} // Add your validation rules here
            render={({ field: { onChange, onBlur, value } }) => (
              <EstadoSelect
                // onBlur={onBlur}
                onChange={onChange}
                selectedKeys={value ? [value] : []}
              />
            )}
          />
          {/* <div className=" text-tiny text-danger-50">
            Debes elegir un estado
          </div> */}
          <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <LocalidadSelect
                // onBlur={onBlur}
                onChange={onChange}
                selectedKeys={value ? [value] : []}
              />
            )}
          />

          <Textarea
            variant="bordered"
            isRequired
            label="Descripción"
            placeholder="Cuentanos sobre ti"
            description="200 caracteres como máximo, solo texto simple."
            className="w-[328px] lg:w-[30rem]"
            {...register("description")}
          />

          <Controller
            name="musicalGenre"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectGenreMusic
                onChange={(val) => {
                  if (Array.isArray(val)) {
                    onChange(val.join(","));
                  } else {
                    onChange(val);
                  }
                }}
                selectedKeys={value ? value.split(",") : []}
                width="w-[328px] lg:w-[30rem]"
              />
            )}
          />

          <Controller
            name="eventType"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <SelectTypeEvents
                onChange={(val) => {
                  if (Array.isArray(val)) {
                    onChange(val.join(","));
                  } else {
                    onChange(val);
                  }
                }}
                selectedKeys={value ? value.split(",") : []}
                width="w-[328px] lg:w-[30rem]"
              />
            )}
          />

          {/* <SelectTypeEvents width="w-[328px] lg:w-[30rem]" /> */}
          <Input
            type="number"
            label="Costo por hora evento"
            isRequired
            placeholder="0.00"
            //autoFocus={true}
            variant="bordered"
            radius="sm"
            className={`w-[328px] h-14 rounded-none lg:w-[30rem]`}
            {...register("eventFee")}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />

          <Input
            type="number"
            label="Duración máxima de horas por evento"
            isRequired
            placeholder="0"
            min={1}
            max={24}
            //autoFocus={true}
            variant="bordered"
            radius="sm"
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            {...register("maximumHoursEvent", { required: true })}
          />

          <ButtonPink
            width="w-[328px] lg:w-[30rem]"
            text="Guardar"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
}
