import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import { useForm } from "react-hook-form";
import { useState } from "react";
import RequestCard from "@/components/RequestCard";
import { Toaster, toast } from "sonner";
import useTokenStore from "@/stores/tokenStore";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Requerimientos() {
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
    if (tokenObject) {
      // Verifica si tokenObject es válido
      fetchRequests();
    }
  }, [tokenObject]);

  useEffect(() => {
    localStorage.setItem("storedRequests", JSON.stringify(requests));
  }, [requests]);

  const fetchRequests = async () => {
    //if (!tokenObject) return;
    console.log(tokenObject);
    try {
      const response = await fetch(
        `https://apitriada.rodolfo-ramirez.com/users/${tokenObject?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenObject?.accessToken}`,
          },
        }
      );

      const responseData = await response.json();
      console.log(responseData?.data?.requirements);

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
      console.error("Error al obtener los requerimientos:", error);
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

  const handleSaveRequests = async () => {
    if (!requests.length) return; // Manejar el escenario de solicitudes vacías

    try {
      const response = await fetch(
        `https://apitriada.rodolfo-ramirez.com/users/${tokenObject?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenObject?.accessToken}`, // Incluir encabezado de autorización
          },
          body: JSON.stringify({ requirements: requests }),
        }
      );

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
      console.error("Error al guardar las solicitudes:", error);
      toast.error("Ocurrió un error al guardar los requerimientos.");
    }
  };

  //console.log(requests);
  const updateRequest = (index, newText) => {
    const updatedRequests = [...requests];
    updatedRequests[index] = newText;
    setRequests(updatedRequests);
  };

  if (!tokenObject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  console.log(requests);

  return (
    <>
      <MenuMobileMusician page="requerimientos" role="musico" />
      <main className=" shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="requerimientos" />
        <section className=" h-full w-[90%] flex flex-col items-center gap-11 sm:col-start-2 sm:col-span-1  sm:w-[80%] sm:pl-11 lg:w-full lg:h-screen  lg:items-start ">
          <div className=" flex flex-col items-center mt-10 gap-2 w-full lg:items-start lg:mt-0 ">
            <h1
              className={`${josefine.className} text-black text-xl font-semibold  sm:text-[28px] lg:mt-[4.5rem] `}
            >
              Requerimientos
            </h1>
            <p
              className={`${lato.className} text-lg text-[#37474F] w-[328px] sm:w-full lg:w-[90%]`}
            >
              Esta información servirá para que el cliente este enterado si
              requieres de algunas condiciones especiales para tu presentación
              (acondicionamiento del lugar, etc ). Puedes agregar máximo 5
              requerimientos.
            </p>
            <div>
              <Toaster richColors closeButton />
              {/* <button onClick={() => toast("My first toast")}>
                Give me a toast
              </button> */}
            </div>
          </div>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col items-center gap-5 sm:w-full lg:flex-row lg:w-full"
          >
            <Input
              type="text"
              maxLength={100}
              onChange={onInputChange}
              value={text}
              onKeyDown={handleKeyDown}
              label="Escribe aquí el requerimiento"
              description="Límite 100 carateres por requerimiento."
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className=" w-[328px] h-[50px] rounded-none sm:w-full lg:w-[80%]"
            />
            <ButtonPink
              width="w-[328px] sm:w-full lg:w-[10%]"
              text="Agregar"
              onClick={addRequest}
              // type="submit"
            />
          </form>
          <article className=" pb-11 flex flex-col gap-4 w-[90%] lg:w-[80%] lg:flex-row lg:flex-wrap ">
            {requests.map((request, index) => {
              return (
                <RequestCard
                  key={index}
                  text={request}
                  onUpdate={(newText) => updateRequest(index, newText)}
                  onDelete={() => onDelete(index)}
                  page={"requerimientos"}
                />
              );
            })}
            {/* {repertory.map((song) => (
              <RepertoryCard
                key={song.author}
                song={song.title}
                author={song.author}
                page={"repertory"}
              />
            ))} */}
            {/* <RepertoryCard /> */}
            {/* <button onClick={handleSaveRequests}>Guardar Requerimientos</button> */}
            <ButtonPink
              width="w-full "
              mtop="mt-4"
              text="Guardar Requerimientos"
              onClick={handleSaveRequests}
            />
          </article>
        </section>
      </main>
    </>
  );
}
