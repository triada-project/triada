import ElementList from "./ElementList";
import { Josefin_Sans, Lato } from "next/font/google";
import GradientLogInButton from "./GradientLogInButton";
import BlueNumbers from "./BlueNumbers";
import UsSection from "./UsSection";
import WhyUsSection from "./WhyUsSection";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AboutUsSection() {
  return (
    <section className="container ">
      <div
        id="usContainer"
        className="w-screen bg-[#081540] grid sm:grid sm:grid-cols-2 sm:bg-[#9E1056] lg:bg-[#081540] lg:w-[1440px]  "
      >
        <UsSection />
        <WhyUsSection />
      </div>
    </section>
  );
}
