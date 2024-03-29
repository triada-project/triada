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
    <section className="w-screen bg-[#081540] grid grid-rows-2 sm:grid  sm:grid-cols-2 sm:bg-[#9E1056] md:bg-[#081540] ">
      <div id="imgContainer" className="flex md:pl-20  ">
        <img
          className="object-cover w-full  h-60 sm:h-[380px] sm:object-none md:mt-5 md:z-10  md:static md:rounded-2xl lg:justify-center lg:w-[542px] lg:h-[540px]"
          // Puede ser esta classname, que opinan ustedes bg-cover
          src="/assets/images/picture-nosotros.webp"
          alt="microphoneUsSection"
        ></img>
        <div
          id="roseBox"
          className=" rounded-2xl md:w-72 md:h-80 bg-[#9E1056] md:absolute md:z-0 md:-mx-5 lg:w-[455px] lg:h-[525px] lg:me-16  "
        ></div>
        <div
          id="roseBox2"
          className=" rounded-2xl md:w-48 md:h-40 bg-[#9E1056] md:absolute md:z-0 md:mx-[134px] md:my-64 lg:w-[335px] lg:h-[325px] lg:ms-[230px]   "
        ></div>
      </div>
      <div id="infoContainer" className="flex flex-col sm:pl-5 sm:pt-5 ">
        <div
          id="textContainer"
          className=" flex flex-col gap-3 px-24 text-center sm:text-left sm:px-5  "
        >
          <h2
            className={`text-white flex justify-center sm:justify-start font-bold text-lg sm:text-base lg:text-3xl  ${josefine.className}`}
          >
            Nosotros
          </h2>
          <h3
            className={`flex text-balance text-white font-normal text-xl sm:text-base lg:text-3xl   ${lato.className}`}
          >
            Te conectamos con una variedad de artistas musicales con los que
            encontrarás la combinación perfecta de sonidos para tu evento.
          </h3>
          <h3
            className={`flex pt-1 text-balance text-white font-normal text-xl sm:text-base lg:text-3xl  ${lato.className}`}
          >
            Únete a nosotros y haz que la música en vivo sea más accesible y
            emocionante para todos.
          </h3>
        </div>
        <div
          id="listContainer"
          className=" flex flex-col pb-10  pl-36 pt-4 sm:gap-3 sm:pl-8 sm:pt-6 lg:pt-8 "
        >
          <ElementList titleElement="Los mejores músicos" />
          <ElementList titleElement="Seguridad en pagos" />
          <ElementList titleElement="Cobertura Nacional" />
        </div>
        <GradientLogInButton nameButton="¡Registrate!" />
      </div>
    </section>
  );
}
