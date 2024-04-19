import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import YouTube from "react-youtube";

export default function CarouselVideos() {
  const videos = () => {
    return <YouTube videoId="00TLrFv8ppI" className="w-[80%]" />;
  };

  const Images = [
    {
      renderItem: videos,
      showPlayButton: false,
      showFullscreenButton: false,
      useBrowserFullscreen: false,
      thumbnailWidth: 150,
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      showPlayButton: false,
      showFullscreenButton: false,
      useBrowserFullscreen: false,
      sizes: "40px",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      showPlayButton: false,
      showFullscreenButton: false,
      useBrowserFullscreen: false,
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
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
