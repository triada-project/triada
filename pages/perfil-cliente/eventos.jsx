import AsideCliente from "../../components/perfil-cliente/AsideCliente.jsx";
import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import EventsTable from "@/components/table-eventos/EventsTable.jsx";
import useTokenStore from "@/stores/tokenStore";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
const urlApi = process.env.NEXT_PUBLIC_API_URL;

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilCliente() {
  const tokenObject = useTokenStore((state) => state.tokenObject);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        tokenFromLocalStorage.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      useTokenStore.setState({ tokenObject: payloadObject });
    }
    setIsLoading(false); // Esto asegura que el token haya sido establecido antes de continuar
  }, []);

  useEffect(() => {
    if (tokenObject?._id) {
      // Realiza la solicitud fetch para obtener los datos del usuario
      fetch(`${urlApi}/users/${tokenObject._id}`)
        .then((response) => response.json())
        .then((data) => {
          // Almacena los datos del usuario en el estado local
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // Maneja el error si la solicitud falla
        });
    }
  }, [tokenObject?._id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  if (!userData) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <>
      <MenuMobileMusician role="client" page="eventos" />
      <main className=" shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50  max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideCliente page="eventos" userData={userData} />
        <section className=" w-[90%] flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:ml-11 lg:ml-[72px] lg:items-start ">
          <h1
            className={`${josefine.className} text-black text-xl font-semibold my-10 sm:text-[28px] lg:mt-[4.5rem] `}
          >
            Todos tus eventos
          </h1>
          {!tokenObject ? (
            <div className="flex justify-center items-center h-screen">
              <Spinner
                label="Cargando..."
                color="secondary"
                labelColor="secondary"
              />
            </div>
          ) : (
            <EventsTable />
          )}
        </section>
      </main>
    </>
  );
}
