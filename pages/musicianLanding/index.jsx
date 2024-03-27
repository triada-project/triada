import React from "react";
import dataMusician from "../../objects/musicianObject.json";
import { Avatar, AvatarIcon, Chip } from "@nextui-org/react";
import { Josefin_Sans, Lato, Pacifico } from "next/font/google";
import check from "../../public/assets/svg/check.svg";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const josefin = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export default function musicianDetail() {
  const { users } = dataMusician;
  console.log(users.musicalGenere);

  const musicalGeneres = users.musicalGenere;

  return (
    <>
      <div className="ml-5 mt-5 mr-5">
        <div className=" ">
          <Avatar
            src={users.profilePicture[0].url}
            alt="profile picture"
            className="w-80 h-60 rounded-lg shadow-xl text-large"
          />
        </div>
        <div className="mt-5">
          <h1 className="{`${josefin.classname} text-black text-3xl font-semibold mt-5 sm:text-[28px]">
            {users.name}
          </h1>
          <h3 className="text-[455A64]">
            {users.location[0].city}, {users.location[0].state}
          </h3>
          <div className="flex items-centerflex items-center">
            <Rating style={{ maxWidth: 100 }} value={users.ranking} readOnly />
            <div className="ml-2">{users.ranking}</div>
          </div>
          <div>
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
          <Chip
            classNames={{
              base: "bg-[#081540] h-[32px] mt-2",
              content: "text-[#29FEFD]",
            }}
          >
            {users.eventType.join(", ")}
          </Chip>
        </div>
        <div>
          <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
            Videos
          </h2>
          <div>
            <p>Carousel</p>
          </div>
        </div>
        <div>
          <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
            Fotos
          </h2>
          <div>
            <p>Carousel</p>
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
        <div>
          <h1 className="{`${roboto.classname} text-[#312971] text-2xl font-bold mt-5 ml-10 mr-10 sm:text-[30px]">
            Inicia la reservación para tu evento aquí
          </h1>
          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Elige una fecha
            </h2>
            <div>
              <p>Calendar</p>
            </div>
            <div>
              <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                Elige el horario
              </h2>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
