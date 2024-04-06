import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InfoCard2(props) {
  return (
    <Card className="w-[240px] sm:w-[308px] lg:w-[282px] h-auto pb-4 bg-[#18244C] text-white   ">
      <CardHeader className="flex pt-8 justify-center">
        <a href="">
          <svg
            width="58"
            height="55"
            viewBox="0 0 58 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1227_8532)">
              <path
                d="M46.2188 10.8745H11.7813C8.27769 10.8745 5.4375 13.7147 5.4375 17.2183V40.7808C5.4375 44.2843 8.27769 47.1245 11.7813 47.1245H46.2188C49.7223 47.1245 52.5625 44.2843 52.5625 40.7808V17.2183C52.5625 13.7147 49.7223 10.8745 46.2188 10.8745Z"
                stroke="#EE0075"
                stroke-width="3.39296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.4375 21.7495H52.5625M14.5 33.9839H19.9375V36.2495H14.5V33.9839Z"
                stroke="#EE0075"
                stroke-width="6.3618"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1227_8532">
                <rect width="58" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </CardHeader>
      <div
        className={`flex -mt-1 justify-center font-bold text-[16px] ${josefine.className}`}
      >
        <p>{props.titleCard}</p>
      </div>
      <div
        className={`flex pt-2 px-4 justify-center font-thin text-[14px] sm:px-[36px]   ${lato.className}`}
      >
        <p className="flex text-center text-balance  ">{props.paragraph}</p>
      </div>
    </Card>
  );
}
