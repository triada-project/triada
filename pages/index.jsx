import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Layout from "@/components/HomeComponents/Layout";
import CardsContainer from "@/components/HomeComponents/LayoutComponents/MainPictureComponents/CardsSection/CardsContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Layout />
        <CardsContainer />
      </main>
    </>
  );
}
