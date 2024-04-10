import React from "react";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import Link from "next/link";
import footerBgMobil from "./footerBgMobil.webp";
import footerBg from "./footerBg.webp";
import logoFooter from "./logoFooter.webp";
import logoFacebook from "./logoFacebook.webp";
import logoInstagram from "./logoInstagram.webp";
import logoTwitter from "./logoTwitter.webp";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MainFooter() {
  return (
    <>
      <div
        id="footerContainer"
        className=" relative top-[380px] sm:top-[110px] lg:w-[1440px] "
        style={{
          zIndex: 0,
        }}
      >
        <Image
          src={footerBgMobil}
          objectFit="contain"
          className=" static block sm:hidden w-screen"
        />
        <Image
          src={footerBg}
          objectFit="contain"
          className=" hidden sm:block w-screen "
        />
      </div>

      <div
        layout="absolute"
        className="text-white flex flex-col text-center sm:flex-row  sm:gap-6 sm:justify-center sm:items-center sm:mt-10 "
        style={{
          zIndex: +1,
        }}
      >
        <div className="flex justify-center ">
          <Image src={logoFooter} alt="logoFooter" />
        </div>
        <Link href="/musicianLanding" className="mt-4">
          Nosotros
        </Link>
        <Link href="/musicianLanding" className="mt-4">
          Músicos
        </Link>
        <Link href="/musicianLanding" className="mt-4">
          Preguntas frecuentes
        </Link>
        <div className="bg-white h-[1px] ml-5 mt-5 mr-5 sm:hidden "></div>
        <p className="mt-4">© 2024</p>

        <Link href="/musicianLanding" className="mt-4">
          Aviso de privacidad
        </Link>
        <Link href="/musicianLanding" className="mt-4">
          Términos y condiciones
        </Link>
        <div className="flex flex-row gap-6 justify-center mt-5">
          <a id="" href="#">
            <Image src={logoInstagram} alt="" />
          </a>
          <a id="" href="#">
            <Image src={logoFacebook} alt="" />
          </a>
          <a id="" href="#">
            <Image src={logoTwitter} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
