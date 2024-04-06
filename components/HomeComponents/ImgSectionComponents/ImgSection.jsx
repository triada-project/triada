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
      <div className="container">
        {/* <div
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
        <div
          id="titleContainer "
          className=" sm:pt-4 md:pl-16 lg:pl-16 xl:pl-4 "
        >
          <p
            className={`text-white pt-[33px] px-[20px] text-[32px] font-semibold leading-normal text-center sm:pt-40 sm:pl-40  sm:text-6xl md:text-6xl lg:text-6xl   xl:text-7xl ${josefine.className}`}
          >
            Armoniza tus eventos y conecta con la
            <span className="  leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE]">
              {" "}
              Música
            </span>
          </p>
          <h2
            className={`text-white px-[25px] pt-[56px] text-[16px] text-center sm:pl-40 font-semibold leading-normal  xl:text-2xl ${josefine.className}`}
          >
            ¡Encuentra la mejor música para tu <br />
            evento especial!
          </h2>
          <GradientButton nameButton="Ver músicos" />
        </div> */}
        <div
          className="relative w-[360px] h-[325px] sm:w-screen sm:h-[369px] bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url('/assets/images/header-picture.webp')`,
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center sm:pl-[55px] sm:justify-start md:pl-16 lg:pl-16 xl:pl-4">
            <div className="text-center sm:w-[345px] sm:text-left   ">
              <h1
                className={`text-white  px-[20px] pt-[33px] text-[32px] font-semibold  text-center sm:pt-[70px] sm:text-[32px] sm:text-left  md:text-6xl lg:text-6xl xl:text-7xl ${josefine.className}`}
              >
                Armoniza tus eventos y conecta con la
                <span className=" text-transparent text-[32px] bg-clip-text bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE]">
                  {" "}
                  Música
                </span>
              </h1>
              <h2
                className={`text-white px-[25px] text-[16px] text-center font-semibold sm:text-left sm:text-[20px]  xl:text-2xl ${josefine.className}`}
              >
                ¡Encuentra la mejor música para tu evento especial!
              </h2>
              <GradientButton nameButton="Ver músicos" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
