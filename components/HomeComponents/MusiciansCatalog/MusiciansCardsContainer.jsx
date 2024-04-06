import MusicianCard from "./MusicianCard";

export default function MusiciansCardsContainer() {
  return (
    <div className="bg-[#081540]  flex flex-wrap justify-center   sm:w-[744px] sm:justify-normal sm:grid sm:grid-cols-3 sm:gap-[11px]  sm:px-[56px]">
      {/* Tarjetas que se mostrarán en dispositivos móviles */}
      <div
        id="card1"
        className="flex justify-center w-full sm:justify-normal sm:pt-0 sm:w-1/2 p-4"
      >
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
      </div>
      <div
        id="card2"
        className="flex justify-center sm:justify-normal w-full sm:pt-0 sm:w-1/2 p-4"
      >
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
      </div>

      {/* Tarjetas adicionales que se mostrarán a partir de tablet */}
      <div id="card3" className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4">
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
      </div>
      <div id="card4" className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4">
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
      </div>
      <div id="card5" className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4">
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
      </div>
      <div className="hidden sm:flex w-full sm:pt-0 sm:w-1/3 p-4">
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
      </div>
    </div>
  );
}
