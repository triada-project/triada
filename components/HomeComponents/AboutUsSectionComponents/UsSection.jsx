import ElementList from "./ElementList";
import { Josefin_Sans, Lato } from "next/font/google";
import GradientLogInButton from "./GradientLogInButton";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function UsSection() {
  return (
    <>
      <div id="imgContainer" className=" border border-white flex lg:pl-20  ">
        <img
          className="object-cover w-[358px] h-[107px] sm:w-[380px] sm:h-[410px] sm:object-none  md:mt-5 md:z-10  md:static md:rounded-2xl lg:justify-center lg:w-[542px] lg:h-[540px]"
          // Puede ser esta classname, que opinan ustedes bg-cover
          src="/assets/images/picture-nosotros.webp"
          alt="microphoneUsSection"
        ></img>
        <div
          id="pinkBox"
          className=" rounded-2xl md:w-72 md:h-80 bg-[#9E1056] md:absolute md:z-0 md:-mx-5 lg:w-[455px] lg:h-[525px] lg:me-16  "
        ></div>
        <div
          id="pinkBox2"
          className=" rounded-2xl md:w-48 md:h-40 bg-[#9E1056] md:absolute md:z-0 md:mx-[134px] md:my-64 lg:w-[335px] lg:h-[325px] lg:ms-[230px]   "
        ></div>
      </div>
      <div
        id="infoContainer"
        className=" border border-white container mx-auto flex flex-col  pt-[64px] sm:pt-[30px] sm:px-[31px]  "
      >
        <div
          id="textContainer"
          className=" flex flex-col gap-3 px-[18px]  text-center sm:text-left sm:px-0    "
        >
          <h2
            className={`text-white flex font-bold text-[16px] justify-center sm:justify-start  sm:text-[20px] lg:text-3xl  ${josefine.className}`}
          >
            Nosotros
          </h2>
          <h3
            className={`text-white flex   font-normal text-[18px]  lg:text-3xl   ${lato.className}`}
          >
            Te conectamos con una variedad de artistas musicales con los que
            encontrarás la combinación perfecta de sonidos para tu evento.
          </h3>
          <h3
            className={`text-white flex  pb-[11px] font-normal text-[18px] sm:pb-0 lg:text-3xl  ${lato.className}`}
          >
            Únete a nosotros y haz que la música en vivo sea más accesible y
            emocionante para todos.
          </h3>
        </div>
        <div
          id="listContainer"
          className=" flex flex-col pb-[116px] px-[69px] pt-[11px]  gap-[16px] sm:gap-3 sm:pl-8 sm:pt-[20px] sm:pb-0 lg:pt-8 "
        >
          <ElementList titleElement="Los mejores músicos" />
          <ElementList titleElement="Seguridad en pagos" />
          <ElementList titleElement="Cobertura Nacional" />
        </div>
        <div className="relative inline-block sm:hidden  ">
          <img
            src="/assets/images/vista-central-mobile.webp"
            alt="people"
            className="object-cover w-[358px] h-[107px] sm:h-[380px] sm:object-none  md:mt-5 md:z-10  md:static md:rounded-2xl lg:justify-center lg:w-[542px] lg:h-[540px]"
          />
          <GradientLogInButton nameButton="¡Regístrate!" />
        </div>
      </div>
    </>
  );
}
