import { Button } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ButtonsStepper({ mTop, step, stepBack, stepNext }) {
  //console.log(stepBack);
  return (
    <div
      className={`flex items-center w-full justify-between ${mTop} md:w-[404px] `}
    >
      <Link href={`${stepBack}`}>
        <Button
          className={`${lato.className} w-[107px] h-8 rounded font-bold px-2 py-1 shadow-md bg-white border border-[#EE0075] md:w-[150px] md:h-[50px]`}
        >
          <div className=" flex gap-2 items-center">
            <Image
              src="/assets/svg/back.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
            <p className={`${lato.className} text-[#EE0075] font-bold `}>
              Atrás
            </p>
          </div>
        </Button>
      </Link>

      <p className=" font-bold text-sm md:text-lg">{`${step} / 6`}</p>
      <Link href={`${stepNext}`}>
        <Button
          type="submit"
          className={`${lato.className} w-[107px] h-8 rounded font-bold bg-[#EE0075] px-2 py-1 shadow-md md:w-[150px] md:h-[50px]`}
        >
          <div className=" flex gap-2 items-center">
            <p className={`${lato.className} text-white font-bold `}>
              Siguiente
            </p>
            <Image
              src="/assets/svg/next.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </div>
        </Button>
      </Link>
    </div>
  );
}
