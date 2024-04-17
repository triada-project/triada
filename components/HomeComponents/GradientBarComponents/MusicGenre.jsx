import { Josefin_Sans } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function MusicGenre(props) {
  return (
    <div className="pt-1 sm:pt-[30px] lg:pt-[40px]">
      <h3
        className={`text-white font-bold text-[14px]   md:-mt-0 md:text-[20px] ${josefine.className}`}
      >
        {props.genre}
      </h3>
    </div>
  );
}
