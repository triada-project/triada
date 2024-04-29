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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import UserLogOutNavbar from "./HomeComponents/NavbarComponents/UserLogOutNavbar";

const TOKEN_KEY = "token";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <AnchorNavbar href="#" nameAnchor="INICIO"></AnchorNavbar>
        <AnchorNavbar href="#" nameAnchor="NOSOTROS"></AnchorNavbar>
        <AnchorNavbar href="#" nameAnchor="MÚSICOS"></AnchorNavbar>
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
        <AnchorToggleMenu href="#" nameAnchor="INICIO"></AnchorToggleMenu>
        <AnchorToggleMenu href="#" nameAnchor="NOSOTROS"></AnchorToggleMenu>
        <AnchorToggleMenu href="#" nameAnchor="MÚSICOS"></AnchorToggleMenu>
        <div className={clsx("flex flex-col gap-2", { hidden: isLoggedIn })}>
          <LogInModalToggle />
          <RegisterModalToggle />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
