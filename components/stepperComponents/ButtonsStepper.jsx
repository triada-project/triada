import { Button } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ButtonsStepper({ mTop }) {
  return (
    <div className={`flex items-center gap-11 ${mTop}`}>
      <Button
        className={`${lato.className} w-[107px] h-8 rounded font-bold px-2 py-1 shadow-md bg-white border border-[#EE0075]`}
      >
        <div className=" flex gap-2 items-center">
          <Image
            src="/assets/svg/back.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
          <p className={`${lato.className} text-[#EE0075] font-bold `}>Atrás</p>
        </div>
      </Button>
      <p className=" font-bold text-sm">1/6</p>
      <Button
        className={`${lato.className} w-[107px] h-8 rounded font-bold bg-[#EE0075] px-2 py-1 shadow-md`}
      >
        <div className=" flex gap-2 items-center">
          <p className={`${lato.className} text-white font-bold `}>Siguiente</p>
          <Image
            src="/assets/svg/next.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </div>
      </Button>
    </div>
  );
}
