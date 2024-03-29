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
    <section className="w-screen bg-[#081540]  grid  sm:grid  sm:grid-cols-2 sm:bg-[#9E1056] md:bg-[#081540] ">
      <div
        id="infoContainer2"
        className="flex flex-col pt-10 sm:pl-5 sm:pt-5 lg:pt-32"
      >
        <div
          id="textContainer3"
          className=" flex flex-col gap-3 px-[96px] text-center sm:text-left sm:px-4  "
        >
          <h2
            className={`text-white flex justify-center sm:justify-start font-bold text-lg sm:text-base lg:text-3xl  ${josefine.className}`}
          >
            ¿Por que elegirnos?
          </h2>
          <h3
            className={`flex text-balance text-white font-normal text-xl sm:text-base  lg:text-3xl   ${lato.className}`}
          >
            Con nosotros puedes encontrar y reservar fácilmente una banda
            musical para cualquier evento en minutos.
          </h3>
          <h3
            className={`flex pt-1 text-balance text-white font-normal text-xl sm:text-base lg:text-3xl  ${lato.className}`}
          >
            Nuestra amplia selección de talentosos artistas garantiza que
            encuentres el sonido perfecto para tu ocasión.
          </h3>
          <h3
            className={`flex pt-1 text-balance text-white font-normal text-xl sm:text-base lg:text-3xl  ${lato.className}`}
          >
            Inmejorable experiencia de usuario.
          </h3>
          <h3
            className={`flex pt-1 text-balance text-white font-normal text-xl sm:text-base lg:text-3xl  ${lato.className}`}
          >
            Tu evento será inolvidable con música en vivo de la más alta
            calidad.
          </h3>
        </div>
        <div
          id="listContainer2"
          className=" flex flex-row justify-evenly   pt-6 sm:gap-3 sm:justify-around sm:pt-4 lg:pt-8 lg:justify-start lg:pl-3 lg:gap-36 lg:pb-8  "
        >
          <BlueNumbers numbers="+230" title="Artistas" />
          <BlueNumbers numbers="+10" title="Generos Musicales" />
          <BlueNumbers numbers="98%" title="Buenas Reseñas" />
        </div>
      </div>
      <div id="imgContainer2" className="flex md:pl-20 -mt-2 lg:pt-28 ">
        <img
          className=" invisible sm:visible  w-full  h-60 sm:h-[430px] sm:object-none md: md:mt-5 md:z-10  md:static md:rounded-2xl lg:justify-center lg:w-[542px] lg:h-[540px]"
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
    </section>
  );
}
