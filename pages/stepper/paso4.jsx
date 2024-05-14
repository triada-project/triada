import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import RepertoryCard from "@/components/RepertoryCard";
import dataMusician from "@/objects/musicianObject.json";

const repertory = dataMusician.users.repertory;

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step4() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[500px] lg:w-[690px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Temas más representativos de tu repertorio
        </h2>
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Esta información servirá para dar una muestra de las canciones que
          interpretas a las personas que buscan contratarte.
          <b>Agrega mínimo 5</b> , podrás agregar mas en tu perfil.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-8 ">
            <Input
              label="Nombre de la canción"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[500px] mb-7 lg:w-full`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("song", { required: true })}
            />

            <Input
              label="Artista Original"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[500px] mb-7 lg:w-full`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("artist", { required: true })}
            />
          </div>
          <ButtonPink width="w-full" text="Agregar" type="submit" />
          <article className=" flex flex-col items-center mt-10 gap-7 md:flex-row md:flex-wrap lg:w-full lg:flex-row lg:flex-wrap lg:gap-[5px]">
            {repertory.map((song) => (
              <RepertoryCard
                key={song.author}
                song={song.title}
                author={song.author}
              />
            ))}
            {/* <RepertoryCard /> */}
          </article>
        </form>
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"4"}
          stepBack={"/stepper3"}
          stepNext={"/stepper/paso5"}
        />
      </section>
    </StepperLayout>
  );
}
