import { Josefin_Sans, Lato } from "next/font/google";
import OptionalInputs from "./OptionalInputs";
import MusicianCard from "./MusicianCard";
import MusiciansCardsContainer from "./MusiciansCardsContainer";
import SelectHomeEvents from "../SelectHomeEvents";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MusicianCatalog() {
  return (
    <>
      <section
        id="musicianCatalog"
        className="bg-[#081540] py-[56px] px-[16px] flex flex-col sm:px-0 lg:w-[1440px] "
      >
        <div id="titleContainer ">
          <h1
            className={`text-white text-center text-[15px] font-bold lg:text-[40px]  ${josefine.className}`}
          >
            Catálogo Musical
          </h1>
        </div>
        <div
          id="inputsContainer"
          className="flex flex-col pt-[19px] gap-[19px] justify-center sm:w-[744px] sm:px-[56px] sm:pt-[35px] sm:flex-row lg:w-[1440px] lg:px-[183px]"
        >
          <SelectHomeEvents selectType="home" />
          <SelectHomeEvents selectType="home" />
          <SelectHomeEvents selectType="home" />

          <div
            id="pinkButton"
            className="pt-[19px] pb-[64px]  px-[16px] w-[330px] h-[40px] flex justify-around sm:pt-[12px] sm:pb-0 sm:px-0 lg:w-[68px] lg:h-[61px] lg:pt-2 "
          >
            <button className="text-white rounded-lg bg-[#EE0075] w-[328px] h-[35px] flex flex-row sm:w-[50px] justify-center gap-[18px] lg:h-[45px] ">
              <h2
                className={`pt-[6px] font-bold text-[14px] sm:hidden  ${josefine.className} `}
              >
                Buscar
              </h2>
              <a href="" className="pt-2">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M17.612 16.016a9.75 9.75 0 1 0-2.095 2.097h-.002c.044.06.093.118.147.173l5.775 5.775a1.5 1.5 0 1 0 2.123-2.121l-5.775-5.775a1.497 1.497 0 0 0-.173-.149ZM18 10.25a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(0 .5)"
                        d="M0 0h24v24H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </section>

      <MusiciansCardsContainer />
      <div className="bg-[#081540] -mt-12 pe-[17px] sm:w-[744px] flex justify-end sm:pe-[35px] sm:-mt-0  sm:pt-[5px] lg:w-[1440px] lg:pe-[80px] lg:-mt-12 lg:pb-2">
        <img
          src="/assets/images/GradientCircle.png"
          alt=""
          className="w-[48px] h-[48px] "
        />
      </div>
    </>
  );
}
