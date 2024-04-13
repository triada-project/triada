import Image from "next/image";
import { Lato, Josefin_Sans } from "next/font/google";
import UpdateCardPicture from "@/components/UpdateCardPicture";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import FooterMain from "@/components/footer/footer";
import StepperLayout from "@/components/stepperComponents/StepperLayout";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Stepper() {
  return (
    <StepperLayout>
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
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"1"}
          stepBack={"/stepper"}
          stepNext={"/stepper/paso2"}
        />
      </section>
    </StepperLayout>
  );
}
