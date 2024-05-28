import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

export default function CarouselFotos({ userData }) {
  if (!userData || !Array.isArray(userData.images)) {
    return <div>No hay Fotos disponibles</div>;
  }

  const imageItems = userData.images.map((url) => ({
    original: url,
  }));

  return <ImageGallery items={imageItems} />;
}
