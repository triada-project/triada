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
import { Toaster, toast } from "sonner";
import { useState } from "react";
import states from "../../data/estados.json";
import estadosMunicipios from "../../data/estados-municipios.json";
import useSelectedStateStore from "@/stores/selectedStateStore";
import React from "react";
import { users, musicalGenre, typeEvents } from "./../SelectGenreMusic/data";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InfoFormMusico({ userData }) {
  //const [state, setState] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGenreMusic, setSelectedGenreMusic] = useState([]);
  const [selectedTypeEvents, setSelectedTypeEvents] = useState([]);
  const tokenObject = useTokenStore((state) => state.tokenObject);
  const state = useSelectedStateStore((state) => state.selectedState);
  const setSelectedState = useSelectedStateStore(
    (state) => state.setSelectedState
  );
  const handleEstadoChange = (selectedEstado) => {
    setSelectedState(selectedEstado);
  };
  const handleLocalidadChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleSelectionGenreMusic = (e) => {
    setSelectedGenreMusic(new Set(e.target.value.split(",")));
  };

  const handleSelectionEventsType = (e) => {
    setSelectedTypeEvents(new Set(e.target.value.split(",")));
  };
  // Filtrar las localidades según el estado seleccionado
  const localidades = estadosMunicipios[state] || [];
  const genreMusicString = Array.from(selectedGenreMusic).join(",");
  const typeEventsString = Array.from(selectedTypeEvents).join(",");
  console.log(genreMusicString.split(","));
  console.log(selectedCity);
  console.log(selectedTypeEvents);
  console.log(state);
  console.log(userData?.data);
  console.log(tokenObject);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // description: userData?.data?.description || "",
      // eventFee: userData?.data?.eventFee || "",
      // maximumHours: userData?.data?.maximumHours || "",
      // state: "",
      // city: userData?.data?.city || "",
      // musicalGenre: "",
      // eventType: "",
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
      `http://3.145.7.153/users/${tokenObject?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          city: selectedCity,
          state: state,
          description: data.description,
          eventFee: data.eventFee,
          eventType: typeEventsString.split(","),
          maximumHours: data.maximumHours,
          musicalGenre: genreMusicString.split(","),
        }),
      }
    );
    const responseData = await response.json();
    console.log(responseData);

    if (response.status === 201) {
      toast.success("¡Requerimientos guardados con éxito!");
      window.location.reload();
      // Opcional: Borrar las solicitudes después de guardarlas correctamente
    } else {
      toast.error("Ocurrió un error al guardar los requerimientos.");
      console.error(
        "Error en la respuesta de la API:",
        responseData.message || response.statusText
      );
    }
  }

  //const onSubmit = (data) => console.log(data);

  // Verificar si el tokenObject está listo
  if (!userData) {
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
        <Toaster richColors closeButton />
        <div className=" flex flex-col items-center gap-7 pt-11">
          <Input
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Nombre para mostrar"
            defaultValue={`${userData?.data?.name}`}
            {...register("name")}
          />

          <Select
            label="Estado de residencia"
            isRequired
            variant="bordered"
            radius="sm"
            className="w-[328px] h-14 lg:w-[30rem]"
            //onChange={onChange}
            // onBlur={onBlur}
            //placeholder="Ciudad de Mexico"
            defaultSelectedKeys={[`${userData?.data?.state}`]}
            // selectedKeys={state}
            // onSelectionChange={setState}
            //selectedKeys={selectedKeys}
          >
            {states.map((state) => (
              <SelectItem
                key={state.nombre}
                onClick={() => handleEstadoChange(state.nombre)}
              >
                {state.nombre}
              </SelectItem>
            ))}
          </Select>

          {/* <Controller
            name="state"
            control={control}
            rules={{ required: true }} // Add your validation rules here
            render={({ field: { onChange, onBlur, value } }) => (
              <EstadoSelect
                // onBlur={onBlur}
                onChange={onChange}
                selectedKeys={value ? [value] : []}
                data={userData}
              />
            )}
          /> */}

          {/* <div className=" text-tiny text-danger-50">
            Debes elegir un estado
          </div> */}
          {/* <Controller
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
          /> */}
          <Select
            label="Localidad"
            isRequired
            variant="bordered"
            radius="sm"
            className="w-[328px] h-14 lg:w-[30rem]"
            onChange={handleLocalidadChange}
            // selectedKeys={selectedKeys}
            defaultSelectedKeys={[`${userData?.data?.city}`]}
            //placeholder={[`${userData?.data?.city}`]}
          >
            {localidades.map((localidad, index) => (
              <SelectItem key={localidad}>{localidad}</SelectItem>
            ))}
          </Select>

          <Textarea
            variant="bordered"
            isRequired
            label="Descripción"
            // placeholder="Cuentanos sobre ti"
            description="200 caracteres como máximo, solo texto simple."
            className="w-[328px] lg:w-[30rem]"
            defaultValue={`${userData?.data?.description}`}
            {...register("description")}
          />

          {/* <Controller
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
          /> */}
          <Select
            isRequired
            onChange={handleSelectionGenreMusic}
            //selectedKeys={selectedKeys}
            defaultSelectedKeys={userData?.data?.musicalGenre}
            //className={selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
            items={musicalGenre}
            label={"Géneros Musicales"}
            variant="bordered"
            isMultiline={true}
            selectionMode={"multiple"}
            placeholder={"Selecciona uno o más géneros musicales"}
            //labelPlacement="outside"
            classNames={{
              base: `w-[328px] lg:w-[30rem]`,
              trigger: "min-h-unit-12 py-2",
            }}
            // className={` h-16 ${width}`}
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
              <SelectItem
                key={musicalGenre.id}
                textValue={musicalGenre.musicalGenre}
              >
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <span className="text-small">
                      {musicalGenre.musicalGenre}
                    </span>
                    {/* <span className="text-tiny text-default-400">{user.email}</span> */}
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>

          {/* <Controller
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
          /> */}
          <Select
            isRequired
            onChange={handleSelectionEventsType}
            defaultSelectedKeys={userData?.data?.eventType}
            items={typeEvents}
            label={"Tipos de evento"}
            //className={selectType === "home" ? ` text-[#29FEFD] dark ` : ""}
            variant="bordered"
            isMultiline={true}
            selectionMode={"multiple"}
            placeholder={"Selecciona uno o más tipos de evento"}
            //labelPlacement="outside"
            classNames={{
              base: `w-[328px] lg:w-[30rem]`,
              trigger: "min-h-unit-12 py-2",
            }}
            // className={` h-16 ${width}`}
            renderValue={(items) => {
              return (
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Chip key={item.key} className=" bg-[#081540] text-white">
                      {item.data.typeEvents}
                    </Chip>
                  ))}
                </div>
              );
            }}
          >
            {(typeEvents) => (
              <SelectItem key={typeEvents.id} textValue={typeEvents.typeEvents}>
                <div className="flex gap-2 items-center">
                  {/* <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="sm"
              src={user.avatar}
            /> */}
                  <div className="flex flex-col">
                    <span className="text-small">{typeEvents.typeEvents}</span>
                    {/* <span className="text-tiny text-default-400">{user.email}</span> */}
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>

          {/* <SelectTypeEvents width="w-[328px] lg:w-[30rem]" /> */}
          <Input
            type="number"
            label="Costo por hora evento"
            isRequired
            //placeholder="0.00"
            defaultValue={userData?.data?.eventFee}
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
            //placeholder="0"
            defaultValue={userData?.data?.maximumHoursEvent}
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
