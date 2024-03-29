import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ButtonNavbar1 from "./HomeComponents/NavbarComponents/ButtonNavbar1";
import ButtonNavbar2 from "./HomeComponents/NavbarComponents/ButtonNavbar2";
import AnchorNavbar from "./HomeComponents/NavbarComponents/AnchorNavbar";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavBar() {
  return (
    <Navbar className="w-screen h-20  bg-[#081540]">
      <div>
        <a href="/">
          <img src="assets/images/PngLogoNavBar.png" alt="logoImg" />
        </a>
      </div>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarContent className="gap-10 pe-6" justify="end">
          <AnchorNavbar href="#" nameAnchor="INICIO"></AnchorNavbar>
          <AnchorNavbar href="#" nameAnchor="NOSOTROS"></AnchorNavbar>
          <AnchorNavbar href="#" nameAnchor="MÚSICOS"></AnchorNavbar>
        </NavbarContent>
        <ButtonNavbar1 href="#" nameButton="ACCEDE"></ButtonNavbar1>
        <ButtonNavbar2 href="#" nameButton="REGISTRO"></ButtonNavbar2>
      </NavbarContent>
    </Navbar>
  );
}