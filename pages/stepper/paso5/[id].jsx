import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import RequestCard from "@/components/RequestCard";
import { Toaster, toast } from "sonner";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";
const urlApi = process.env.NEXT_PUBLIC_API_URL;

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
  const [requests, setRequests] = useState(() => {
    if (typeof window !== "undefined") {
      // Retrieve requests from localStorage (if available)
      const storedRequests = localStorage.getItem("storedRequests");
      try {
        return storedRequests ? JSON.parse(storedRequests) : [];
      } catch (error) {
        console.error("Error parsing stored requests:", error);
        return [];
      }
    } else {
      // Handle server-side rendering (optional)
      return [];
    }
  });
  const [text, setText] = useState("");
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
  useEffect(() => {
    if (userId) {
      // Verifica si tokenObject es válido
      fetchRequests();
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("storedRequests", JSON.stringify(requests));
  }, [requests]);

  const fetchRequests = async () => {
    //if (!tokenObject) return;
    //console.log(tokenObject);
    try {
      const response = await fetch(`${urlApi}/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${tokenObject?.accessToken}`,
        },
      });

      const responseData = await response.json();
      //console.log(responseData?.data?.requirements);

      if (response.status === 200 || 201) {
        setRequests(responseData?.data?.requirements || []);
        // Optional: Display success message
      } else {
        toast.error("Ocurrió un error al obtener los requerimientos.");
        console.error(
          "Error en la respuesta de la API:",
          responseData.message || response.statusText
        );
      }
    } catch (error) {
      //console.error("Error al obtener los requerimientos:", error);
      toast.error("Ocurrió un error al obtener los requerimientos.");
    }
  };

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  const addRequest = () => {
    if (text.trim().length > 0 && requests.length < 5) {
      setRequests([text, ...requests]);
      setText("");
    } else if (requests.length >= 5) {
      toast.warning("Ya has alcanzado el límite de 5 requerimientos.");
    } else {
      toast.warning("Ingresa un texto.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addRequest();
    }
  };

  const onDelete = (index) => {
    const newRequests = [...requests];
    newRequests.splice(index, 1);
    setRequests(newRequests);
  };

  //console.log(requests);
  const updateRequest = (index, newText) => {
    const updatedRequests = [...requests];
    updatedRequests[index] = newText;
    setRequests(updatedRequests);
  };

  const onSubmit = async (data) => {
    // e.preventDefault();
    if (!requests.length) {
      toast.warning("Agrega al meno 1 requerimiento");
      return;
    }
    setRoute(router.push(`/stepper/paso6/${userId}`));
    //console.log(data);
    try {
      const response = await fetch(`${urlApi}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventFee: data.eventFee,
          maximumHoursEvent: data.maximumHoursEvent,
          requirements: requests,
        }),
      });
      const responseData = await response.json();
      if (response.status === 201) {
        toast.success("¡Requerimientos guardados con éxito!");
        // Opcional: Borrar las solicitudes después de guardarlas correctamente
      } else {
        toast.error("Ocurrió un error al guardar los requerimientos.");
        console.error(
          "Error en la respuesta de la API:",
          responseData.message || response.statusText
        );
      }
    } catch (error) {
      //console.error("Error al guardar las solicitudes:", error);
      toast.error("Ocurrió un error al guardar los requerimientos.");
    }
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
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Datos de contratación y pago
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Toaster richColors closeButton />
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
              {...register("eventFee", { required: true })}
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
              {...register("maximumHoursEvent", { required: true })}
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Tienes requerimientos especiales para tu presentación? Dinos
              cuáles son (máximo 5):
            </p>
            <Input
              type="text"
              maxLength={100}
              onChange={onInputChange}
              value={text}
              onKeyDown={handleKeyDown}
              label="Escribe aquí el requerimiento"
              description="Límite 100 carateres por requerimiento."
              // isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] mb-7 lg:w-full`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              // {...register("request", { required: true })}
            />

            {/* <button onClick={addRequest}>Agregar</button> */}

            <ButtonPink
              onClick={addRequest}
              width="w-full"
              text="Agregar requerimiento"
              // type="submit"
            />
            {requests.map((request, index) => {
              return (
                <RequestCard
                  key={index}
                  text={request}
                  onUpdate={(newText) => updateRequest(index, newText)}
                  onDelete={() => onDelete(index)}
                />
              );
            })}
            {/* <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard /> */}
            <ButtonsStepper
              mTop={"mt-[60px]"}
              step={"5"}
              stepBack={`/stepper/paso4/${userId}`}
              stepNext={`/stepper/paso6/${userId}`}
            />
          </div>
        </form>
      </section>
    </StepperLayout>
  );
}
