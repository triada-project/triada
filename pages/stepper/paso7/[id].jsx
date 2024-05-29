import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step5() {
  const router = useRouter();
  const userId = router.query.id;
  const [route, setRoute] = useState();
  const tokenObject = useTokenStore((state) => state.tokenObject);
  const [accountCreatePending, setAccountCreatePending] = useState(false);
  const [accountLinkCreatePending, setAccountLinkCreatePending] =
    useState(false);
  const [error, setError] = useState(false);
  const [connectedAccountId, setConnectedAccountId] = useState();

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

  const handleCreateAccountStripe = async () => {
    setAccountCreatePending(true);
    setError(false);
    fetch("http://localhost:4000/account", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        setAccountCreatePending(false);

        const { account, error } = json;

        if (account) {
          setConnectedAccountId(account);
          setAccountLinkCreatePending(true);
          setError(false);
          fetch("http://localhost:4000/account_link", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              account: account,
            }),
          })
            .then((response) => response.json())
            .then((json) => {
              setAccountLinkCreatePending(false);

              const { url, error } = json;
              if (url) {
                window.location.href = url;
              }

              if (error) {
                setError(true);
              }
            });

          fetch(`http://localhost:4000/users/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id_stripe: account,
            }),
          });
        }

        if (error) {
          setError(true);
        }
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
          className={`${lato.className} text-center text-xl text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Para gestionar los pagos de los eventos que te contraten, te
          redirigiremos a <b>Stripe</b> , una plataforma segura de pagos en
          línea. Crear tu cuenta en Stripe será rápido y sencillo
        </p>
        <Image
          src={"/assets/images/payment-information.webp"}
          width={300}
          height={300}
          className=" sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        />
        {error && <p className="  text-xl text-[#455A64]">Algo salió mal!</p>}
        {(connectedAccountId ||
          accountCreatePending ||
          accountLinkCreatePending) && (
          <div className="dev-callout">
            {connectedAccountId && (
              <Spinner
                label="En un momento te redirigiremos a Stripe para la creación de tu
              cuenta."
                color="secondary"
                labelColor="secondary"
              />
            )}
            {accountCreatePending && (
              <Spinner
                label="En un momento te redirigiremos a Stripe para la creación de tu
            cuenta."
                color="secondary"
                labelColor="secondary"
              />
            )}
            {/* {accountLinkCreatePending && (
              <p>Creando un nuevo enlace de cuenta...</p>
            )} */}
          </div>
        )}
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"7"}
          stepBack={`/stepper/paso6/${userId}`}
          // stepNext={"/stepper/finalizar"}
          onClick={handleCreateAccountStripe}
        />
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-5">
            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3`}
            >
              ¿Cúales son tus honorarios por hora evento?
            </p>
            <Input
              type="number"
              label="Ingresa aquí tus honorarios"
              isRequired
              placeholder="0.00"
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] lg:w-full`}
              {...register("song", { required: true })}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuántas horas máximo te pueden agendar por evento?
            </p>
            <Input
              type="number"
              label="Ingresa aquí las horas"
              isRequired
              placeholder="0"
              min={1}
              max={24}
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] lg:w-full`}
              {...register("song", { required: true })}
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Tienes requerimientos especiales para tu presentación? Dinos
              cuáles son (máximo 5):
            </p>
            <Input
              label="Escribe aquí el requerimiento"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] mb-7 lg:w-full`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("song", { required: true })}
            />
            <ButtonPink
              width="w-full"
              text="Agregar requerimiento"
              type="submit"
            />
            
          </div>
        </form> */}
      </section>
    </StepperLayout>
  );
}
