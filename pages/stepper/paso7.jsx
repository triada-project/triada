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
          className={`${lato.className} text-center text-xl text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Para gestionar los pagos de los eventos que te contraten, te
          redirigiremos a <b>Stripe</b> , una plataforma segura de pagos en
          línea. Crear tu cuenta en Stripe será rápido y sencillo
        </p>
        <Image
          src={"/assets/images/payment-information.webp"}
          width={300}
          height={300}
          className=" sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        />
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"7"}
          stepBack={"/stepper/paso6"}
          stepNext={"/stepper/paso8"}
        />
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-5">
            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3`}
            >
              ¿Cúales son tus honorarios por hora evento?
            </p>
            <Input
              type="number"
              label="Ingresa aquí tus honorarios"
              isRequired
              placeholder="0.00"
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] lg:w-full`}
              {...register("song", { required: true })}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuántas horas máximo te pueden agendar por evento?
            </p>
            <Input
              type="number"
              label="Ingresa aquí las horas"
              isRequired
              placeholder="0"
              min={1}
              max={24}
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] lg:w-full`}
              {...register("song", { required: true })}
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Tienes requerimientos especiales para tu presentación? Dinos
              cuáles son (máximo 5):
            </p>
            <Input
              label="Escribe aquí el requerimiento"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] mb-7 lg:w-full`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("song", { required: true })}
            />
            <ButtonPink
              width="w-full"
              text="Agregar requerimiento"
              type="submit"
            />
            
          </div>
        </form> */}
      </section>
    </StepperLayout>
  );
}
