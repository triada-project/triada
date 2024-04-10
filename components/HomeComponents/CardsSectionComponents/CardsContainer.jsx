import { Josefin_Sans, Lato } from "next/font/google";
import InfoCard from "./InfoCard";
import InfoCard2 from "./InfoCard2";
import InfoCard3 from "./InfoCard3";
import InfoCard4 from "./InfoCard4";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function CardsContainer() {
  return (
    <div className="container  ">
      <section className="bg-[#081540] w-[360px] flex flex-col flex-wrap pt-[64px] pb-[79px] px-14 pl-24 gap-[11px] sm:w-[744px] place-content-center sm:flex-row  sm:pt-[54px] sm:px-[56px] sm:justify-around lg:w-[1440px] lg:flex-nowrap  ">
        <InfoCard
          titleCard="Muestra tu trabajo"
          paragraph="Da a conocer tu talento,
tenemos alcance nacional "
        />
        <InfoCard2
          titleCard="Seguridad de pago"
          paragraph="Aseguramos tu pago
al momento de reservar"
        />
        <InfoCard3
          titleCard="Rapidez de reserva"
          paragraph="El artista tiene 16hrs máximo
para contestar tu solicitud"
        />
        <InfoCard4
          titleCard="+10 Géneros musicales"
          paragraph="Contamos con variedad
de generos musicales"
        />
      </section>
    </div>
  );
}
