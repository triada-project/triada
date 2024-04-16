import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import AnchorNavbar from "./HomeComponents/NavbarComponents/AnchorNavbar";
import { Josefin_Sans, Lato } from "next/font/google";
import AnchorToggleMenu from "./HomeComponents/NavbarComponents/AnchorToggleMenu";

import LogInModal from "./HomeComponents/NavbarComponents/LogInModal";
import LogInModalToggle from "./HomeComponents/NavbarComponents/LogInModalToggle";
import RegisterModal from "./HomeComponents/NavbarComponents/RegisterModal";
import RegisterModalToggle from "./HomeComponents/NavbarComponents/RegisterModalToggle";


const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      <div id="buttons" className="flex gap-[24px]" justify="end">
        <LogInModal />
        <RegisterModal />
      </div>
      <NavbarMenu id="menu" className=" pt-5 w-[245px] bg-[#081540]  ">
        <AnchorToggleMenu href="#" nameAnchor="INICIO"></AnchorToggleMenu>
        <AnchorToggleMenu href="#" nameAnchor="NOSOTROS"></AnchorToggleMenu>
        <AnchorToggleMenu href="#" nameAnchor="MÚSICOS"></AnchorToggleMenu>
        <LogInModalToggle />
        <RegisterModalToggle />

      </NavbarMenu>
    </Navbar>
  );
}
