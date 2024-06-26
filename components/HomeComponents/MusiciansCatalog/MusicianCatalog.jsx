import { Josefin_Sans, Lato } from "next/font/google";
import MusiciansCardsContainer from "./MusiciansCardsContainer";
import React, { useEffect, useState } from "react";
import MusicianCard from "./MusicianCard";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import {
  typeEvents,
  musicalGenre,
  MexicanStates,
} from "/components/SelectGenreMusic/data.js";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MusicianCatalog() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [musicians, setMusicians] = useState([]);
  const [numCardsToShow, setNumCardsToShow] = useState(2); // Default to 2 cards for mobile

  const [selectedEventType, setSelectedEventType] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedUbication, setSelectedUbication] = useState(null);
  const [filteredMusicians, setFilteredMusicians] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    async function fetchMusicians() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await fetch(`${apiUrl}/users/musicianHome`);
        const data = await response.json();

        //console.log("Fetched data:", data); // Log the fetched data

        // Filtrar usuarios con rol "musico"
        // const filteredMusicians = data.data.filter(
        //   (user) => user.role === "musico"
        // );

        //console.log("Filtered musicians:", filteredMusicians); // Log the filtered musicians

        // Barajar los músicos antes de establecer el estado
        const shuffledMusicians = shuffleArray(data.data);

        setMusicians(shuffledMusicians);
        setFilteredMusicians(shuffledMusicians); // Set the initial filtered musicians
      } catch (error) {
        console.error("Error fetching musicians:", error);
      }
    }

    fetchMusicians();

    function updateNumCards() {
      if (window.innerWidth >= 640) {
        setNumCardsToShow(6);
      } else {
        setNumCardsToShow(2);
      }
    }

    updateNumCards();
    window.addEventListener("resize", updateNumCards);

    return () => window.removeEventListener("resize", updateNumCards);
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleFilter = (event) => {
    event.preventDefault(); // Prevenir la recarga de la página

    let filtered = musicians;

    if (selectedEventType) {
      filtered = filtered.filter((musician) =>
        musician.eventType?.includes(selectedEventType)
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter((musician) =>
        musician.musicalGenre?.includes(selectedGenre)
      );
    }

    if (selectedUbication) {
      filtered = filtered.filter((musician) =>
        musician.state?.includes(selectedUbication)
      );
    }

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
      setFilteredMusicians(shuffleArray(filtered));
    }
  };

  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center">
        <section
          id="musicianCatalog"
          className="bg-[#081540] py-[56px] px-[16px] flex flex-col sm:px-0 w-full lg:pb-[81px] "
        >
          <div id="titleContainer ">
            <h1
              className={`text-white text-center text-[15px] font-bold lg:text-[40px]  ${josefine.className}`}
            >
              Catálogo Musical
            </h1>
          </div>
          <div
            id="inputsContainer"
            className="flex flex-col pt-[19px] gap-[19px] justify-center sm:w-full sm:px-[56px] sm:pt-[35px] sm:flex-row lg:w-full lg:px-[183px]"
          >
            <Select
              id="typeOfEventInput"
              isRequired
              items={typeEvents}
              label={"home" ? "Tipo de evento" : "Tipos de evento"}
              className={"home" ? ` text-[#29FEFD] dark ` : ""}
              variant="bordered"
              isMultiline={true}
              selectionMode={"home" ? "single" : "multiple"}
              classNames="w-[328px] sm:w-[164px] sm:h-[45px] lg:w-[300px] "
              onChange={(e) => setSelectedEventType(e.target.value)}
              renderValue={(items) => {
                return (
                  <div className="flex flex-wrap pt-2  gap-2 ">
                    {items.map((item) => (
                      <Chip key={item.key} className=" bg-[#081540] text-white">
                        {item.data.typeEvents}
                      </Chip>
                    ))}
                  </div>
                );
              }}
            >
              {(typeEvents) => (
                <SelectItem
                  key={typeEvents.id}
                  textValue={typeEvents.typeEvents}
                >
                  <div className="flex pt-2 gap-2 items-center">
                    <div className="flex flex-col ">
                      <span className="text-small">
                        {typeEvents.typeEvents}
                      </span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>

            <Select
              id="genreMusicianInput"
              isRequired
              className={"home" ? ` text-[#29FEFD] dark ` : ""}
              items={musicalGenre}
              label={"home" ? "Género Musical" : "Géneros Musicales"}
              variant="bordered"
              isMultiline={true}
              selectionMode={"home" ? "single" : "multiple"}
              placeholder={
                "home" ? "" : "Selecciona uno o más géneros musicales"
              }
              classNames="w-[328px] sm:w-[164px] sm:h-[45px] lg:w-[300px] "
              onChange={(e) => setSelectedGenre(e.target.value)}
              renderValue={(items) => {
                return (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Chip key={item.key} className=" bg-[#081540] text-white">
                        {item.data.musicalGenre}
                      </Chip>
                    ))}
                  </div>
                );
              }}
            >
              {(musicalGenre) => (
                <SelectItem
                  key={musicalGenre.id}
                  textValue={musicalGenre.musicalGenre}
                >
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">
                        {musicalGenre.musicalGenre}
                      </span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>

            <Select
              id="ubicationEventsInput"
              isRequired
              items={MexicanStates}
              label={"home" ? "Ubicación" : "Ubicación"}
              className={"home" ? ` text-[#29FEFD] dark ` : ""}
              variant="bordered"
              isMultiline={true}
              selectionMode={"home" ? "single" : "multiple"}
              placeholder={"home" ? "" : "Selecciona una ubicación"}
              classNames="w-[328px] sm:w-[164px] sm:h-[45px] lg:w-[300px] "
              onChange={(e) => setSelectedUbication(e.target.value)}
              renderValue={(items) => {
                return (
                  <div className="flex flex-wrap pt-2  gap-2 ">
                    {items.map((item) => (
                      <Chip key={item.key} className=" bg-[#081540] text-white">
                        {item.data.nombre}
                      </Chip>
                    ))}
                  </div>
                );
              }}
            >
              {(MexicanStates) => (
                <SelectItem
                  key={MexicanStates.clave}
                  textValue={MexicanStates.nombre}
                >
                  <div className="flex pt-2 gap-2 items-center">
                    <div className="flex flex-col ">
                      <span className="text-small">{MexicanStates.nombre}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>

            <div>
              <button
                id="pinkButton"
                onClick={handleFilter}
                className="text-white rounded-lg bg-[#EE0075] w-full h-[45px] flex flex-row sm:w-[50px] justify-center gap-[18px] lg:h-[50px] items-center "
              >
                <h2
                  className={`pt-[6px] font-bold text-[14px] sm:hidden  ${josefine.className} `}
                >
                  Buscar
                </h2>
                <a href="">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#a)">
                      <path
                        d="M17.612 16.016a9.75 9.75 0 1 0-2.095 2.097h-.002c.044.06.093.118.147.173l5.775 5.775a1.5 1.5 0 1 0 2.123-2.121l-5.775-5.775a1.497 1.497 0 0 0-.173-.149ZM18 10.25a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="#fff"
                          transform="translate(0 .5)"
                          d="M0 0h24v24H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </section>

        <div
          id="bigContainer"
          className="bg-[#081540] items-center flex flex-col sm:flex-row flex-wrap justify-center w-full gap-5 lg:w-full lg:gap-[52px] "
        >
          {noResults ? (
            <div className="text-white text-center flex flex-grow justify-center items-center h-[200px]">
              <p>
                No hay músicos que concuerden con lo que tú buscas por el
                momento.
              </p>
            </div>
          ) : (
            filteredMusicians
              .slice(0, numCardsToShow)
              .map((musician, index) => (
                <MusicianCard
                  key={index}
                  className={`flex justify-center w-full sm:justify-normal sm:pt-0 sm:w-1/2 p-4 lg:w-[324px] lg:p-0`}
                  name={musician.name}
                  profilePicture={
                    musician.profilePicture
                      ? musician.profilePicture
                      : "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=" // URL de la imagen por defecto
                  }
                  state={
                    musician.state
                      ? `${musician.city}, ${musician.state}`
                      : "Locación no disponible"
                  }
                  chip1={
                    musician.musicalGenre
                      ? musician.musicalGenre[0]
                      : "Genero no disponible"
                  }
                  chip2={
                    musician.musicalGenre
                      ? musician.musicalGenre[1]
                      : "Genero no disponible"
                  }
                  id={musician._id}
                />
              ))
          )}
        </div>
      </div>
      <div className="bg-[#081540] -mt-12 pe-[17px]  flex justify-end sm:pe-[35px] sm:-mt-0  sm:pt-[5px] lg:pe-[80px] lg:-mt-12 lg:pb-2">
        <img
          src="/assets/images/GradientCircle.png"
          alt=""
          className="w-[48px] h-[48px] "
          onClick={scrollUp}
        />
      </div>
    </>
  );
}
