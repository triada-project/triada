import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import GradientButton from "./MainPictureComponents/GradientButton";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ImgSection() {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/assets/images/header-picture.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div id="titleContainer " className="sm:pt-4 md:pl-16 lg:pl-16 xl:pl-4 ">
        <p
          className={`pt-28 pl-20 text-5xl  sm:pt-40 sm:pl-40  sm:text-6xl md:text-6xl lg:text-6xl font-bold leading-normal text-white xl:text-7xl ${josefine.className}`}
        >
          Armoniza tus <br /> eventos y conecta <br /> con la
          <span className="  leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE]">
            {" "}
            MÚSICA
          </span>
        </p>
        <h2
          className={`pl-20 xl:text-2xl pt-2 sm:pl-40 font-bold leading-normal text-white ${josefine.className}`}
        >
          ¡Encuentra la mejor música para tu <br />
          evento especial!
        </h2>
        <GradientButton nameButton="Ver músicos" />
      </div>
    </>
  );
}
