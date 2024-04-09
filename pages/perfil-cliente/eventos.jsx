import AsideCliente from "../../components/perfil-cliente/AsideCliente.jsx";
import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import EventsTable from "@/components/table-eventos/EventsTable.jsx";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilCliente() {
  return (
    <>
      <MenuMobileMusician role="client" page="eventos" />
      <main className=" max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideCliente page="eventos" />
        <section className=" w-[90%] flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:ml-11 lg:ml-[72px] lg:items-start ">
          <h1
            className={`${josefine.className} text-black text-xl font-semibold my-10 sm:text-[28px] lg:mt-[4.5rem] `}
          >
            Todos tus eventos
          </h1>
          <EventsTable />
        </section>
      </main>
    </>
  );
}
