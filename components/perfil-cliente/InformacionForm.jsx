import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import ButtonPink from "./ButtonPink";
import { useForm } from "react-hook-form";
import useTokenStore from "@/stores/tokenStore";
import { useEffect, useState } from "react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InformacionForm() {
  const tokenObject = useTokenStore((state) => state.tokenObject);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(tokenObject);

  //console.log(errors);

  //const onSubmit = (data) => console.log(data);

  async function onSubmit(data) {
    const response = await fetch(
      `https://apitriada.rodolfo-ramirez.com/users/${tokenObject?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.nombre,
        }),
      }
    );
  }

  // Verificar si el tokenObject está listo
  if (!tokenObject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center mt-11 lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py-5 lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
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
            //placeholder={`${tokenObjet()?.name}`}
            defaultValue={`${tokenObject?.name}`}
            {...register("nombre")}
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
