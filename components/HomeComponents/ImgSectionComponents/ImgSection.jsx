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
      <div className="container ">
        <div
          className="relative w-[360px] h-[325px] sm:w-screen sm:h-[369px] lg:w-[1440px] lg:h-[759px] bg-cover bg-no-repeat  "
          style={{
            backgroundImage: `url('/assets/images/header-picture.webp')`,
          }}
        >
          <div
            id="text-container"
            className="absolute inset-0 flex justify-center items-center sm:pl-[55px] sm:justify-start  "
          >
            <div className="text-center sm:w-[345px] sm:text-left  lg:w-[601px] lg:h-[381px]  ">
              <h1
                className={`text-white  px-[20px] pt-[33px] text-[32px] font-semibold  text-center sm:pt-[70px] sm:text-[32px] sm:text-left lg:pt-0   lg:text-[60px]  ${josefine.className}`}
              >
                Armoniza tus eventos y conecta con la
                <span className=" text-transparent text-[32px] bg-clip-text lg:text-[60px] bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE]">
                  {" "}
                  Música
                </span>
              </h1>
              <h2
                className={`text-white px-[25px] text-[16px] text-center font-semibold sm:text-left sm:text-[20px] lg:w-[345px]  ${josefine.className}`}
              >
                ¡Encuentra la mejor música para tu evento especial!
              </h2>
              <GradientButton nameButton="Ver Músicos" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
