import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";
import triadaLogo from "../../public/assets/svg/triada-logo.svg";
import playCircle from "../../public/assets/svg/play_circle.svg";
import AvatarImage from "../../public/assets/images/header-picture.webp";
import Image from "next/image";
// import { Button } from "@nextui-org/react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-[#081540] dark text-foreground ${josefine.className} sm:hidden`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={triadaLogo} width={50} height={34} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu
        className={`bg-[#081540] w-[245px] h-screen  flex flex-col items-center ${josefine.className}`}
      >
        <section className=" pt-11 flex flex-col gap-10 items-center">
          <div className=" w-[213px] h-[76px] bg-[#0E4466] rounded-2xl flex items-center ">
            <div className=" flex items-center gap-3 pl-4">
              <Image src={AvatarImage} className=" w-10 h-10 rounded-full " />
              <p className=" text-white text-base"> Victoria Brego</p>
            </div>
          </div>
          <button className=" w-[245px] h-12 flex items-center gap-[18px] hover:bg-[#312971] ">
            <Image src={playCircle} className=" ml-8" />
            <a className=" text-white text-base]">Eventos</a>
          </button>
        </section>
        <Button
          variant="bordered"
          className={` text-white w-[213px] h-12 rounded text-base mt-[60px] ${lato.className}`}
        >
          <p>Cerrar sesión</p>
        </Button>
      </NavbarMenu>
    </Navbar>
  );
}
