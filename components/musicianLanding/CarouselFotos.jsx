import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

export default function CarouselVideos() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return <ImageGallery items={images} />;
}

/*import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import "./styles.css";
import { Navigation } from "swiper/modules";
import dataMusician from "../../objects/musicianObject.json";
import Image from "next/image";

export default function CarouselFotos() {
  const { users } = dataMusician;
  const pics = users.multimedia.pics;
  console.log(pics);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="object-fill">
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
}*/
