// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dataMusician from "../../objects/musicianObject.json";
import YouTube from "react-youtube";
// Import Swiper styles
import "swiper/css";

export default function CarouselVideos() {
  const { users } = dataMusician;
  const pics = users.multimedia.pics;
  console.log(pics);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <YouTube videoId="kZKcHnQXksw" />
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="NsvDK26WvA0" className="w-40 " />
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="d6RrGeLrgSk" className="w-40 " />
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="VqN8X0RGp-c" className="w-40 " />
      </SwiperSlide>
    </Swiper>
  );
}
