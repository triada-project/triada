import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step2() {
  const router = useRouter();
  const [route, setRoute] = useState();
  const tokenObject = useTokenStore((state) => state.tokenObject);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    setRoute(router.push("/stepper/paso3"));
    console.log(data);
    const response = fetch(`http://localhost:4000/users/${tokenObject?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: data.estado,
        city: data.localidad,
      }),
    });
  };

  if (!tokenObject) {
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
          ¿Donde te encuentras?
        </h2>
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Esto nos ayudará a conectarte con personas que buscan eventos en tu
          localidad
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-11">
            <Select
              label="Estado de residencia"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] mb-7`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("estado", { required: true })}
            >
              <SelectItem key={"Nuevo León"}>Nuevo León</SelectItem>
              <SelectItem key={"CDMX"}>CDMX</SelectItem>
              <SelectItem key={"Jalisco"}>Jalisco</SelectItem>
            </Select>

            <Select
              label="Localidad"
              isRequired
              variant="bordered"
              radius="sm"
              className=" w-[328px] h-14 md:w-[404px]"
              {...register("localidad")}
            >
              <SelectItem key={"Monterrey"}>Monterrey</SelectItem>
              <SelectItem key={"Santa Catarina"}>Santa Catarina</SelectItem>
              <SelectItem key={"San Pedro"}>San Pedro</SelectItem>
            </Select>
            <ButtonsStepper
              mTop={"mt-[60px]"}
              step={"2"}
              stepBack={"/stepper"}
              stepNext={"/stepper/paso3"}
            />
          </div>
        </form>
      </section>
    </StepperLayout>
  );
}
