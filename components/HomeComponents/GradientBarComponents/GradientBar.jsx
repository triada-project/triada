import MusicGenre from "./MusicGenre";
import Slider from "react-slick";

export default function GradientBar() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="bg-[#081540] lg:w-[1440px] ">
      <div className="w-full bg-[url('/assets/images/pinkRectangle.png')]   sm:bg-[url('/assets/svg/gradientBar.svg')] sm:h-40 lg:bg-zinc-950 lg:bg-[url('/assets/images/pinkRectangle.png')] lg:h-[107px] lg:w-[1440px]">
        <Slider {...settings} className="">
          <MusicGenre genre="Soul" />
          <MusicGenre genre="Clasica" />
          <MusicGenre genre="Cumbia" />
          <MusicGenre genre="Jazz" />
          <MusicGenre genre="Norteño" />
          <MusicGenre genre="Banda" />
        </Slider>
      </div>
    </section>
  );
}
