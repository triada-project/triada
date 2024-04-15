import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import SelectGenreMusic from "@/components/SelectGenreMusic/SelectGenreMusic";
import SelectTypeEvents from "@/components/SelectGenreMusic/SelectTypeEvents";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Cuéntanos sobre tu música
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-5">
            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3`}
            >
              ¿Cómo describirías la configuración musical del proyecto (Solista,
              Dúo, Grupo, Banda, etc.)?
            </p>
            <Select
              label="Tipo de artista"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px]`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("musicianTyoe", { required: true })}
            >
              <SelectItem key={"Banda"}>Banda</SelectItem>
              <SelectItem key={"Solista"}>Duo</SelectItem>
              <SelectItem key={"Solista"}>Solista</SelectItem>
            </Select>

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuáles son los géneros musicales que interpretas? Selecciona al
              menos 1 opción y un máximo de 5.
            </p>
            <SelectGenreMusic {...register("musicGenre")} />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuáles son los tipos de eventos a los que asistes?
            </p>
            <SelectTypeEvents />

            <ButtonsStepper
              mTop={"mt-[60px]"}
              step={"3"}
              stepBack={"/stepper/paso2"}
              stepNext={"/stepper/paso4"}
            />
          </div>
        </form>
      </section>
    </StepperLayout>
  );
}
