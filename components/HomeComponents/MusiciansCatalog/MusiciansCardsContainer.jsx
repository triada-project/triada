import MusicianCard from "./MusicianCard";
import React, { useEffect, useState } from "react";

export default function MusiciansCardsContainer() {
  const [musicians, setMusicians] = useState([]);
  const [numCardsToShow, setNumCardsToShow] = useState(2); // Default to 2 cards for mobile

  useEffect(() => {
    async function fetchMusicians() {
      try {
        const response = await fetch("http://3.145.7.153/users");
        const data = await response.json();

        console.log("Fetched data:", data); // Log the fetched data

        // Filtrar usuarios con rol "musico"
        const filteredMusicians = data.data.filter(
          (user) => user.role === "musico"
        );

        console.log("Filtered musicians:", filteredMusicians); // Log the filtered musicians

        setMusicians(filteredMusicians);
      } catch (error) {
        console.error("Error fetching musicians:", error);
      }
    }

    fetchMusicians();

    // Function to update number of cards to show based on window size
    function updateNumCards() {
      if (window.innerWidth >= 640) {
        // sm breakpoint in Tailwind CSS
        setNumCardsToShow(6);
      } else {
        setNumCardsToShow(2);
      }
    }

    // Update on mount
    updateNumCards();

    // Add event listener to update on resize
    window.addEventListener("resize", updateNumCards);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateNumCards);
  }, []);

  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle musicians array each time before rendering
  const shuffledMusicians = shuffleArray([...musicians]);

  return (
    <div
      id="bigContainer"
      className="bg-[#081540] flex flex-wrap justify-center sm:w-[744px] sm:justify-normal sm:grid sm:grid-cols-3 sm:gap-[11px] sm:px-[56px] lg:w-[1440px] lg:gap-[52px] lg:py-0 lg:px-[173px] "
    >
      {shuffledMusicians.slice(0, numCardsToShow).map((musician, index) => (
        <div
          key={index}
          className={`flex justify-center w-full sm:justify-normal sm:pt-0 sm:w-1/2 p-4 lg:w-[324px] lg:p-0`}
        >
          <MusicianCard
            name={musician.name}
            imgProfile={
              musician.imgProfile
                ? musician.imgProfile
                : "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=" // URL de la imagen por defecto
            }
            state={
              musician.address
                ? `${musician.address.state}, ${musician.address.country}`
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
        </div>
      ))}
    </div>
  );
}
