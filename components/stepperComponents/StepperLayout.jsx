import Image from "next/image";
import { Lato, Josefin_Sans } from "next/font/google";
import FooterMain from "@/components/footer/footer";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function StepperLayout({ children }) {
  return (
    <main className=" shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] bg-white flex flex-col items-center m-auto ">
      <div className=" flex gap-2 items-center mt-10">
        <h1
          className={`${josefine.className} text-[#665DFB] text-xl md:text-4xl`}
        >
          Bienvenid@ a{" "}
        </h1>
        <Image
          src={"/assets/svg/triada-logo.svg"}
          width={74}
          height={38}
          className=" md:w-[84px] md:h-[48px]"
        />
      </div>
      <p
        className={`${lato.className} text-center text-[#455A64] w-[328px] mt-3 md:text-2xl md:w-[720px] `}
      >
        Antes de comenzar a conectar con clientes potenciales queremos saber más
        de ti completando los siguientes pasos
      </p>
      {children}
      <FooterMain marginT={"mt-[100px]"} />
    </main>
  );
}
