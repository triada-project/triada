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

export default function CarouselVideos({ userData }) {
  // Función para extraer el ID del video de YouTube
  const extractVideoId = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  // Función para renderizar cada video en el carrusel
  const renderVideo = (url) => {
    const options = {
      height: "460",
      width: "100%",
      // playerVars: {
      //   autoplay: 1,
      //   controls: 1,
      // },
    };

    const videoId = extractVideoId(url);
    return <YouTube videoId={videoId} opts={options} />;
  };

  // Verificamos si userData y userData.videos están definidos
  if (!userData || !Array.isArray(userData.videos)) {
    return <div>No hay videos disponibles</div>;
  }
  // Mapeamos los datos de userData para crear los elementos del carrusel
  const videoItems = userData.videos.map((url) => ({
    renderItem: () => renderVideo(url),
    showPlayButton: false,
    showFullscreenButton: false,
    useBrowserFullscreen: false,
  }));

  return (
    <ImageGallery
      items={videoItems}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
}
