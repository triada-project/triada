import { Josefin_Sans } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function MusicGenre(props) {
  return (
    <h3
      className={`text-white font-bold text-[14px] sm:-mt-20 md:-mt-0 md:text-[20px] ${josefine.className}`}
    >
      {props.genre}
    </h3>
  );
}
