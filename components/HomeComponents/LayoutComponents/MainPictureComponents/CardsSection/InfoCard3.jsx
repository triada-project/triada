import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function InfoCard3(props) {
  return (
    <Card className="max-w-[400px]  w-80 h-auto pb-4 bg-[#18244C] text-white   ">
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
              d="M13.4464 11.5968C9.98986 15.7127 8.05465 21.028 8.00132 26.5524C7.86996 39.1757 17.5366 49.5556 29.3763 49.5794C41.1994 49.6031 50.7513 39.3917 50.7513 26.7898C50.7513 14.3814 41.4499 4.28395 29.8773 4.00027C29.8122 3.99804 29.7473 4.00981 29.6865 4.03489C29.6257 4.05997 29.5703 4.09785 29.5236 4.14625C29.4768 4.19466 29.4397 4.25261 29.4144 4.31664C29.3891 4.38067 29.3762 4.44949 29.3763 4.51897V14.4455"
              stroke="#EE0075"
              stroke-width="3.4855"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.8583 29.4759L18.0633 16.0633C17.9417 15.8775 17.8852 15.6519 17.9039 15.4262C17.9226 15.2004 18.0152 14.9889 18.1655 14.8286C18.3158 14.6683 18.5142 14.5696 18.726 14.5497C18.9377 14.5298 19.1493 14.59 19.3236 14.7197L31.9036 24.0966C32.6753 24.6891 33.1971 25.5817 33.3562 26.5813C33.5154 27.5808 33.2991 28.607 32.7541 29.4378C32.2091 30.2686 31.3792 30.8373 30.444 31.0208C29.5088 31.2043 28.5434 30.9879 27.7567 30.4183C27.4088 30.1613 27.1049 29.8426 26.8583 29.4759Z"
              fill="#EE0075"
            />
          </svg>
        </a>
      </CardHeader>
      <div
        className={`flex -mt-1 justify-center font-bold ${josefine.className}`}
      >
        <p>{props.titleCard}</p>
      </div>
      <div className={`flex pt-2 justify-center font-thin  ${lato.className}`}>
        <p className="flex text-center text-balance ">{props.paragraph}</p>
      </div>
    </Card>
  );
}
