import { Josefin_Sans, Lato } from "next/font/google";
import triadaLogo from "../../public/assets/svg/triada-logo.svg";
import AvatarImage from "../../public/assets/images/avatar-empty.webp";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import PlayCircleColor from "@/public/assets/svg/playCircleColor";
import CalendarColor from "@/public/assets/svg/CalendarColor.jsx";
import GaleryColor from "@/public/assets/svg/GaleryColor";
import RepertorioColor from "@/public/assets/svg/RepertoryColor";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AsideMusico({ page, hidden }) {
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

  //console.log(tokenObjet()?.profilePicture?.url);

  return (
    <aside
      className={`bg-[#081540] fixed w-[245px] h-screen  flex flex-col items-center ${josefine.className} hidden sm:flex sm:col-start-1 sm:col-span-1 `}
    >
      <Link href="/">
        <Image src={triadaLogo} className={`pt-12 ${hidden}`} />
      </Link>
      <section className=" pt-[120px] flex flex-col gap-10 items-center">
        <Link href="/perfil-musico">
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

        <Link href="/perfil-musico/eventos">
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
              <ModalHeader className={`flex flex-col gap-1 ${lato.className}`}>
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
    </aside>
  );
}
