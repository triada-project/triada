import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import ImgSection from "@/components/HomeComponents/ImgSectionComponents/ImgSection";
import CardsContainer from "@/components/HomeComponents/CardsSectionComponents/CardsContainer";
import AboutUsSection from "@/components/HomeComponents/AboutUsSectionComponents/AboutUsSection";
import GradientBar from "@/components/HomeComponents/GradientBarComponents/GradientBar";
import MusicianCatalog from "@/components/HomeComponents/MusiciansCatalog/MusicianCatalog";
import MainFooter from "@/components/mainFooter/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-screen ">
        <ImgSection />
        <CardsContainer />
        <AboutUsSection />
        <GradientBar />
        <MusicianCatalog />
        <MainFooter />
      </main>
    </>
  );
}
