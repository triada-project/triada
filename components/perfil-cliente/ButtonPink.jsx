import { Button } from "@nextui-org/react";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ButtonPink() {
  return (
    <Button
      className={` bg-[#EF107D] text-white w-[150px] h-[50px] rounded text-base ${lato.className} mt-5 mx-[89px]`}
    >
      Cargar imagen
    </Button>
  );
}
