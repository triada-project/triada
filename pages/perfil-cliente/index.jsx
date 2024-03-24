import AsideCliente from "../../components/perfil-cliente/AsideCliente.jsx";
import MenuMobileClient from "../../components/perfil-cliente/MenuMobileClient.jsx";
import UpdateCardPicture from "../../components/UpdateCardPicture.jsx";
import InformacionForm from "@/components/perfil-cliente/InformacionForm.jsx";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilCliente() {
  return (
    <>
      <MenuMobileClient />
      <main className="flex flex-col items-center">
        <AsideCliente />
        <h1
          className={`${josefine.className} text-black text-xl font-semibold mt-10`}
        >
          Mi Perfil
        </h1>
        <UpdateCardPicture />
        <InformacionForm />
      </main>
    </>
  );
}
