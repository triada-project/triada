import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";

import ImgSection from "@/components/HomeComponents/ImgSectionComponents/ImgSection";
import CardsContainer from "@/components/HomeComponents/CardsSectionComponents/CardsContainer";
import AboutUsSection from "@/components/HomeComponents/AboutUsSectionComponents/AboutUsSection";
import GradientBar from "@/components/HomeComponents/GradientBarComponents/GradientBar";
import MusicianCatalog from "@/components/HomeComponents/MusiciansCatalog/MusicianCatalog";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
<<<<<<< HEAD

      <main className="w-screen">
=======
      <main className="w-screen ">
>>>>>>> 6b1176f (added the musician catalog responsive)
        <ImgSection />
        <CardsContainer />
        <AboutUsSection />
        <GradientBar />
<<<<<<< HEAD

=======
        <MusicianCatalog />
>>>>>>> 6b1176f (added the musician catalog responsive)
      </main>
    </>
  );
}
