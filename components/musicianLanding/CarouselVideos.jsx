import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import YouTube from "react-youtube";

export default function CarouselVideos() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
  return <ImageGallery items={images} />;
}

/*import React, { useRef, useState } from "react";
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
          <YouTube videoId="kZKcHnQXksw"  />
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
}*/
