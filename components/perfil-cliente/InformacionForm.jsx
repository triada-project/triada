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
    <section className="flex flex-col items-center ">
      <h2 className={`${josefine.className} text-black text-xl font-semibold `}>
        Información
      </h2>
      <form>
        <div className=" flex flex-col items-center gap-7 mt-11">
          <Input
            className=" w-[328px] h-14 rounded-none"
            isRequired
            label="Nombre para mostrar"
          />
          <Input
            className=" w-[328px] h-14 rounded-none"
            isRequired
            label="Estado de recidencia"
          />
          <Input
            className=" w-[328px] h-14 rounded-none"
            isRequired
            label="Localidad"
          />
          <Button
            className={` bg-[#EF107D] text-white w-[328px] h-[50px] rounded text-base ${lato.className}`}
          >
            Guardar
          </Button>
        </div>
      </form>
    </section>
  );
}
