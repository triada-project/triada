import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import UpdateCardPicture from "../../components/UpdateCardPicture.jsx";
import InfoFormMusico from "@/components/profile-musician/InfoFormMusico.jsx";
import NewPasswordForm from "@/components/NewPasswordForm.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import useTokenStore from "@/stores/tokenStore";
import { useEffect } from "react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilMusico() {
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        tokenFromLocalStorage.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      useTokenStore.setState({ tokenObject: payloadObject });
    }
  }, []);

  return (
    <>
      <MenuMobileMusician page="perfil" role="musico" />
      <main className=" 	shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50  bg-white max-w-[1440px] flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)] overflow-y-auto  ">
        <AsideMusico page="perfil" />
        <section className="  flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-full lg:flex-row lg:gap-7 lg:items-start ">
          <div className=" flex flex-col items-center lg:items-start lg:ml-[4.5rem]">
            <h1
              className={`${josefine.className}  text-black text-xl font-semibold pt-10 sm:text-[28px] lg:pt-[4.5rem] `}
            >
              Mi Perfil
            </h1>
            <UpdateCardPicture />
          </div>
          <div className=" flex flex-col gap-8">
            <InfoFormMusico />
            <NewPasswordForm />
          </div>
        </section>
      </main>
    </>
  );
}
