// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import dataMusician from "../objects/musicianObject.json";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default function CarouselFotos() {
  const { users } = dataMusician;
  const pics = users.multimedia.pics;
  console.log(pics);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src="https://www.elsoldepuebla.com.mx/gossip/6c9uge-la-pianista-argentina-duran-esta-de-vuelta-en-puebla-te-decimos-donde-y-cuando/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20est%C3%A1%20de%20vuelta%20en%20Puebla,%20te%20decimos%20d%C3%B3nde%20y%20cu%C3%A1ndo"
          width={500}
          height={280}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://tecolotito.elsiglodetorreon.com.mx/i/2022/10/1609865.jpeg"
          width={300}
          height={280}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://palabrasclaras.mx/wp-content/uploads/2022/12/ARGENTINA-DURAN-1068x801.jpeg"
          width={300}
          height={280}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://diarioistmo.blob.core.windows.net/images/2022/11/19/299959279-607050807530659-3915973587644233652-n.jpg"
          width={300}
          height={280}
        />
      </SwiperSlide>
    </Swiper>
  );
}
