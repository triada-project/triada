import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RequestCard({ song, author, page }) {
  return (
    <div
      className={
        page === "repertory"
          ? " rounded-xl w-56 h-36 border border-[#EAEAEA] px-4 py-4 shadow-lg hover:-translate-y-1 hover:scale-110 duration-300 mt-4 "
          : "rounded-xl w-full h-auto border border-[#EAEAEA] px-4 py-4 shadow-lg mt-4"
      }
    >
      <section className=" flex items-center justify-between">
        <span className={`${lato.className} max-w-[90%]`}>
          El viento silba entre los árboles altos mientras el río serpentea bajo
          el puente antiguo.
        </span>
        <div className=" flex items-center gap-2">
          <Image
            src={"/assets/svg/edit.svg"}
            alt="close"
            width={20}
            height={20}
          />
          <Image
            src={"/assets/svg/close-card.svg"}
            alt="close"
            width={20}
            height={20}
          />
        </div>
      </section>
    </div>
  );
}
