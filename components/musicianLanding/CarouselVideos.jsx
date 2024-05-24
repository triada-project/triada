import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import YouTube from "react-youtube";

const options = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
    controls: 1,
  },
};

export default function CarouselVideos() {
  const videos = () => {
    const options = {
      height: "460",
      width: "100%",
      // playerVars: {
      //   autoplay: 1,
      //   controls: 1,
      // },
    };
    return <YouTube videoId="00TLrFv8ppI" opts={options} />;
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
      <ImageGallery
        items={Images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </>
  );
}
