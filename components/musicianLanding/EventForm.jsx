import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import ButtonPink from "./ButtonPink";
import { useForm } from "react-hook-form";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col  lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py- lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col items-center gap-7 mt-5">
          <Select
            label="Estado"
            isRequired
            //autoFocus={true}
            variant="bordered"
            radius="sm"
            className={`w-[280px] h-14 lg:w-[30rem]`}
            //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
            {...register("estado", { required: true })}
          >
            <SelectItem key={"Nuevo León"}>Nuevo León</SelectItem>
            <SelectItem key={"CDMX"}>CDMX</SelectItem>
            <SelectItem key={"Jalisco"}>Jalisco</SelectItem>
          </Select>
          {/* <div className=" text-tiny text-danger-50">
            Debes elegir un estado
          </div> */}
          <Select
            label="Municipio"
            isRequired
            variant="bordered"
            radius="sm"
            className=" w-[280px] h-14 lg:w-[30rem]"
            {...register("localidad")}
          >
            <SelectItem key={"Monterrey"}>Monterrey</SelectItem>
            <SelectItem key={"Santa Catarina"}>Santa Catarina</SelectItem>
            <SelectItem key={"San Pedro"}>San Pedro</SelectItem>
          </Select>
          <Input
            className=" w-[280px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Colonia"
            {...register("colonia")}
          />
          <Input
            className=" w-[280px] h-14 rounded-none lg:w-[30rem]"
            variant="bordered"
            radius="sm"
            label="Código postal"
            {...register("cp")}
          />
          <Input
            className=" w-[280px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Referencia"
            {...register("referencia")}
          />
          <Input
            className=" w-[280px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Teléfono"
            {...register("telefono")}
          />
          <Input
            className=" w-[280px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Nombre de evento"
            {...register("eventName")}
          />
          <Input
            className=" w-[280px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Tipo de evento"
            {...register("eventType")}
          />
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold sm:text-[20px]">
              Resumen
            </h2>
            <div className="flex items-center">
              <p>Horas contratadas</p>
              <p className="ml-5">00</p>
            </div>
            <div className="flex items-center">
              <p>Total de reservación</p>
              <p className="ml-5">$00</p>
            </div>
          </div>
          {/*<Button
            type="submit"
            className={` bg-[#EF107D] text-white w-[328px] h-[50px] rounded text-base ${lato.className} lg:w-[30rem]`}
        >
            Guardar
          </Button>*/}

          <ButtonPink
            width="w-[280px] lg:w-[30rem]"
            text="Pagar"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
}
