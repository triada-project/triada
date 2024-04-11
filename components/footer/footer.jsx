import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function FooterMain() {
  return (
    <footer
      className=" w-full bg-cover bg-center flex flex-col items-center pt-14"
      style={{
        backgroundImage: `url('/assets/svg/footer-svg.svg')`,
        width: "100%",
        height: "100%",
      }}
    >
      <section className=" w-[328px] h-[464px] flex flex-col items-center ">
        <div
          className={` w-[328px] ${lato.className} flex flex-col gap-7 items-center text-white border-b-1 pb-7`}
        >
          <Image src={"/assets/svg/triada-logo.svg"} width={74} height={38} />
          <p>Nosotros</p>
          <p>Músicos</p>
          <p>Preguntas frecuentes</p>
        </div>
        <div
          className={` mt-7 w-[328px] ${lato.className} flex flex-col gap-7 items-center text-white `}
        >
          <p>© 2024</p>
          <p>Aviso de privacidad</p>
          <p>Términos y condiciones</p>
        </div>
        <div className=" mt-7 flex gap-6">
          <Image
            src={"/assets/svg/logo-instagram.svg"}
            width={20}
            height={20}
          />
          <Image src={"/assets/svg/logo-facebook.svg"} width={20} height={20} />
          <Image
            src={"/assets/svg/logo-x-twitter.svg"}
            width={20}
            height={20}
          />
        </div>
      </section>
    </footer>
  );
}
