import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import UpdateCardPicture from "../../components/UpdateCardPicture.jsx";
import InfoFormMusico from "@/components/profile-musician/InfoFormMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilMusico() {
  return (
    <>
      <MenuMobileMusician page="perfil" role="musico" />
      <main className=" bg-white max-w-[1440px] flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]  ">
        <AsideMusico page="perfil" />
        <section className=" flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen lg:flex-row lg:gap-7 lg:items-start ">
          <div className=" flex flex-col items-center lg:items-start lg:ml-[4.5rem]">
            <h1
              className={`${josefine.className}  text-black text-xl font-semibold mt-10 sm:text-[28px] lg:mt-[4.5rem] `}
            >
              Mi Perfil
            </h1>
            <UpdateCardPicture />
          </div>
          <InfoFormMusico />
        </section>
      </main>
    </>
  );
}
