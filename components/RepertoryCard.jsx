import closeCard from "../public/assets/svg/close-card.svg";
import noteMusic from "../public/assets/svg/note-music.svg";
import star from "../public/assets/svg/star.svg";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RepertoryCard() {
  return (
    <div className=" w-56 h-36 border border-[#EAEAEA] px-4 py-4">
      <section className=" flex flex-col gap-3">
        <Image
          src={closeCard}
          alt="close"
          width={20}
          height={20}
          className=" place-self-end"
        />
        <div className=" flex gap-1 items-center">
          <Image src={noteMusic} alt="note" width={20} height={20} />
          <p className={`${lato.className} text-base`}>Enter Sandman</p>
        </div>
        <div className=" flex gap-1 items-center">
          <Image src={star} alt="note" width={20} height={20} />
          <p className={`${lato.className} text-base`}>Metallica</p>
        </div>
      </section>
    </div>
  );
}
