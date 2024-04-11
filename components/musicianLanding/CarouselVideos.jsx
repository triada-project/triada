import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import YouTube from "react-youtube";

export default function CarouselVideos() {
  const videos = [
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
  return <ImageGallery items={videos} />;
}

/*
<iframe
  title="sample video"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&amp;showinfo=0"
  allowfullscreen=""
  style="border: none;"
></iframe>







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
