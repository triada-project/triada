import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import RepertoryCard from "@/components/RepertoryCard";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import { useForm } from "react-hook-form";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Repertorio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <MenuMobileMusician page="repertorio" role="musico" />
      <main className="max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="repertorio" />
        <section className=" w-[90%] flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:ml-11 lg:ml-[72px] lg:items-start ">
          <div className=" flex flex-col items-center mt-10 gap-2">
            <h1
              className={`${josefine.className} text-black text-xl font-semibold  sm:text-[28px] lg:mt-[4.5rem] `}
            >
              Repertorio
            </h1>
            <p className={`${lato.className} text-lg text-[#37474F] w-[328px]`}>
              Esta información servirá para dar una muestra de las canciones que
              interpretas a las personas que buscan contratarte.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-11 flex flex-col gap-5"
          >
            <Input
              className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
              isRequired
              variant="bordered"
              radius="sm"
              label="Nombre de la canción"
              {...register("song")}
            />
            <Input
              className=" w-[328px] h-14 rounded-none lg:w-[30rem]"
              isRequired
              variant="bordered"
              radius="sm"
              label="Nombre del artista original"
              {...register("artist")}
            />
            <ButtonPink
              width="w-[328px] lg:w-[30rem]"
              text="Agregar"
              type="submit"
            />
          </form>

          <RepertoryCard />
        </section>
      </main>
    </>
  );
}
