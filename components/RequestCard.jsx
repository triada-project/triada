import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RequestCard({ text, onDelete, page }) {
  return (
    <div
      className={
        page === "requerimientos"
          ? ` rounded-xl w-full h-auto border border-[#EAEAEA] px-4 py-4 shadow-lg mt-4 hover:-translate-y-1 hover:scale-105 duration-300 `
          : "rounded-xl w-full h-auto border border-[#EAEAEA] px-4 py-4 shadow-lg mt-4"
      }
    >
      <section className=" flex items-center justify-between">
        <span className={`${lato.className} max-w-[90%]`}>{text}</span>
        <div className=" flex flex-col items-center gap-2 lg:flex-row">
          <Image
            src={"/assets/svg/edit.svg"}
            alt="close"
            width={20}
            height={20}
          />
          <button onClick={onDelete}>
            <Image
              src={"/assets/svg/close-card.svg"}
              alt="close"
              width={20}
              height={20}
            />
          </button>
        </div>
      </section>
    </div>
  );
}
