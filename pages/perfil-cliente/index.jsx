import AsideCliente from "../../components/perfil-cliente/AsideCliente.jsx";
import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import UpdateCardPicture from "../../components/UpdateCardPicture.jsx";
import InformacionForm from "@/components/perfil-cliente/InformacionForm.jsx";
import NewPasswordForm from "../../components/NewPasswordForm.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import useTokenStore from "@/stores/tokenStore";
import NewUpdateCard from "@/components/NewUpdatedCard.jsx";
import { Spinner } from "@nextui-org/react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilCliente() {
  const [userData, setUserData] = useState(null);
  const tokenObject = useTokenStore((state) => state.tokenObject);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://apitriada.rodolfo-ramirez.com/users/${tokenObject?._id}`
        );
        const data = await response.json();
        setUserData(data); // Almacena los datos del usuario
        setSelectedState(data.data.state);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Manejo de errores
      }
    };

    if (tokenObject) {
      fetchData();
    }
  }, [tokenObject]);

  console.log(userData);

  if (!tokenObject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <>
      <MenuMobileMusician role="client" page="perfil" />
      <main className=" 	shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50  bg-white max-w-[1440px] flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)] overflow-y-auto  ">
        <AsideCliente page="perfil" />
        <section className="  flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen lg:flex-row lg:gap-7 lg:items-start ">
          <div className=" flex flex-col items-center lg:items-start lg:ml-[4.5rem]">
            <h1
              className={`${josefine.className}  text-black text-xl font-semibold mt-10 sm:text-[28px] lg:mt-[4.5rem] `}
            >
              Mi Perfil
            </h1>
            <UpdateCardPicture userData={userData} />
          </div>
          <div className=" flex flex-col gap-8">
            <InformacionForm />
            <NewPasswordForm />
          </div>
        </section>
      </main>
    </>
  );
}
