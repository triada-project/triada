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
    <div className="container">
      <section className=" w-[360px] pl-24 flex flex-col flex-wrap pt-[64px] pb-14 px-14  bg-[#081540] gap-4 place-content-center sm:flex sm:flex-row  sm:gap-4 lg:flex-nowrap  sm:justify-around ">
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
