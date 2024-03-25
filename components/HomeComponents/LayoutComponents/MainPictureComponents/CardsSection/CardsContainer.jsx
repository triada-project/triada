import { Card, CardHeader, CardFooter } from "@nextui-org/react";
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
    <section className="pl-24 flex flex-col gap-4 place-content-center sm:flex sm:flex-row sm:flex-wrap sm:gap-4 lg:flex-nowrap  sm:justify-around mt-20 py-14 px-14  bg-[#081540]">
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
  );
}
