import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import SelectGenreMusic from "@/components/SelectGenreMusic/SelectGenreMusic";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import SelectTypeEvents from "@/components/SelectGenreMusic/SelectTypeEvents";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step5() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] lg:w-[500px] flex flex-col items-center">
        <p
          className={`${lato.className} text-xl text-center text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          ¡Listo! Ya formas parte de <b>TRIADA</b> . Si necesitas actualizar
          estos datos, puedes hacerlo en el perfil de tu cuenta. Haz clic en
          'Finalizar' y te redirigiremos a tu perfil.
        </p>
        <Image
          src={"/assets/images/music-festival.webp"}
          width={300}
          height={300}
          className=" sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        />
        <ButtonPink text="Finalizar" width="w-full" mtop="mt-[44px]" />
        {/* <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"7"}
          stepBack={"/stepper/paso6"}
          stepNext={"/stepper/paso8"}
        /> */}
      </section>
    </StepperLayout>
  );
}
