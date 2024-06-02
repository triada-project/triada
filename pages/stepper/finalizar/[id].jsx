import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import SelectGenreMusic from "@/components/SelectGenreMusic/SelectGenreMusic";
import { Input } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import SelectTypeEvents from "@/components/SelectGenreMusic/SelectTypeEvents";
import useTokenStore from "@/stores/tokenStore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Finalizar() {
  const router = useRouter();
  const [route, setRoute] = useState();
  const tokenObject = useTokenStore((state) => state.tokenObject);
  const userId = router.query.id;

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

  const handleFinalizar = () => {
    // e.preventDefault();
    setRoute(router.push("/"));
    const urlApi = process.env.NEXT_PUBLIC_API_URL;

    const response = fetch(`${urlApi}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_stripe: userId,
      }),
    });
  };

  if (!userId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] lg:w-[500px] flex flex-col items-center">
        <p
          className={`${lato.className} text-xl text-center text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          ¡Listo! Ya formas parte de <b>TRIADA</b> . Si necesitas actualizar
          estos datos, puedes hacerlo en el perfil de tu cuenta. Haz clic en
          Finalizar y te redirigiremos a la página principal, iniciar sesión
          para verificar tus datos.
        </p>
        <Image
          src={"/assets/images/music-festival.webp"}
          width={300}
          height={300}
          className=" sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        />
        <ButtonPink
          text="Finalizar"
          width="w-full"
          mtop="mt-[44px]"
          onClick={handleFinalizar}
        />
        {/* <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"7"}
          stepBack={`/stepper/finalizar/${userId}`}
          stepNext={"/perfil-musico"}
        /> */}
      </section>
    </StepperLayout>
  );
}
