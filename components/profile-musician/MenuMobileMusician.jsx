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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { Josefin_Sans, Lato } from "next/font/google";
import triadaLogo from "../../public/assets/svg/triada-logo.svg";
import AvatarImage from "../../public/assets/images/avatar-empty.webp";
import Image from "next/image";
import { useState, useEffect } from "react";
import PlayCircleColor from "@/public/assets/svg/playCircleColor";
import CalendarColor from "@/public/assets/svg/CalendarColor";
import GaleryColor from "@/public/assets/svg/GaleryColor";
import RepertorioColor from "@/public/assets/svg/RepertoryColor";

// import { Button } from "@nextui-org/react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MenuMobileMusician({ page, role }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    // if (!token) {
    //   window.location.href = "/login";
    // }
    //console.log(token);
    return () => {};
  });
  console.log(token);

  const tokenObjet = () => {
    if (token) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        token.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      return payloadObject;
    }
  };

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
          <Link href="/">
            <Image src={triadaLogo} width={66} height={50} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu
        className={`bg-[#081540] w-[245px] h-screen  flex flex-col items-center ${josefine.className}`}
      >
        <section className=" pt-11 flex flex-col gap-10 items-center">
          <Link
            href={`${
              role === "client" ? "/perfil-cliente/" : "/perfil-musico/"
            }`}
          >
            <Button
              className={` w-[213px] h-[76px] bg-[#0E4466] rounded-2xl flex items-center ${
                page === "perfil" ? "bg-[#312971]" : ""
              } `}
            >
              <div className=" flex items-center gap-3 ">
                <Image
                  src={
                    !tokenObjet()?.profilePicture?.url
                      ? AvatarImage
                      : tokenObjet()?.profilePicture?.url
                  }
                  width={40}
                  height={40}
                  className=" w-10 h-10 rounded-full border border-[#29FEFD] "
                />
                <p className=" w-28 text-white text-base text-ellipsis overflow-hidden ...">
                  {tokenObjet()?.name}
                </p>
              </div>
            </Button>
          </Link>

          <Link
            href={`${
              role === "client"
                ? "/perfil-cliente/eventos"
                : "/perfil-musico/eventos"
            }`}
          >
            {/* <Button className=" rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ">
              <Image src={playCircle} className="" />
              <p className=" text-white text-base]">Eventos</p>
            </Button> */}
            <Button
              className={` rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ${
                page === "eventos" ? "bg-[#312971]" : ""
              } `}
            >
              <PlayCircleColor colorFill={page} />
              <p
                className={` text-base ${
                  page === "eventos" ? "text-[#29FEFD]" : "text-white"
                } `}
              >
                Eventos
              </p>
            </Button>
          </Link>

          {role === "musico" && (
            <Link href="/perfil-musico/disponibilidad">
              <Button
                className={` rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ${
                  page === "disponibilidad" ? "bg-[#312971]" : ""
                } `}
              >
                <CalendarColor colorFill={page} />
                <p
                  className={` text-base ${
                    page === "disponibilidad" ? "text-[#29FEFD]" : "text-white"
                  } `}
                >
                  Disponibilidad
                </p>
              </Button>
            </Link>
          )}

          {role === "musico" && (
            <Link href="/perfil-musico/galeria">
              <Button
                className={` rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ${
                  page === "galeria" ? "bg-[#312971]" : ""
                } `}
              >
                <GaleryColor colorFill={page} />
                <p
                  className={` text-base ${
                    page === "galeria" ? "text-[#29FEFD]" : "text-white"
                  } `}
                >
                  Galería
                </p>
              </Button>
            </Link>
          )}

          {role === "musico" && (
            <Link href="/perfil-musico/repertorio">
              <Button
                className={` rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ${
                  page === "repertorio" ? "bg-[#312971]" : ""
                } `}
              >
                <RepertorioColor colorFill={page} />
                <p
                  className={` text-base ${
                    page === "repertorio" ? "text-[#29FEFD]" : "text-white"
                  } `}
                >
                  Repertorio
                </p>
              </Button>
            </Link>
          )}
        </section>
        <Button
          onPress={onOpen}
          variant="bordered"
          className={` text-white w-[213px] h-12 rounded text-base mt-[60px] ${lato.className}`}
        >
          <p>Cerrar sesión</p>
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader
                  className={`flex flex-col gap-1 ${lato.className}`}
                >
                  ¿Estas seguro que quieres cerrar sesión?
                </ModalHeader>
                {/* <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody> */}
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Si
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    No
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

        {/* <section className=" pt-11 flex flex-col gap-10 items-center">
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
        </Button> */}
      </NavbarMenu>
    </Navbar>
  );
}
