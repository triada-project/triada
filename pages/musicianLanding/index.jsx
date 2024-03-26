import React from "react";
import dataMusician from "../../objects/musicianObject.json";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { Josefin_Sans, Lato, Pacifico } from "next/font/google";

export default function musicianDetail() {
  const { users } = dataMusician;

  //const josefin = Josefin_Sans({
  //   weight: ["300", "400", "600", "700"],
  //   subsets: ["latin"],
  // });
  // const lato = Lato({
  //   weight: ["300", "400", "600", "700"],
  //   subsets: ["latin"],
  // });
  // const pacifico = Pacifico({
  //   weight: ["300", "400", "600", "700"],
  //   subsets: ["latin"],
  // });

  return (
    <>
      <div className="">
        <div className="flex justify-center p-5">
          <Avatar
            src={users.profilePicture[0].url}
            alt="profile picture"
            className="w-80 h-60 rounded-lg shadow-xl text-large"
          />
        </div>
        <div>
          <h1>Argentina Durán</h1>
        </div>
      </div>
    </>
  );
}
