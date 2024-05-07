import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

export default function CarouselVideos() {
  const images = [
    {
      original:
        "https://www.elsoldepuebla.com.mx/gossip/6c9uge-la-pianista-argentina-duran-esta-de-vuelta-en-puebla-te-decimos-donde-y-cuando/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20est%C3%A1%20de%20vuelta%20en%20Puebla,%20te%20decimos%20d%C3%B3nde%20y%20cu%C3%A1ndo",
    },
    {
      original:
        "https://palabrasclaras.mx/wp-content/uploads/2022/12/ARGENTINA-DURAN-1068x801.jpeg",
    },
    {
      original:
        "https://diarioistmo.blob.core.windows.net/images/2022/11/19/299959279-607050807530659-3915973587644233652-n.jpg",
    },
  ];
  return <ImageGallery items={images} />;
}
