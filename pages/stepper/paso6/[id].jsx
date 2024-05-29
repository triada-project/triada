import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm, Controller } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import LocalidadSelect from "@/components/SelectsLocation/LocalidadSelect";
import EstadoSelect from "@/components/SelectsLocation/EstadoSelect";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";
import AvailabilityStepper from "@/components/AvailabilityStepper";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step2() {
  const router = useRouter();
  const userId = router.query.id;
  const [route, setRoute] = useState();
  const tokenObject = useTokenStore((state) => state.tokenObject);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      state: "",
      city: "",
    },
  });

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

  const onSubmit = (data) => {
    // e.preventDefault();
    setRoute(router.push(`/stepper/paso7/${userId}`));
    console.log(data);
    const response = fetch(`http://3.145.7.153/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: data.city,
        state: data.state,
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

  //console.log(errors);

  //const onSubmit = (data) => console.log(data);
  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          ¿Cual es tu disponibilidad?
        </h2>
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Selecciona tus horarios de trabajo para que los clientes puedan verlos
          y puedar resevar dentro de los días y horarios que manejas.{" "}
          <b>*Horario formato 24 hrs.</b>
        </p>

        <AvailabilityStepper data={userId} />

        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"6"}
          stepBack={`/stepper/paso5/${userId}`}
          stepNext={`/stepper/paso7/${userId}`}
        />
      </section>
    </StepperLayout>
  );
}
