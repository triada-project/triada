import React from "react";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import Link from "next/link";
import footerBgMobil from "./footerBgMobil.webp";
import footerBg from "./footerBg.webp";
import line from "./line.webp";
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
        className="relative "
        style={{
          zIndex: -1,
          top: 400,
          left: 0,
        }}
      >
        <Image
          src={footerBgMobil}
          objectFit="contain"
          className=" static vlock sm:hidden w-screen"
        />
        <Image
          src={footerBg}
          objectFit="contain"
          className=" hidden sm:block w-screen "
        />
      </div>

      <div
        layout="absolute"
        className="text-white flex flex-col text-center items-center sm:flex-row mt-[100px]"
      >
        <p>logo</p>
        <Link href="/musicianLanding" className="mt-3">
          Nosotros
        </Link>
        <Link href="/musicianLanding" className="mt-3">
          Músicos
        </Link>
        <Link href="/musicianLanding" className="mt-3">
          Preguntas frecuentes
        </Link>

        <p className="mt-3">(C) 2024</p>

        <Link href="/musicianLanding" className="mt-3">
          Aviso de privacidad
        </Link>
        <Link href="/musicianLanding" className="mt-3">
          Términos y condiciones
        </Link>
        <div className="flex flex-row gap-6 justify-center mt-3">
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
