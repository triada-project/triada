// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dataMusician from "../objects/musicianObject.json";
import YouTube from "react-youtube";
// Import Swiper styles
import "swiper/css";

export default function CarouselVideos() {
  const { users } = dataMusician;
  const pics = users.multimedia.pics;
  console.log(pics);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex grid gap-5"
    >
      <SwiperSlide>
        <YouTube videoId="kZKcHnQXksw" className="w-80 rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="NsvDK26WvA0" className="w-80 rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="d6RrGeLrgSk" className="w-80 rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <YouTube videoId="VqN8X0RGp-c" className="w-80 rounded-lg" />
      </SwiperSlide>
    </Swiper>
  );
}
