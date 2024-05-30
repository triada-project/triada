import UsSection from "./UsSection";
import WhyUsSection from "./WhyUsSection";

export default function AboutUsSection() {
  return (
    <section id="idUsSection" className="container ">
      <div
        id="usContainer"
        className="w-screen bg-[#081540] grid sm:grid sm:grid-cols-2 sm:bg-[#9E1056] lg:bg-[#081540] lg:w-[1440px]   "
      >
        <UsSection />
        <WhyUsSection />
      </div>
    </section>
  );
}
