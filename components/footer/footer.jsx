import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function FooterMain({ marginT }) {
  const scrollUpToUsSection = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  const scrollUpToUsSection2 = () => {
    window.scrollTo({
      top: 870,
      behavior: "smooth",
    });
  };
  const scrollUpToUsSection3 = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  const scrollUpToMusicianSection = () => {
    window.scrollTo({
      top: 2750,
      behavior: "smooth",
    });
  };
  const scrollUpToMusicianSection2 = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    });
  };
  const scrollUpToMusicianSection3 = () => {
    window.scrollTo({
      top: 2125,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={` w-full bg-cover bg-center flex flex-col items-center pt-14 sm:pt-36 ${marginT}`}
      style={{
        backgroundImage: `url('/assets/svg/footer-svg.svg')`,
        width: "100%",
        height: "100%",
      }}
    >
      <section className=" w-[328px] h-[464px] flex flex-col justify-center items-center sm:h-72 sm:w-[80%] lg:w-full lg:px-24 lg:flex-row lg:h-[164px] lg:gap-10 ">
        <div
          className={` w-full ${lato.className} flex flex-col gap-7 items-center text-white border-b-1 pb-7 sm:flex-row sm:justify-center sm:gap-8 lg:border-none lg:pb-0 lg:gap-10 `}
        >
          <Image src={"/assets/svg/triada-logo.svg"} width={74} height={38} />
          <p
            onClick={scrollUpToUsSection}
            className="cursor-pointer hidden md:flex"
          >
            Nosotros
          </p>
          <p
            onClick={scrollUpToUsSection2}
            className="cursor-pointer hidden sm:flex md:hidden"
          >
            Nosotros
          </p>
          <p
            onClick={scrollUpToUsSection3}
            className="cursor-pointer sm:hidden"
          >
            Nosotros
          </p>
          <p
            onClick={scrollUpToMusicianSection}
            className="cursor-pointer hidden md:flex"
          >
            Músicos
          </p>
          <p
            onClick={scrollUpToMusicianSection2}
            className="cursor-pointer hidden sm:flex md:hidden"
          >
            Músicos
          </p>
          <p
            onClick={scrollUpToMusicianSection3}
            className="cursor-pointer  sm:hidden"
          >
            Músicos
          </p>
          <p>Preguntas frecuentes</p>
        </div>
        <div className=" w-full flex flex-col items-center sm:flex-row sm:gap-12 lg:gap-10 ">
          <div
            className={` mt-7 w-full ${lato.className} flex flex-col gap-7 items-center text-white sm:flex-row lg:mt-0 lg:gap-10 `}
          >
            <p>© 2024</p>
            <p>Aviso de privacidad</p>
            <p>Términos y condiciones</p>
          </div>
          <div className=" mt-7 flex gap-6 lg:mt-0 ">
            <Image
              src={"/assets/svg/logo-instagram.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/assets/svg/logo-facebook.svg"}
              width={20}
              height={20}
            />
            <Image
              src={"/assets/svg/logo-x-twitter.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
