import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { Avatar, AvatarIcon, Chip } from "@nextui-org/react";
import NavBar from "@/components/Navbar";
import dataMusician from "../../objects/musicianObject.json";
import check from "../../public/assets/svg/check.svg";
import Image from "next/image";
import CarouselVideos from "../..//components/musicianLanding/CarouselVideos";
import CarouselFotos from "../../components/musicianLanding/CarouselFotos";
import AsideLeft from "@/components/musicianLanding/AsideLeft";
import MainFooter from "../../components/mainFooter/MainFooter";
import Ranking from "@/components/Ranking/Ranking";
import EventForm from "@/components/musicianLanding/EventForm";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";
import FooterMain from "@/components/footer/footer";

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
      <main className=" shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] m-auto bg-white">
        <NavBar />
        <div className="lg:ml-[80px] lg:mr-[80px] ">
          <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-4 md:grid-rows-7 grid-flow-col  ">
            <div className="p-5 col-start-1 sm:col-span-2 md:col-span-1 flex justify-center ">
              <Avatar
                src={users.profilePicture[0].url}
                alt="profile picture"
                className="w-80 h-60 rounded-lg shadow-xl  "
              />
            </div>

            <main className="col-start-1 sm:col-start-3 sm:col-span-4 md:col-start-2 md:col-span-3 row-span-7  p-5 ">
              <div className="">
                <h1
                  className={`${josefin.classname} text-black text-3xl font-semibold sm:mt-0 sm:text-[28px]`}
                >
                  {users.name}
                </h1>
                <h3 className="text-[#455A64]">
                  {users.location[0].city}, {users.location[0].state}
                </h3>
                <div className="flex items-centerflex items-center">
                  <Ranking />
                </div>
                <div className="gap gap-1 flex flex-nowrap">
                  {musicalGeneres.map((nombre, index) => (
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
              <div className="md:flex md:flex-row md:gap-4">
                <span>
                  <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                    Videos
                  </h2>
                  <div className="">
                    <CarouselVideos />
                  </div>
                </span>
                <span>
                  <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                    Fotos
                  </h2>
                  <CarouselFotos />
                </span>
              </div>

              <div>
                <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                  Requerimientos
                </h2>
                <div className="text-black ">
                  <ul>
                    <div className="flex items-center mt-4">
                      <Image src={check} alt="check" width={20} height={20} />
                      <li className="ml-2">Piano de 88 teclas afinado</li>
                    </div>
                    <div className="flex items-center mt-4">
                      <Image src={check} alt="check" width={20} height={20} />
                      <li className="ml-2">
                        Camerino con iluminación y espejo
                      </li>
                    </div>
                    <div className="flex items-center mt-4">
                      <Image src={check} alt="check" width={20} height={20} />
                      <li className="ml-2">Catering ligero</li>
                    </div>
                    <div className="flex items-center mt-4">
                      <Image src={check} alt="check" width={20} height={20} />
                      <li className="ml-2">Agua</li>
                    </div>
                  </ul>
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
                        Consulta con el artista si hay requerimientos
                        adicionales.
                      </p>
                    </div>
                  </div>
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
              <div className="mt-5 shadow-xl">
                <EventForm />
              </div>
            </main>
            <div className="col-start-1 sm:col-span-2 md:col-span-1 p-5 sm:row-start-2 sm:row-span-9 ">
              <AsideLeft />
            </div>
          </div>
        </div>
        <FooterMain marginT={"mt-[100px]"} />

        {/* <div className="">
          <MainFooter />
        </div> */}
      </main>
    </>
  );
}
