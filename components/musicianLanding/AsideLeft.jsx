import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { Avatar, Chip } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
//import dataMusician from "../../objects/musicianObject.json";
import play from "./play.webp";
import Image from "next/image";
import ButtonPink from "@/components/musicianLanding/ButtonPink";

const josefin = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AsideLeft({ userData }) {
  //const { user } = dataMusician;

  return (
    <aside className="text-black ms:w-1/4 lg:w-1/4git ">
      <div className="border-2 rounded-lg p-5 shadow-xl">
        <h2
          className={`${josefin.classname} text-[#37474F] text-center font-semibold md:text-[20px]`}
        >
          Temas más representativos
        </h2>
        {userData.repertory.map((title, index) => {
          return (
            <div key={index} className="mt-2 flex flex-row items-center">
              <span>
                <Image src={play} alt="play" />
              </span>
              <span className="ml-5">
                <p
                  className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
                >
                  {title.title}
                </p>
                <p>{title.artist}</p>
              </span>
            </div>
          );
        })}
        {/* <div className="mt-2 flex flex-row items-center">
          <span>
            <Image src={play} alt="play" />
          </span>
          <span className="ml-5">
            <p
              className={`font-semibold text-inherit sm:text-[16px] ${lato.className}`}
            >
              {userData.repertory[0].song}
            </p>
            <p>{userData.repertory[0].artist}</p>
          </span>
        </div> */}
      </div>
      {/* <div className="border-2 rounded-lg p-5 mt-10 shadow-xl">
        <h2
          className={`${josefin.classname} text-[#37474F] text-center font-semibold md:text-[20px]`}
        >
          Opiniones
        </h2>
        <p>5 Reseñas</p>
        <div className="mt-5">
          <div>
            <div className="flex flex-row">
              <Avatar src={user.coments[0].avatar} />
              <span className="ml-5">
                <p>{user.coments[0].name}</p>
                <p>{user.coments[0].date}</p>
              </span>
            </div>
            <div className="flex items-centerflex items-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={user.coments[0].ranking}
                readOnly
              />
              <div className="ml-2">{user.coments[0].ranking}</div>
            </div>
          </div>
          <p>{user.coments[0].coment}</p>
        </div>
      </div> */}
      <div className="flex justify-center mt-10 sm:hidden">
        <ButtonPink
          width="w-[280px] lg:w-[30rem]"
          text="Haz tu reservación"
          type="submit"
        />
      </div>
    </aside>
  );
}
