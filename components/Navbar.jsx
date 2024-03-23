import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavBar() {
  return (
    <Navbar className=" bg-[#081540]">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarContent className="gap-8 pe-6" justify="end">
          <div>
            <Link className="text-white hover:underline " href="#">
              INICIO
            </Link>
          </div>
          <div isActive>
            <Link className="text-white hover:underline" href="#">
              NOSOTROS
            </Link>
          </div>
          <div>
            <Link className="text-white hover:underline" href="#">
              MÚSICOS
            </Link>
          </div>
        </NavbarContent>
        <Button
          href="#"
          className="hidden sm:flex font-medium border border-[#29FEFD] bg-inherit text-[#29FEFD] hover:bg-[#29FEFD] hover:text-black"
          as={Link}
          href="#"
        >
          ACCEDE
        </Button>
        <Button
          href="#"
          className="hidden sm:flex font-medium bg-[#29FEFD] text-[#081540] hover:bg-[#29fefeb0]"
          as={Link}
          href="#"
        >
          REGISTRO
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
