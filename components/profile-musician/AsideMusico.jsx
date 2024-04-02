import { Josefin_Sans, Lato } from "next/font/google";
import triadaLogo from "../../public/assets/svg/triada-logo.svg";
import playCircle from "../../public/assets/svg/play_circle.svg";
import Calendar from "../../public/assets/svg/calendar.svg";
import Repertory from "../../public/assets/svg/repertory.svg";
import Galery from "../../public/assets/svg/galery.svg";
import AvatarImage from "../../public/assets/images/avatar-empty.webp";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Link from "next/link";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AsideMusico(props) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

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
      <Image src={triadaLogo} className={`pt-12 ${props.hidden}`} />
      <section className=" pt-[120px] flex flex-col gap-10 items-center">
        <Link href="/perfil-musico">
          <Button className=" w-[213px] h-[76px] bg-[#0E4466] rounded-2xl flex items-center ">
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
          <Button className=" rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ">
            <Image src={playCircle} className="" />
            <p className=" text-white text-base]">Eventos</p>
          </Button>
        </Link>
        <Link href="/perfil-musico/disponibilidad">
          <Button className=" rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ">
            <Image src={Calendar} className="" />
            <p className=" text-white text-base]">Disponibilidad</p>
          </Button>
        </Link>
        <Link href="/perfil-musico/galeria">
          <Button className=" rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ">
            <Image src={Galery} className="" />
            <p className=" text-white text-base]">Galería</p>
          </Button>
        </Link>
        <Link href="/perfil-musico/repertorio">
          <Button className=" rounded-none bg-[#081540] w-[245px] h-12 flex justify-start items-center gap-[18px] hover:bg-[#312971] pl-8 ">
            <Image src={Repertory} className="" />
            <p className=" text-white text-base]">Repertorio</p>
          </Button>
        </Link>
      </section>
      <Button
        variant="bordered"
        className={` text-white w-[213px] h-12 rounded text-base mt-[60px] ${lato.className}`}
      >
        <p>Cerrar sesión</p>
      </Button>
    </aside>
  );
}