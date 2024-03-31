import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import ImgSection from "@/components/HomeComponents/ImgSectionComponents/ImgSection";
import CardsContainer from "@/components/HomeComponents/CardsSectionComponents/CardsContainer";
import AboutUsSection from "@/components/HomeComponents/AboutUsSectionComponents/AboutUsSection";
import GradientBar from "@/components/HomeComponents/GradientBarComponents/GradientBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-screen bg-[#081540]">
        <ImgSection />
        <CardsContainer />
        <AboutUsSection />
        <GradientBar />
      </main>
    </>
  );
}
