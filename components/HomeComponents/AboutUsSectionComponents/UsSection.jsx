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
    <section className=" flex flex-col sm:flex-row sm:w-[90%] lg:w-full m-auto justify-between">
      <div id="imgContainer" className="  flex lg:pl-20  w-2/4  ">
        <img
          className=" hidden sm:flex w-full sm:w-max-w-[380px] sm:max-h-[410px]md:mt-5  md:rounded-2xl md:hidden"
          src="/assets/images/picture-nosotros.webp"
          alt="microphoneUsSection"
        ></img>
        <img
          className=" hidden w-full md:flex lg:justify-center lg:max-w-xl lg:max-h-xl"
          src="/assets/images/ImagenDeNosotros.png"
          alt="microphoneUsSection"
        ></img>
      </div>
      <div
        id="infoContainer"
        className=" w-full mx-auto flex flex-col  pt-[64px] sm:pt-[30px] sm:px-[31px]  lg:px-[80px] items-center md:items-start sm:max-w-sm lg:max-w-xl "
      >
        <div
          id="textContainer"
          className=" flex flex-col gap-3 px-[18px]  text-center sm:text-left sm:px-0    "
        >
          <h2
            className={`text-white flex font-bold text-[16px] justify-center sm:justify-start  sm:text-[20px] lg:text-[40px]  ${josefine.className}`}
          >
            Nosotros
          </h2>
          <h3
            className={`text-white flex   font-normal text-[18px]  lg:text-[20px]   ${lato.className}`}
          >
            Te conectamos con una variedad de artistas musicales con los que
            encontrarás la combinación perfecta de sonidos para tu evento.
          </h3>
          <h3
            className={`text-white flex  pb-[11px] font-normal text-[18px] sm:pb-0 lg:text-[20px] lg:pb-0  ${lato.className}`}
          >
            Únete a nosotros y haz que la música en vivo sea más accesible y
            emocionante para todos.
          </h3>
        </div>
        <div
          id="listContainer"
          className=" flex flex-col pb-[116px] px-[69px] pt-[11px]  gap-[16px] sm:gap-3 sm:pl-8 sm:pt-[20px] sm:pb-0 lg:pt-[50px] lg:px-0 lg:justify-start  "
        >
          <ElementList titleElement="Los mejores músicos" />
          <ElementList titleElement="Seguridad en pagos" />
          <ElementList titleElement="Cobertura Nacional" />
        </div>
        <div className="relative inline-block sm:hidden w-full  ">
          <img
            src="/assets/images/vista-central-mobile.webp"
            alt="people"
            className="object-cover w-full h-[107px] sm:h-[380px] sm:object-none  md:mt-5 md:z-10  md:static md:rounded-2xl lg:justify-center lg:w-[542px] lg:h-[540px]"
          />
          <GradientLogInButton nameButton="¡Regístrate!" />
        </div>
      </div>
    </section>
  );
}
