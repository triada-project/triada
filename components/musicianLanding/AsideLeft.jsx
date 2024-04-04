import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import dataMusician from "../../objects/musicianObject.json";
import { Avatar, Chip } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";

const josefin = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AsideLeft() {
  const { users } = dataMusician;

  return (
    <aside className="ms:w-1/4 lg:w-1/4git ">
      <div className="border-2 rounded-lg p-5 ">
        <h2
          className={`${josefin.classname} text-[#37474F] text-center font-semibold sm:text-[20px]`}
        >
          Temas más representativos
        </h2>
        <div className="mt-2 ">
          <p
            className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
          >
            {users.repertory[0].title}
          </p>
          <p>{users.repertory[0].author}</p>
          {users.repertory[0].eventType.map((nombre, index) => (
            // Usamos map para iterar sobre la lista de nombres y renderizar cada uno como un elemento <li>
            <div className="gap gap-1 flex flex-nowrap"></div>
          ))}
        </div>
        <div className="mt-2">
          <p
            className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
          >
            {users.repertory[1].title}
          </p>
          <p>{users.repertory[1].author}</p>
          {users.repertory[1].eventType.map((nombre, index) => (
            <div className="gap gap-1 flex flex-nowrap"></div>
          ))}
        </div>
        <div className="mt-2">
          <p
            className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
          >
            {users.repertory[2].title}
          </p>
          <p>{users.repertory[2].author}</p>
          {users.repertory[2].eventType.map((nombre, index) => (
            <div className="gap gap-1 flex flex-nowrap"></div>
          ))}
        </div>
        <div className="mt-2">
          <p
            className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
          >
            {users.repertory[3].title}
          </p>
          <p>{users.repertory[3].author}</p>
          {users.repertory[3].eventType.map((nombre, index) => (
            <div className="gap gap-1 flex flex-nowrap"></div>
          ))}
        </div>
        <div className="mt-2">
          <p
            className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
          >
            {users.repertory[4].title}
          </p>
          <p>{users.repertory[4].author}</p>
          {users.repertory[4].eventType.map((nombre, index) => (
            <div className="gap gap-1 flex flex-nowrap"></div>
          ))}
        </div>
        <div></div>
      </div>
      <div className="border-2 rounded-lg p-5 mt-10">
        <h2
          className={`${josefin.classname} text-[#37474F] text-center font-semibold sm:text-[20px]`}
        >
          Opiniones
        </h2>
        <p>5 Reseñas</p>
        <div className="mt-5">
          <div>
            <div className="flex flex-row">
              <Avatar src={users.coments[0].avatar} />
              <span className="ml-5">
                <p>{users.coments[0].name}</p>
                <p>{users.coments[0].date}</p>
              </span>
            </div>
            <div className="flex items-centerflex items-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={users.coments[0].ranking}
                readOnly
              />
              <div className="ml-2">{users.coments[0].ranking}</div>
            </div>
          </div>
          <p>{users.coments[0].coment}</p>
        </div>
      </div>
    </aside>
  );
}
