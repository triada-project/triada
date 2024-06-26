import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import RepertoryCard from "@/components/RepertoryCard";
import { Spinner } from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";
const urlApi = process.env.NEXT_PUBLIC_API_URL;

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step4() {
  const router = useRouter();
  const userId = router.query.id;
  const [route, setRoute] = useState();
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
    if (userId) {
      // Verifica si tokenObject es válido
      fetchRepertorie();
    }
  }, [userId]);

  const fetchRepertorie = async () => {
    //console.log(tokenObject);
    const response = await fetch(`${urlApi}/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${tokenObject?.accessToken}`,
      },
    });

    const responseData = await response.json();
    //console.log(responseData?.data?.repertory);

    if (response.status === 200 || response.status === 201) {
      setRepertoire(responseData?.data?.repertory || []);
    } else {
      //console.log(responseData);
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

  const addSong = (event) => {
    const trimmedText = text.trim();
    const trimmedArtist = artist.trim();
    if (
      trimmedText.length > 0 &&
      trimmedArtist.length > 0 &&
      repertoire.length < 10
    ) {
      // Verificar cadenas no vacías
      setRepertoire([
        { title: trimmedText, artist: trimmedArtist },
        ...repertoire,
      ]);
      setText("");
      setArtist("");
    } else if (repertoire.length >= 10) {
      toast.warning("Ya has alcanzado el límite de 10 canciones");
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

  const onEdit = (index, newSong) => {
    setRepertoire((prevRepertoire) => {
      const updatedRepertoire = [...prevRepertoire];
      updatedRepertoire[index] = newSong;
      return updatedRepertoire;
    });
  };

  const handleSaveRepertoire = async () => {
    // setRoute(router.push("/stepper/paso5"));
    if (!repertoire.length) {
      toast.warning("Agrega al meno 1 canción");
      return;
    }

    try {
      const response = await fetch(`${urlApi}/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${tokenObject?.accessToken}`, // Incluir encabezado de autorización
        },
        body: JSON.stringify({ repertory: repertoire }),
      });
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
      //console.error("Error saving repertoire:", error);
      toast.error("Ocurrió un error al guardar el repertorio.");
    }
  };

  //console.log(repertoire);

  if (!userId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[500px] lg:w-[690px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Temas más representativos de tu repertorio
        </h2>
        <Toaster richColors closeButton />
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Esta información servirá para dar una muestra de las canciones que
          interpretas a las personas que buscan contratarte.
          <b>Agrega máximo 10</b> , podrás agregar más en tu perfil.
        </p>
        <section className="w-[330px] md:w-[500px] lg:w-[690px]">
          <form className=" flex flex-col items-center mt-8 w-full ">
            <Input
              label="Nombre de la canción"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[500px] mb-7 lg:w-full`}
              onChange={onInputChangeText}
              onKeyDown={handleKeyDown}
              value={text}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
            />

            <Input
              label="Artista Original"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[500px] mb-7 lg:w-full`}
              onChange={onInputChangeArtist}
              onKeyDown={handleKeyDown}
              value={artist}
            />
            <ButtonPink width="w-full" text="Agregar" onClick={addSong} />
          </form>

          <article className=" flex flex-col items-center mt-10 gap-7 md:flex-row md:flex-wrap lg:w-full lg:flex-row lg:flex-wrap lg:gap-[5px]">
            {repertoire.map((repertory, index) => (
              <RepertoryCard
                key={index}
                song={repertory.title}
                author={repertory.artist}
                onEdit={(newSong) => onEdit(index, newSong)}
                onDelete={() => onDelete(index)}
              />
            ))}
            {/* <RepertoryCard /> */}
          </article>
        </section>
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"4"}
          stepBack={`/stepper/paso3/${userId}`}
          stepNext={`/stepper/paso5/${userId}`}
          onClick={handleSaveRepertoire}
        />
      </section>
    </StepperLayout>
  );
}
