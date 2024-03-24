import { Josefin_Sans, Lato } from "next/font/google";
import triadaLogo from "../public/assets/svg/triada-logo.svg";
import playCircle from "../public/assets/svg/play_circle.svg";
import AvatarImage from "../public/assets/images/header-picture.webp";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AsideCliente() {
  return (
    <aside
      className={`bg-[#081540] w-[245px] h-screen  flex flex-col items-center ${josefine.className} hidden sm:flex`}
    >
      <Image src={triadaLogo} className=" pt-12" />
      <section className=" pt-[120px] flex flex-col gap-10 items-center">
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
    </aside>
  );
}
