import { Josefin_Sans, Lato } from "next/font/google";
import InfoCard from "./InfoCard";
import InfoCard2 from "./InfoCard2";
import InfoCard3 from "./InfoCard3";
import InfoCard4 from "./InfoCard4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function CardsContainer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div id="cardsSection" className=" bg-[#081540] sm:w-full lg:pb-1 ">
      <div id="cardsSlider" className="bg-[#081540] py-[66px] sm:hidden">
        <Slider {...settings} className="">
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
        </Slider>
      </div>
      <div
        id="cardsMdContainer"
        className="hidden sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[16px] sm:py-[54px] lg:gap-[42px] "
      >
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
      </div>
    </div>
  );
}
