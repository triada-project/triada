import { Card, CardHeader } from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InfoCard(props) {
  return (
    <Card className="  w-[240px] sm:w-[308px]  lg:w-[282px] h-auto pb-4 bg-[#18244C] text-white   ">
      <CardHeader className="flex pt-8 justify-center">
        <a href="">
          <svg
            className="justify-center"
            width="58"
            height="55"
            viewBox="0 0 58 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1875 49.9375H35.4375M44.625 22.4324V27.0109C44.625 34.5561 36.8577 40.6926 29.3125 40.6926C21.7673 40.6926 14 34.5561 14 27.0109V22.4324M29.3125 40.75V49.9375"
              stroke="#EE0075"
              stroke-width="6.17788"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.5 13.1875C38.5 8.11338 34.3866 4 29.3125 4C24.2384 4 20.125 8.11338 20.125 13.1875V25.4375C20.125 30.5116 24.2384 34.625 29.3125 34.625C34.3866 34.625 38.5 30.5116 38.5 25.4375V13.1875Z"
              fill="#EE0075"
            />
          </svg>
        </a>
      </CardHeader>
      <div
        className={`flex -mt-1 justify-center font-bold text-[16px]  ${josefine.className}`}
      >
        <p>{props.titleCard}</p>
      </div>
      <div
        className={`flex pt-2 justify-center font-thin text-[14px] sm:px-[36px]    ${lato.className}`}
      >
        <p className="flex text-center text-balance ">{props.paragraph}</p>
      </div>
    </Card>
  );
}
