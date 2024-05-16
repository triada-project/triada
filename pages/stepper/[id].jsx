import Image from "next/image";
import { Lato, Josefin_Sans } from "next/font/google";
import UpdateCardPicture from "@/components/UpdateCardPicture";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import FooterMain from "@/components/footer/footer";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Stepper() {
  const router = useRouter();
  const userId = router.query.id;
  const [userData, setUserData] = useState(null);

  console.log(userId);

  useEffect(() => {
    if (userId) {
      // Realiza la solicitud fetch para obtener los datos del usuario
      fetch(`http://localhost:3500/users/${userId}`)
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
  }, [userId]); // Ejecuta el efecto solo cuando cambia userId

  // ... resto de tu componente

  if (!userData) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Carga una imagen de perfil
        </h2>
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Esta será la imagen principal que se mostrará al público
        </p>
        <UpdateCardPicture />
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"1"}
          stepBack={"/stepper"}
          stepNext={"/stepper/paso2"}
        />
      </section>
    </StepperLayout>
  );
}
