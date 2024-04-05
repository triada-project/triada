import ElementList from "./ElementList";
import { Josefin_Sans, Lato } from "next/font/google";
import GradientLogInButton from "./GradientLogInButton";
import BlueNumbers from "./BlueNumbers";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function WhyUsSection() {
  return (
    <>
      <section className=" border border-white bg-[#081540] flex sm:bg-[#9E1056] sm:w-[380px] sm:h-[430px]   md:bg-[#081540] ">
        <div
          id="infoContainer2"
          className="flex flex-col sm:w-[320px]    lg:pt-32"
        >
          <div
            id="textContainer3"
            className=" flex flex-col gap-[12px] px-[48px] pt-[78px] pb-[11px] text-center sm:w-[380px] sm:text-left sm:px-[39px] sm:pt-[30px] sm:gap-[8px] sm:pb-0  "
          >
            <h2
              className={`text-white flex font-bold text-[15px] justify-center  sm:justify-start sm:text-[20px] lg:text-3xl  ${josefine.className}`}
            >
              ¿Por que elegirnos?
            </h2>
            <h3
              className={`text-white flex text-[18px] font-normal    lg:text-3xl   ${lato.className}`}
            >
              Con nosotros puedes encontrar y reservar fácilmente una banda
              musical para cualquier evento en minutos.
            </h3>
            <h3
              className={`text-white flex text-[18px] font-normal   lg:text-3xl  ${lato.className}`}
            >
              Nuestra amplia selección de talentosos artistas garantiza que
              encuentres el sonido perfecto para tu ocasión.
            </h3>
            <h3
              className={`text-white flex  text-[18px] font-normal  lg:text-3xl  ${lato.className}`}
            >
              Inmejorable experiencia de usuario.
            </h3>
            <h3
              className={`text-white flex text-[18px] font-normal lg:text-3xl  ${lato.className}`}
            >
              Tu evento será inolvidable con música en vivo de la más alta
              calidad.
            </h3>
          </div>
          <div
            id="listContainer2"
            className=" flex flex-row px-[70px] pb-[75px] gap-[16px] sm:w-[380px] sm:gap-0 sm:justify-around sm:pt-2 sm:px-0 lg:pt-8 lg:justify-start lg:pl-3 lg:gap-36 lg:pb-8  "
          >
            <BlueNumbers numbers="+230" title="Artistas" />
            <BlueNumbers numbers="+10" title="Generos Musicales" />
            <BlueNumbers numbers="98%" title="Buenas Reseñas" />
          </div>
        </div>
      </section>
      <div id="imgContainer2" className=" flex md:pl-20 h-[430px] lg:pt-28  ">
        <img
          className=" hidden sm:flex  w-full  h-60  sm:h-[430px] sm:object-none md: md:mt-5 md:z-10  md:static md:rounded-2xl lg:justify-center lg:w-[542px] lg:h-[540px]"
          // Puede ser esta classname, que opinan ustedes bg-cover
          src="/assets/images/pircture-elegirnos.webp"
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
    </>
  );
}
