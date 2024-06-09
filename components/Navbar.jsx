import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import clsx from "clsx";
import LogInModal from "./HomeComponents/NavbarComponents/LogInModal";
import LogInModalToggle from "./HomeComponents/NavbarComponents/LogInModalToggle";
import RegisterModal from "./HomeComponents/NavbarComponents/RegisterModal";
import RegisterModalToggle from "./HomeComponents/NavbarComponents/RegisterModalToggle";
import UserLogOutNavbar from "./HomeComponents/NavbarComponents/UserLogOutNavbar";
import Image from "next/image";
import TiradaLogo from "../public/assets/svg/triada-logo.svg";

const TOKEN_KEY = "token";

const ScrollLink = ({ position, children, extraClasses = "" }) => (
  <div
    onClick={() => window.scrollTo({ top: position, behavior: "smooth" })}
    className={`cursor-pointer hover:underline ${extraClasses}`}
  >
    {children}
  </div>
);

export default function NavBar({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      //console.log("este es el token", token);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#081540] dark text-foreground  w-full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          id="img&MenuToogle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="dark md:hidden"
        />
        <div className="lg:-ms-[20px] xl:-ms-[140px]">
          <a href="/">
            <Image src={TiradaLogo} width={60} height={50} alt="logoImg" />
          </a>
        </div>
      </NavbarContent>
      {page === "musicianLanding" ? (
        ""
      ) : (
        <div id="anchors" className="ps-[230px] hidden gap-10 lg:flex">
          <ScrollLink position={0} extraClasses="text-blue">
            INICIO
          </ScrollLink>
          <ScrollLink position={1000} extraClasses="text-blue hidden md:flex">
            NOSOTROS
          </ScrollLink>
          <ScrollLink
            position={870}
            extraClasses="text-blue hidden sm:flex md:hidden"
          >
            NOSOTROS
          </ScrollLink>
          <ScrollLink position={800} extraClasses="text-blue sm:hidden">
            NOSOTROS
          </ScrollLink>
          <ScrollLink position={2750} extraClasses="text-blue hidden md:flex">
            MÚSICOS
          </ScrollLink>
          <ScrollLink
            position={1900}
            extraClasses="text-blue hidden sm:flex md:hidden"
          >
            MÚSICOS
          </ScrollLink>
          <ScrollLink position={2125} extraClasses="text-blue sm:hidden">
            MÚSICOS
          </ScrollLink>
        </div>
      )}
      {/* <div id="anchors" className="ps-[230px] hidden gap-10 lg:flex">
        <ScrollLink position={0} extraClasses="text-blue">
          INICIO
        </ScrollLink>
        <ScrollLink position={1000} extraClasses="text-blue hidden md:flex">
          NOSOTROS
        </ScrollLink>
        <ScrollLink
          position={870}
          extraClasses="text-blue hidden sm:flex md:hidden"
        >
          NOSOTROS
        </ScrollLink>
        <ScrollLink position={800} extraClasses="text-blue sm:hidden">
          NOSOTROS
        </ScrollLink>
        <ScrollLink position={2750} extraClasses="text-blue hidden md:flex">
          MÚSICOS
        </ScrollLink>
        <ScrollLink
          position={1900}
          extraClasses="text-blue hidden sm:flex md:hidden"
        >
          MÚSICOS
        </ScrollLink>
        <ScrollLink position={2125} extraClasses="text-blue sm:hidden">
          MÚSICOS
        </ScrollLink>
      </div> */}
      <div
        id="buttons"
        className={clsx("flex gap-[24px]", { hidden: isLoggedIn })}
        justify="end"
      >
        <LogInModal />
        <RegisterModal />
      </div>

      {/* En este componente esta el menu despegable para cerrar sesion de usuario */}
      <UserLogOutNavbar />

      <NavbarMenu id="menu" className="pt-5 w-[245px] bg-[#081540]">
        <ScrollLink position={0} extraClasses="text-white">
          INICIO
        </ScrollLink>
        <ScrollLink position={870} extraClasses="text-white hidden sm:flex">
          NOSOTROS
        </ScrollLink>
        <ScrollLink position={800} extraClasses="text-white sm:hidden">
          NOSOTROS
        </ScrollLink>
        <ScrollLink position={1900} extraClasses="text-white hidden sm:flex">
          MÚSICOS
        </ScrollLink>
        <ScrollLink position={2125} extraClasses="text-white sm:hidden">
          MÚSICOS
        </ScrollLink>
        <div className={clsx("flex flex-col gap-2", { hidden: isLoggedIn })}>
          <LogInModalToggle />
          <RegisterModalToggle />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
