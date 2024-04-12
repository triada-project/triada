import Image from "next/image";
import { Lato, Josefin_Sans } from "next/font/google";
import UpdateCardPicture from "@/components/UpdateCardPicture";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import FooterMain from "@/components/footer/footer";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Stepper() {
  return (
    <main className=" max-w-[1440px] bg-white flex flex-col items-center m-auto ">
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
      <section className=" w-[330px] mt-14 md:w-[404px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Carga una imagen de perfil
        </h2>
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Esta será la imagen principal que se mostrará al público
        </p>
        <UpdateCardPicture />
        <ButtonsStepper mTop={"mt-[60px]"} />
      </section>

      <FooterMain marginT={"mt-[100px]"} />
    </main>
  );
}
