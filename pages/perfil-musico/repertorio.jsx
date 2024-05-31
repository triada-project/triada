import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import RepertoryCard from "@/components/RepertoryCard";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import useTokenStore from "@/stores/tokenStore";
import { Spinner } from "@nextui-org/react";

//console.log(dataMusician.users.repertory);
//const repertory = dataMusician.users.repertory;
//console.log(repertory);

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Repertorio() {
  const [repertoire, setRepertoire] = useState(() => {
    if (typeof window !== "undefined") {
      const storedRepertoire = localStorage.getItem("storedRepertoire");
      try {
        return storedRepertoire ? JSON.parse(storedRepertoire) : [];
      } catch (error) {
        console.error("Error parsing stored repertoire:", error);
        return [];
      }
    } else {
      return []; // Handle server-side rendering (optional)
    }
  });
  const [text, setText] = useState(""); // Input for song title
  const [artist, setArtist] = useState(""); // Input for artist name

  const tokenObject = useTokenStore((state) => state.tokenObject);

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        tokenFromLocalStorage.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      useTokenStore.setState({ tokenObject: payloadObject });
      //fetchRequests();
    }
  }, []);

  useEffect(() => {
    if (tokenObject) {
      // Verifica si tokenObject es válido
      fetchRepertorie();
    }
  }, [tokenObject]);

  const fetchRepertorie = async () => {
    console.log(tokenObject);
    const response = await fetch(
      `https://apitriada.rodolfo-ramirez.com/users/${tokenObject?._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenObject?.accessToken}`,
        },
      }
    );

    const responseData = await response.json();
    console.log(responseData?.data?.repertory);

    if (response.status === 200 || 201) {
      setRepertoire(responseData?.data?.repertory || []);
    } else {
      console.log(responseData);
      toast.error("Error al cargar el repertorio");
    }
  };

  const onInputChangeText = (text) => {
    setText(text.target.value);
  };

  const onInputChangeArtist = (artist) => {
    setArtist(artist.target.value);
  };

  useEffect(() => {
    localStorage.setItem("storedRepertoire", JSON.stringify(repertoire));
  }, [repertoire]);

  const addSong = () => {
    const trimmedText = text.trim();
    const trimmedArtist = artist.trim();
    if (trimmedText !== "" && trimmedArtist !== "") {
      // Verificar cadenas no vacías
      setRepertoire([
        ...repertoire,
        { title: trimmedText, artist: trimmedArtist },
      ]);
      setText("");
      setArtist("");
    } else {
      toast.warning("Ingresa el título y nombre del artista de la canción.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addSong();
    }
  };

  const onDelete = (index) => {
    const newRepertoire = [...repertoire];
    newRepertoire.splice(index, 1);
    setRepertoire(newRepertoire);
  };

  // const onEdit = (index, newSong) => {
  //   const updatedRepertoire = [...repertoire];
  //   updatedRepertoire[index] = newSong;
  //   setRepertoire(updatedRepertoire);
  // };

  const onEdit = (index, newSong) => {
    setRepertoire((prevRepertoire) => {
      const updatedRepertoire = [...prevRepertoire];
      updatedRepertoire[index] = newSong;
      return updatedRepertoire;
    });
  };

  const handleSaveRepertoire = async () => {
    if (!repertoire.length) return;
    try {
      const response = await fetch(
        `https://apitriada.rodolfo-ramirez.com/users/${tokenObject?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenObject?.accessToken}`, // Incluir encabezado de autorización
          },
          body: JSON.stringify({ repertory: repertoire }),
        }
      );
      const responseData = await response.json();

      if (response.status === 201) {
        toast.success("¡Repertorio guardado con éxito!");
        // Opcional: Borrar las solicitudes después de guardarlas correctamente
      } else {
        toast.error("Ocurrió un error al guardar el repertorio.");
        console.error(
          "Error en la respuesta de la API:",
          responseData.message || response.statusText
        );
      }
    } catch (error) {
      console.error("Error saving repertoire:", error);
      toast.error("Ocurrió un error al guardar el repertorio.");
    }
  };

  console.log(repertoire);

  if (!tokenObject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <>
      <MenuMobileMusician page="repertorio" role="musico" />
      <main className=" overflow-y-auto shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="repertorio" />
        <section className=" w-[90%] flex flex-col items-center gap-11 sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:pl-11 lg:w-full  lg:items-start ">
          <div className=" flex flex-col items-center mt-10 gap-2 lg:items-start lg:mt-0">
            <h1
              className={`${josefine.className} text-black text-xl font-semibold  sm:text-[28px] lg:mt-[4.5rem] `}
            >
              Repertorio
            </h1>
            <p
              className={`${lato.className} text-lg text-[#37474F] w-[328px] lg:w-[100%]`}
            >
              Esta información servirá para dar una muestra de las canciones que
              interpretas a las personas que buscan contratarte.
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
            className=" flex flex-col gap-5 lg:flex-row lg:w-full"
          >
            <Input
              className=" w-[328px] h-14 rounded-none lg:w-[40%]"
              isRequired
              variant="bordered"
              onChange={onInputChangeText}
              radius="sm"
              onKeyDown={handleKeyDown}
              label="Nombre de la canción"
              // {...register("song")}
            />
            <Input
              className=" w-[328px] h-14 rounded-none lg:w-[40%]"
              isRequired
              variant="bordered"
              onChange={onInputChangeArtist}
              radius="sm"
              onKeyDown={handleKeyDown}
              label="Nombre del artista original"
              // {...register("artist")}
            />
            <ButtonPink
              width="w-[328px] lg:w-[10%]"
              text="Agregar"
              onClick={addSong}
            />
          </form>
          <article className=" flex flex-col gap-7 lg:w-full lg:flex-row lg:flex-wrap lg:gap-[73px] pb-11">
            {repertoire.map((repertory, index) => (
              <RepertoryCard
                key={index}
                song={repertory.title}
                author={repertory.artist}
                onEdit={(newSong) => onEdit(index, newSong)}
                onDelete={() => onDelete(index)}
                page={"repertory"}
              />
            ))}
            {/* <RepertoryCard /> */}
            <ButtonPink
              width="w-full lg:w-[95%] "
              mtop="mt-4"
              text="Guardar repertorio"
              onClick={handleSaveRepertoire}
            />
          </article>
        </section>
      </main>
    </>
  );
}
