import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import RepertoryCard from "@/components/RepertoryCard";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import { useForm } from "react-hook-form";
import { useState } from "react";
import dataMusician from "@/objects/musicianObject.json";
import RequestCard from "@/components/RequestCard";

//console.log(dataMusician.users.repertory);
const repertory = dataMusician.users.repertory;
//console.log(repertory);

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Requerimientos() {
  const [requests, setRequests] = useState([]);
  const [text, setText] = useState("");
  const onInputChange = (event) => {
    setText(event.target.value);
  };

  //console.log(requests);

  const addRequest = () => {
    if (text.trim().length > 0) {
      setRequests([text, ...requests]);
      setText("");
    } else {
      alert("Ingresa un texto");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <MenuMobileMusician page="requerimientos" role="musico" />
      <main className="max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="requerimientos" />
        <section className=" w-[90%] flex flex-col items-center gap-11 sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:ml-11 lg:w-full  lg:items-start ">
          <div className=" flex flex-col items-center mt-10 gap-2 lg:items-start lg:mt-0">
            <h1
              className={`${josefine.className} text-black text-xl font-semibold  sm:text-[28px] lg:mt-[4.5rem] `}
            >
              Requerimientos
            </h1>
            <p
              className={`${lato.className} text-lg text-[#37474F] w-[328px] lg:w-[90%]`}
            >
              Esta información servirá para que el cliente este enterado si
              requieres de algunas condiciones especiales para tu presentación
              (acondicionamiento del lugar, etc ). Puedes agregar máximo 5
              requerimientos.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-5 lg:flex-row lg:w-full"
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
              className=" w-[328px] h-[50px] rounded-none lg:w-[80%]"
            />
            <ButtonPink
              width="w-[328px] lg:w-[10%]"
              text="Agregar"
              onClick={addRequest}
              // type="submit"
            />
          </form>
          <article className=" flex flex-col gap-4 w-[90%] lg:w-[80%] lg:flex-row lg:flex-wrap ">
            {requests.map((request, index) => {
              return (
                <RequestCard
                  key={index}
                  text={request}
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
          </article>
        </section>
      </main>
    </>
  );
}