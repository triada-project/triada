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
import ButtonNavbar1 from "./HomeComponents/NavbarComponents/ButtonNavbar1";
import ButtonNavbar2 from "./HomeComponents/NavbarComponents/ButtonNavbar2";
import AnchorNavbar from "./HomeComponents/NavbarComponents/AnchorNavbar";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["INICIO", "NOSOTROS", "MÚSICOS"];

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
        <ButtonNavbar1 href="#" nameButton="ACCEDE"></ButtonNavbar1>
        <ButtonNavbar2 href="#" nameButton="REGISTRO"></ButtonNavbar2>
      </div>
      <NavbarMenu id="menu" className=" pt-5 w-[245px] bg-[#081540]  ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="text-white" key={`${item}-${index}`}>
            <Link className="w-[120px] text-white" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
