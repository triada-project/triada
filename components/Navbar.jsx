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
import { Josefin_Sans, Lato } from "next/font/google";
import AnchorToggleMenu from "./HomeComponents/NavbarComponents/AnchorToggleMenu";

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
        <ButtonNavbar1 href="#" nameButton="ACCEDE"></ButtonNavbar1>
        <ButtonNavbar2 href="#" nameButton="REGISTRO"></ButtonNavbar2>
      </div>
      <NavbarMenu id="menu" className=" pt-5 w-[245px] bg-[#081540]  ">
        <AnchorToggleMenu href="#" nameAnchor="INICIO"></AnchorToggleMenu>
        <AnchorToggleMenu href="#" nameAnchor="NOSOTROS"></AnchorToggleMenu>
        <AnchorToggleMenu href="#" nameAnchor="MÚSICOS"></AnchorToggleMenu>
        <button
          href="#"
          className={` lg:hidden rounded-md px-8 font-normal border border-[#29FEFD] bg-inherit text-[#29FEFD] hover:bg-[#29FEFD] hover:text-black ${josefine.className}`}
        >
          <h2 className="pt-1">ACCEDE</h2>
        </button>
        <button
          href="#"
          className={`lg:hidden font-semibold rounded-md  px-8 bg-[#29FEFD] text-[#081540] hover:bg-[#EF107D] hover:text-white ${josefine.className} `}
        >
          <h2 className="pt-1">REGISTRO</h2>
        </button>
      </NavbarMenu>
    </Navbar>
  );
}
