import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import ImgSection from "@/components/HomeComponents/ImgSectionComponents/ImgSection";
import CardsContainer from "@/components/HomeComponents/CardsSectionComponents/CardsContainer";
import AboutUsSection from "@/components/HomeComponents/AboutUsSectionComponents/AboutUsSection";
import GradientBar from "@/components/HomeComponents/GradientBarComponents/GradientBar";
import MusicianCatalog from "@/components/HomeComponents/MusiciansCatalog/MusicianCatalog";
import FooterMain from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[#081540] shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] m-auto">
        <ImgSection />
        <CardsContainer />
        <AboutUsSection />
        <GradientBar />
        <MusicianCatalog />
        <FooterMain />
      </main>
    </>
  );
}
