import ElementList from "./ElementList";
// import { Josefin_Sans, Lato } from "next/font/google";
import GradientLogInButton from "./GradientLogInButton";
import BlueNumbers from "./BlueNumbers";
import UsSection from "./UsSection";
import WhyUsSection from "./WhyUsSection";

// const josefine = Josefin_Sans({
//   weight: ["300", "400", "600", "700"],
//   subsets: ["latin"],
// });
// const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function AboutUsSection() {
  return (
    <section id="idUsSection">
      <div
        id="usContainer"
        className="w-full bg-[#081540] sm:flex flex-col lg:bg-[#081540]  "
      >
        <UsSection />
        <WhyUsSection />
      </div>
    </section>
  );
}
