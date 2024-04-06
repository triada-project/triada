import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InfoCard4(props) {
  return (
    <Card className="w-[240px] sm:w-[308px]  lg:w-[282px] h-auto pb-4 bg-[#18244C] text-white   ">
      <CardHeader className="flex pt-8 justify-center">
        <a href="">
          <svg
            width="58"
            height="55"
            viewBox="0 0 58 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.32124V48.1924C10 50.7104 12.3022 52.3102 14.1981 51.1031L47.769 29.681C49.4103 28.6342 49.4103 25.8794 47.769 24.8326L14.1981 3.41048C12.3022 2.20343 10 3.8032 10 6.32124Z"
              stroke="#EE0075"
              stroke-width="3.59424"
              stroke-miterlimit="10"
            />
          </svg>
        </a>
      </CardHeader>
      <div
        className={`flex -mt-1 justify-center font-bold text-[16px] ${josefine.className}`}
      >
        <p>{props.titleCard}</p>
      </div>
      <div
        className={`flex pt-2 px-2 justify-center font-thin text-[14px] sm:px-[36px]  ${lato.className}`}
      >
        <p className="flex text-center text-balance ">{props.paragraph}</p>
      </div>
    </Card>
  );
}
