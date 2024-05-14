import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import AnchorNavbar from "./HomeComponents/NavbarComponents/AnchorNavbar";
import AnchorToggleMenu from "./HomeComponents/NavbarComponents/AnchorToggleMenu";
import LogInModal from "./HomeComponents/NavbarComponents/LogInModal";
import LogInModalToggle from "./HomeComponents/NavbarComponents/LogInModalToggle";
import RegisterModal from "./HomeComponents/NavbarComponents/RegisterModal";
import RegisterModalToggle from "./HomeComponents/NavbarComponents/RegisterModalToggle";
import clsx from "clsx";
import { useEffect, useState } from "react";
import UserLogOutNavbar from "./HomeComponents/NavbarComponents/UserLogOutNavbar";

const TOKEN_KEY = "token";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const scrollUpToBeginSection = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollUpToUsSection = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  const scrollUpToUsSection2 = () => {
    window.scrollTo({
      top: 870,
      behavior: "smooth",
    });
  };

  const scrollUpToMusicianSection = () => {
    window.scrollTo({
      top: 2750,
      behavior: "smooth",
    });
  };
  const scrollUpToMusicianSection2 = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      console.log("este es el token", token);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-[#081540] dark text-foreground lg:w-[1440px]"
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          id="img&MenuToogle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="dark md:hidden "
        />
        <div className=" lg:-ms-[20px] xl:-ms-[140px]">
          <a href="/">
            <img src="assets/images/PngLogoNavBar.png" alt="logoImg" />
          </a>
        </div>
      </NavbarContent>
      <div id="anchors" className=" ps-[230px] hidden gap-10  lg:flex ">
        <div
          onClick={scrollUpToBeginSection}
          className="text-blue hover:underline "
        >
          INICIO
        </div>
        <div
          onClick={scrollUpToUsSection}
          className="text-blue hover:underline "
        >
          NOSOTROS
        </div>
        <div
          onClick={scrollUpToMusicianSection}
          className="text-blue hover:underline "
        >
          MÚSICOS
        </div>
      </div>
      <div
        id="buttons"
        className={clsx("flex gap-[24px]", { hidden: isLoggedIn })}
        justify="end"
      >
        <LogInModal />
        <RegisterModal />
      </div>

      <UserLogOutNavbar />

      <NavbarMenu id="menu" className=" pt-5 w-[245px] bg-[#081540]  ">
        <div
          onClick={scrollUpToBeginSection}
          className="text-white hover:underline "
        >
          INICIO
        </div>
        <div
          onClick={scrollUpToUsSection2}
          className="text-white hover:underline"
        >
          NOSOTROS
        </div>
        <div
          onClick={scrollUpToMusicianSection2}
          className="text-white hover:underline"
        >
          MÚSICOS
        </div>
        <div className={clsx("flex flex-col gap-2", { hidden: isLoggedIn })}>
          <LogInModalToggle />
          <RegisterModalToggle />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
