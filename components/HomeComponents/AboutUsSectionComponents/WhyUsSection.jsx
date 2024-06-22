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
    <section className=" flex flex-col sm:flex-row sm:w-[90%] lg:w-full m-auto justify-between">
      <div
        id="whyUsContainer"
        className="  bg-[#081540] flex w-full sm:max-w-sm lg:max-w-xl  sm:h-[430px] lg:h-[730px] lg:bg-[#081540]   "
      >
        <div
          id="infoContainer2"
          className="flex flex-col sm:w-[320px] lg:w-[720px] lg:h-[456px] items-center"
        >
          <div
            id="textContainer3"
            className=" flex flex-col gap-[12px] px-[48px] pt-[78px] pb-[11px] text-center sm:w-[380px] sm:text-left sm:px-[39px] sm:pt-[30px] sm:pb-0  sm:gap-[8px] lg:px-[80px]  lg:py-0 lg:w-[720px]  "
          >
            <h2
              className={`text-white flex font-bold text-[15px] justify-center  sm:justify-start sm:text-[20px] lg:text-[40px]  ${josefine.className}`}
            >
              ¿Por que elegirnos?
            </h2>
            <h3
              className={`text-white flex text-[18px] font-normal    lg:text-[20px] lg:pe-[100px]   ${lato.className}`}
            >
              Con nosotros puedes encontrar y reservar fácilmente una banda
              musical para cualquier evento en minutos.
            </h3>
            <h3
              className={`text-white flex text-[18px] font-normal   lg:text-[20px] lg:pe-[100px]  ${lato.className}`}
            >
              Nuestra amplia selección de talentosos artistas garantiza que
              encuentres el sonido perfecto para tu ocasión.
            </h3>
            <h3
              className={`text-white flex  text-[18px] font-normal  lg:text-[20px] lg:pe-[100px]  ${lato.className}`}
            >
              Inmejorable experiencia de usuario.
            </h3>
            <h3
              className={`text-white flex text-[18px] font-normal lg:text-[20px] lg:pe-[100px]   ${lato.className}`}
            >
              Tu evento será inolvidable con música en vivo de la más alta
              calidad.
            </h3>
          </div>
          <div
            id="listContainer2"
            className=" flex flex-row px-[70px] pb-[75px] gap-[16px] sm:w-[380px] sm:gap-0 sm:justify-around sm:pt-2 sm:px-0 lg:pt-[40px] lg:justify-start  lg:gap-[72px] lg:pb-0 lg:px-[80px] lg:w-[720px]  "
          >
            <BlueNumbers numbers="+230" title="Artistas" />
            <BlueNumbers numbers="+10" title="Generos Musicales" />
            <BlueNumbers numbers="98%" title="Buenas Reseñas" />
          </div>
        </div>
      </div>
      <div id="imgContainer2" className=" flex lg:pr-20 lg:pb-[217px] w-2/4 ">
        <img
          className=" hidden sm:flex  w-full  h-60  sm:h-[430px]  md:rounded-2xl md:hidden"
          // Puede ser esta classname, que opinan ustedes bg-cover
          src="/assets/images/pircture-elegirnos.webp"
          alt="microphoneUsSection"
        ></img>

        <img
          className=" hidden w-full md:flex lg:max-w-xl lg:max-h-xl"
          src="/assets/images/imagenPorQueNosotros.png"
          alt="microphoneUsSection"
        ></img>
      </div>
    </section>
  );
}
