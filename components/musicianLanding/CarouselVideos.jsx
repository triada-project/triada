import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import YouTube from "react-youtube";

export default function CarouselVideos() {
  const videos = () => {
    return <YouTube videoId="00TLrFv8ppI" className="justify-center" />;
  };

  const Images = [
    {
      renderItem: videos,
      showPlayButton: false,
      showFullscreenButton: false,
      useBrowserFullscreen: false,
    },
    {
      renderItem: videos,
      showPlayButton: false,
      showFullscreenButton: false,
      useBrowserFullscreen: false,
    },
  ];

  return (
    <>
      <ImageGallery items={Images} />
    </>
  );
}
