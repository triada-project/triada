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
    <div className="sm:w-[328px] sm:h-auto sm:w-64 sm:h-48 ">
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" "
      >
        <SwiperSlide>
          <YouTube videoId="kZKcHnQXksw" className="sm:w-64 sm:h-48 " />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="NsvDK26WvA0" />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="d6RrGeLrgSk" />
        </SwiperSlide>
        <SwiperSlide>
          <YouTube videoId="VqN8X0RGp-c" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
