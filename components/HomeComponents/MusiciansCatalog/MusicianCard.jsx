import { Josefin_Sans, Lato } from "next/font/google";
import Link from "next/link";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MusicianCard(props) {
  return (
    <div className="bg-[#312971] flex flex-col w-[200px] sm:w-[200px] md:w-[300px] pb-2 rounded-lg lg:w-[324px]  ">
      <div id="imgContainer" className=" h-[120px]  rounded-lg  ">
        <img
          src={props.imgProfile}
          alt=""
          className=" rounded-lg w-[250px] h-[250px]  sm:w-[250px] sm:h-[250] md:w-[324px] md:h-[300px] object-cover  pb-4"
        />
      </div>
      <h2
        className={`text-white text-[14px] font-medium px-[16px] pt-[120px] sm:pt-[120px] md:w-[200px] md:h-[22px] md:pt-[170px]  ${lato.className}`}
      >
        {props.name}
      </h2>
      <h2
        className={`text-white text-[14px] font-medium h-[22px] px-[16px]  pb-[0px]   md:w-[250px] md:py-[17px] ${lato.className}`}
      >
        {props.state}
      </h2>
      <div
        className={`flex w-[168px] px-[16px] py-[16px]  gap-[8px] text-[14px] font-normal ${lato.className}`}
      >
        <a
          href=""
          className="bg-[#081540] text-[#00E8E7] rounded-2xl w-fit px-2"
        >
          {props.chip1}
        </a>
        <a
          href=""
          className="bg-[#081540] text-[#00E8E7] rounded-2xl w-fit px-2"
        >
          {props.chip2}
        </a>
      </div>
      <div
        id="pinkButton"
        className=" px-[16px] pb-[36px] flex  sm:w-[200px] sm:ps-2 md:ps-3 md:w-96   "
      >
        <Link href={`/informacion-musico/${props.id}`}>
          <button className="text-white rounded-lg bg-[#EE0075] w-[168px] h-[25px]  pb-[36px] flex flex-row justify-center sm:w-[180px] lg:w-[292px]  lg:px-[16px]  ">
            <h2
              className={` text-[14px] font-normal sm:pt-2 sm:px-2 ${lato.className} `}
            >
              INFORMACIÓN
            </h2>
          </button>
        </Link>
      </div>
    </div>
  );
}
