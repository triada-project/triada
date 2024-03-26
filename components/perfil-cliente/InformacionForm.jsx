import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InformacionForm() {
  return (
    <section className="flex flex-col items-center my-11 lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py-5 lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
      <h2 className={`${josefine.className} text-black text-xl font-semibold`}>
        Información
      </h2>
      <form>
        <div className=" flex flex-col items-center gap-7 mt-11">
          <Input
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            radius="sm"
            label="Nombre para mostrar"
          />
          <Input
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            radius="sm"
            label="Estado de recidencia"
          />
          <Input
            className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
            isRequired
            radius="sm"
            label="Localidad"
          />
          <Button
            className={` bg-[#EF107D] text-white w-[328px] h-[50px] rounded text-base ${lato.className} lg:w-[30rem]`}
          >
            Guardar
          </Button>
        </div>
      </form>
    </section>
  );
}
