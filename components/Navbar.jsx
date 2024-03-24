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
    <Navbar className=" h-20  bg-[#081540]">
      <NavbarBrand>
        <p className="text-white font-bold text-inherit">ACME</p>
      </NavbarBrand>
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
