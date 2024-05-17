import MusicianCard from "./MusicianCard";

export default function MusiciansCardsContainer() {
  return (
    <div
      id="bigContainer"
      className="bg-[#081540] flex flex-wrap justify-center sm:w-[744px] sm:justify-normal sm:grid sm:grid-cols-3 sm:gap-[11px] sm:px-[56px] lg:w-[1440px] lg:gap-[52px] lg:py-0 lg:px-[173px] "
    >
      <div
        id="card1"
        className="flex justify-center w-full sm:justify-normal sm:pt-0 sm:w-1/2 p-4 lg:w-[324px] lg:p-0 "
      >
        <MusicianCard
          musician="Espinoza Paz"
          srcImg="https://i.scdn.co/image/ab6761610000e5eb3c79d21af18d9e109ba6978f"
          locality="Sinaloa, México"
          chip1="Regional"
          chip2="Grupera"
        />
      </div>
      <div
        id="card2"
        className="flex justify-center sm:justify-normal w-full sm:pt-0 sm:w-1/2 p-4 lg:w-[324px] lg:p-0"
      >
        <MusicianCard
          musician="Ha-ash"
          srcImg="https://tecolotito.elsiglodedurango.com.mx/i/2022/10/1110259.jpeg"
          locality="Santa Fe, CdMx"
          chip1="Pop"
          chip2="Country"
        />
      </div>

      {/* Tarjetas adicionales que se mostrarán a partir de tablet */}
      <div
        id="card3"
        className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4 lg:w-[324px] lg:p-0"
      >
        <MusicianCard
          musician="Sin Bandera"
          srcImg="https://www.informador.mx/__export/1651802925148/sites/elinformador/img/2022/05/05/sin_bandera_pide_senti_x7569532x_crop1651802924044.jpg_423682103.jpg"
          locality="Monterrey, Nuevo León"
          chip1="Baladas"
          chip2="Pop"
        />
      </div>
      <div
        id="card4"
        className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4 lg:w-[324px] lg:p-0"
      >
        <MusicianCard
          musician="Junior H"
          srcImg="https://cdn2.excelsior.com.mx/media/pictures/2022/11/23/2861703.jpg"
          locality="Cerano, Guanajuato"
          chip1="Regional"
          chip2="Corridos"
        />
      </div>
      <div
        id="card5"
        className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4 lg:w-[324px] lg:p-0"
      >
        <MusicianCard
          musician="Raúl Alejandro Escajadillo"
          srcImg="https://www.semana.com/resizer/PaXDwZbIadUygVvYYJNmtmaROFQ=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/TSUX5IYP7ZHXRHRZXRHV7FIKTM.jpg"
          locality="Mérida, Yucatán"
          chip1="Pop"
          chip2="Baladas"
        />
      </div>
      <div className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4 lg:w-[324px] lg:p-0">
        <MusicianCard
          musician="Argentina Durán"
          srcImg="https://i1.sndcdn.com/artworks-yoza7zOt3rjE1HcD-Gq8RbA-t500x500.jpg"
          locality="Polanco, CdMx"
          chip1="Regional"
          chip2="Grupera"
        />
      </div>
    </div>
  );
}
