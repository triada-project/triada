import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import Availability from "@/components/Availability";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import useTokenStore from "@/stores/tokenStore";
import Image from "next/image";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilMusico() {
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
      fetch(`http://localhost:4000/users/${tokenObject._id}`)
        .then((response) => response.json())
        .then((data) => {
          // Almacena los datos del usuario en el estado local
          setUserData(data.data);
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
      <MenuMobileMusician page="disponibilidad" role="musico" />
      <main className="overflow-y-auto shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] bg-white flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="disponibilidad" />
        <section className="w-[90%] flex flex-col items-center sm:col-start-2 sm:col-span-1 h-screen sm:w-[80%] sm:ml-11 lg:ml-[72px] lg:items-start">
          <h1
            className={`${josefine.className} text-black text-xl font-semibold my-10 sm:text-[28px] lg:mt-[4.5rem]`}
          >
            Disponibilidad
          </h1>
          <p className={`${lato.className} text-[#455A64]`}>
            Selecciona tus horarios de trabajo para que los clientes puedan
            verlos y puedar resevar dentro de los días y horarios que manejas.
          </p>
          <div className="border border-blue-700 bg-blue-100 rounded-md mt-5 flex w-full mb-8 lg:mb-0 sm:flex-wrap">
            <div>
              <Image
                src={info_FILL1}
                alt="info"
                width={20}
                height={20}
                className="ml-2 mt-2 mr-5"
              />
            </div>
            <div className="flex flex-col item-center lg:flex-row  ">
              <p className="text-blue-700 flex-auto text-center p-2">
                Horarios guardados:
              </p>
              {userData.availability.map((slot) => (
                <p
                  className="text-blue-700 flex-auto text-center p-2"
                  key={slot.day}
                >
                  {slot.day}: {slot.start} - {slot.end}
                </p>
              ))}
            </div>
          </div>
          <Availability data={tokenObject} />
        </section>
      </main>
    </>
  );
}
