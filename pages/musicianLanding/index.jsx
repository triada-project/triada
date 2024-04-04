import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { Avatar, AvatarIcon, Chip } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import NavBar from "@/components/Navbar";
import dataMusician from "../../objects/musicianObject.json";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";
import check from "../../public/assets/svg/check.svg";
import Image from "next/image";
import CalendarUI from "../../components/musicianLanding/CalendarUI";
import CarouselVideos from "../..//components/musicianLanding/CarouselVideos";
import CarouselFotos from "../../components/musicianLanding/CarouselFotos";
import HoursForm from "../../components/musicianLanding/HoursForm";
import EventForm from "../../components/musicianLanding/EventForm";
import AsideLeft from "@/components/musicianLanding/AsideLeft";
import MainFooter from "../../components/mainFooter/MainFooter";

const josefin = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function musicianDetail() {
  const { users } = dataMusician;
  console.log(users.musicalGenere);

  const musicalGeneres = users.musicalGenere;
  const eventType = users.eventType;

  return (
    <>
      <NavBar />
      {
        //<div className="p-5  bg-purple-700">
      }
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-12 grid-flow-col text-white text-center sm:text-left bg-yellow-700">
        <div className="p-5 col-start-1 flex justify-center">
          <Avatar
            src={users.profilePicture[0].url}
            alt="profile picture"
            className="w-80 h-60 rounded-lg shadow-xl  "
          />
        </div>

        <main className="col-start-1 sm:col-start-2 sm:col-span-4 row-span-12  p-5 bg-red-700">
          <div className="">
            <h1 className="{`${josefin.classname} text-black text-3xl font-semibold sm:mt-0 sm:text-[28px]">
              {users.name}
            </h1>
            <h3 className="text-[455A64]">
              {users.location[0].city}, {users.location[0].state}
            </h3>
            <div className="flex items-centerflex items-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={users.ranking}
                readOnly
              />
              <div className="ml-2">{users.ranking}</div>
            </div>
            <div className="gap gap-1 flex flex-nowrap">
              {musicalGeneres.map((nombre, index) => (
                // Usamos map para iterar sobre la lista de nombres y renderizar cada uno como un elemento <li>
                <Chip
                  classNames={{
                    base: "bg-[#081540] h-[32px] mt-2",
                    content: "text-[#29FEFD] ",
                  }}
                >
                  {nombre}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Descripción
            </h2>
            <p className="{`${josefin.classname} text-[#455A64]">
              {users.description}
            </p>
          </div>
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Eventos en los que toca
            </h2>
            <div className="gap gap-1 flex flex-nowrap">
              {eventType.map((nombre, index) => (
                // Usamos map para iterar sobre la lista de nombres y renderizar cada uno como un elemento <li>
                <Chip
                  classNames={{
                    base: "bg-[#081540] h-[32px] mt-2",
                    content: "text-[#29FEFD] ",
                  }}
                >
                  {nombre}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Videos
            </h2>
            <div>
              <CarouselVideos />
            </div>
          </div>
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Fotos
            </h2>
            <div>
              <CarouselFotos />
            </div>
          </div>
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Requerimientos
            </h2>
            <div>
              <ul>
                <div className="flex items-center">
                  <Image src={check} alt="check" width={20} height={20} />
                  <li className="ml-2">Piano de 88 teclas afinado</li>
                </div>
                <div className="flex items-center">
                  <Image src={check} alt="check" width={20} height={20} />
                  <li className="ml-2">Camerino con iluminación y espejo</li>
                </div>
                <div className="flex items-center">
                  <Image src={check} alt="check" width={20} height={20} />
                  <li className="ml-2">Catering ligero</li>
                </div>
                <div className="flex items-center">
                  <Image src={check} alt="check" width={20} height={20} />
                  <li className="ml-2">Agua</li>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                Tiempo máximo de concierto
              </h2>
              <Chip
                classNames={{
                  base: "bg-[#081540] h-[32px] mt-2",
                  content: "text-[#29FEFD]",
                }}
              >
                {users.maxHours} horas
              </Chip>
            </div>
            <div>
              <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                Costo por hora
              </h2>
              <Chip
                classNames={{
                  base: "bg-[#081540] h-[32px] mt-2",
                  content: "text-[#29FEFD]",
                }}
              >
                {users.eventFee}
              </Chip>
            </div>
          </div>
          <div className="border-2 rounded-lg p-5 mt-10">
            <h1 className="{`${roboto.classname} text-[#312971] text-2xl text-center font-bold sm:text-[30px]">
              Inicia la reservación para tu evento aquí
            </h1>
            <div>
              <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                Elige una fecha
              </h2>
              <div className="border-2 rounded-lg mt-5">
                {
                  //<CalendarUI />
                }
              </div>
              <div>
                <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                  Elige el horario
                </h2>
                <div className="border border-blue-700 bg-blue-100 rounded-md mt-2 flex ">
                  <div>
                    <Image
                      src={info_FILL1}
                      alt="info"
                      width={20}
                      height={20}
                      className="ml-2 mt-2 mr-5"
                    />
                  </div>
                  <div>
                    <p className="text-blue-700 flex-auto text-center p-2">
                      Disponible Jueves de 16:00 a 22:00 Viernes de 16:00 a
                      22:00 Sábado de 16:00 a 22:00
                    </p>
                  </div>
                </div>
                <div>
                  <HoursForm />
                </div>
                <div className="flex items-center mt-5">
                  <p>Horas contratadas</p>
                  <p className="ml-5">00</p>
                </div>
                <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                  Detalles del evento
                </h2>
                <div>
                  <EventForm />
                </div>
                <div className="border border-blue-700 bg-blue-100 rounded-md mt-5 flex">
                  <div>
                    <Image
                      src={info_FILL1}
                      alt="info"
                      width={20}
                      height={20}
                      className="ml-2 mt-2 mr-5"
                    />
                  </div>
                  <div>
                    <p className="text-blue-700 flex-auto text-center p-2">
                      Al terminar tu proceso de compra tu dinero estará
                      protegido sin cobrarse, si el artista acepta tu
                      reservación se cobrará el día del evento mediante un
                      código que te haremos llegar. Si el artista rechaza la
                      reservación, se te devolverá integro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="col-start-1 p-5 sm:row-start-2 sm:row-span-12 bg-green-700">
          <AsideLeft />
        </div>
      </div>
      <div>
        <MainFooter />
      </div>
      {
        //</div>
      }
    </>
  );
}
