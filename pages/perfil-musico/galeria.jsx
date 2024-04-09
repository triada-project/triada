import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilMusico() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <MenuMobileMusician page="galeria" role="musico" />
      <main className="max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="galeria" />
        <section className=" w-[90%] flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:ml-11 lg:ml-[72px] lg:items-start ">
          <h1
            className={`${josefine.className} text-black text-xl font-semibold my-10 sm:text-[28px] lg:mt-[4.5rem] `}
          >
            Galería
          </h1>
          <p className={`${lato} text-[#455A64]`}>
            Sube fotos y videos de tus presentaciones para que el público
            conozca tu trabajo.
          </p>

          <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
            Videos
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-2 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="URL del video"
              {...register("URL")}
              className=""
            />
          </form>
        </section>
      </main>
    </>
  );
}
