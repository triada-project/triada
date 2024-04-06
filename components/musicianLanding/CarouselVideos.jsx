import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import "./styles.css";
import { Navigation } from "swiper/modules";
import dataMusician from "../../objects/musicianObject.json";
import YouTube from "react-youtube";

export default function CarouselVideos() {
  const { users } = dataMusician;

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <YouTube videoId="kZKcHnQXksw" className="h-60" />
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
    </>
  );
}
