import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MusicianCard(props) {
  return (
    <div className="bg-[#312971] flex flex-col w-[200px] sm:w-[200px] md:w-[300px] pb-2 rounded-lg lg:w-[324px]  ">
      <div id="imgContainer" className=" h-[120px]  ">
        <img
          src="/assets/images/_CardMedia_.png"
          alt=""
          className="md:w-[324px]"
        />
      </div>
      <h2
        className={`text-white w-[168px] h-[22px] px-[16px] pt-[16px] text-[14px] font-medium  md:pt-24 ${lato.className}`}
      >
        {props.musician}
      </h2>
      <h2
        className={`text-white  w-[168px] h-[22px] px-[16px] py-[16px]  text-[14px] font-medium ${lato.className}`}
      >
        {props.locality}
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
        <button className="text-white rounded-lg bg-[#EE0075] w-[168px] h-[25px]  pb-[36px] flex flex-row justify-center sm:w-[180px] lg:w-[292px]  lg:px-[16px]  ">
          <h2
            className={` text-[14px] font-normal sm:pt-2 sm:px-2 ${lato.className} `}
          >
            INFORMACIÓN
          </h2>
        </button>
      </div>
    </div>
  );
}
