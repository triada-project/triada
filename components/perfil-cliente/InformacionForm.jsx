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

export default function InformacionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col items-center my-11 lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py-5 lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
      <h2 className={`${josefine.className} text-black text-xl font-semibold`}>
        Información
      </h2>
      {errors.estado && (
        <h3 className=" text-danger">* Favor de compeltar todos los campos</h3>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col items-center gap-7 mt-11">
          <Input
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            variant="bordered"
            radius="sm"
            label="Nombre para mostrar"
            {...register("nombre")}
          />
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
          {/* <div className=" text-tiny text-danger-50">
            Debes elegir un estado
          </div> */}
          <Select
            label="Localidad"
            isRequired
            variant="bordered"
            radius="sm"
            className=" w-[328px] h-14 lg:w-[30rem]"
            {...register("localidad")}
          >
            <SelectItem key={"Monterrey"}>Monterrey</SelectItem>
            <SelectItem key={"Santa Catarina"}>Santa Catarina</SelectItem>
            <SelectItem key={"San Pedro"}>San Pedro</SelectItem>
          </Select>
          {/* <Button
            type="submit"
            className={` bg-[#EF107D] text-white w-[328px] h-[50px] rounded text-base ${lato.className} lg:w-[30rem]`}
          >
            Guardar
          </Button> */}
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
