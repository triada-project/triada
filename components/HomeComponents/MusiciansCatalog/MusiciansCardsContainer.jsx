import MusicianCard from "./MusicianCard";
import React, { useEffect, useState } from "react";

export default function MusiciansCardsContainer() {
  const [musicians, setMusicians] = useState([]);
  const [numCardsToShow, setNumCardsToShow] = useState(2); // Default to 2 cards for mobile

  useEffect(() => {
    async function fetchMusicians() {
      try {
        const response = await fetch("http://localhost:3007/users");
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

  return (
    <div
      id="bigContainer"
      className="bg-[#081540] flex flex-wrap justify-center sm:w-[744px] sm:justify-normal sm:grid sm:grid-cols-3 sm:gap-[11px] sm:px-[56px] lg:w-[1440px] lg:gap-[52px] lg:py-0 lg:px-[173px] "
    >
      {musicians.slice(0, numCardsToShow).map((musician, index) => (
        <div
          key={index}
          className={`flex justify-center w-full sm:justify-normal sm:pt-0 sm:w-1/2 p-4 lg:w-[324px] lg:p-0`}
        >
          <MusicianCard
            name={musician.name}
            imgProfile={musician.imgProfile}
            state={
              musician.address.state + "," + " " + musician.address.country
            }
            chip1={musician.musicalGenre ? musician.musicalGenre[0] : ""} // Check if musicalGenre exists
            chip2={musician.musicalGenre ? musician.musicalGenre[1] : ""} // Check if musicalGenre exists
          />
        </div>
      ))}
    </div>
  );
}
