import closeCard from "../public/assets/svg/close-card.svg";
import noteMusic from "../public/assets/svg/note-music.svg";
import star from "../public/assets/svg/star.svg";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RepertoryCard({ song, author }) {
  return (
    <div className=" rounded-xl w-56 h-36 border border-[#EAEAEA] px-4 py-4 shadow-lg hover:-translate-y-1 hover:scale-110 duration-300">
      <section className=" flex flex-col gap-3">
        <button className=" place-self-end">
          <Image src={closeCard} alt="close" width={20} height={20} />
        </button>
        <div className=" flex gap-1 items-center">
          <Image src={noteMusic} alt="note" width={20} height={20} />
          <p className={`${lato.className} w-[160px] text-base truncate ...`}>
            {song}
          </p>
        </div>
        <div className=" flex gap-1 items-center">
          <Image src={star} alt="note" width={20} height={20} />
          <p className={`${lato.className} w-[160px] text-base truncate ...`}>
            {author}
          </p>
        </div>
      </section>
    </div>
  );
}
