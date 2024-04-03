import { Josefin_Sans, Lato } from "next/font/google";
import OptionalInputs from "./OptionalInputs";
import MusicianCard from "./MusicianCard";
import InvisibleMusicianCard from "./InvisibleMusicianCard";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function MusicianCatalog() {
  return (
    <section id="musicianCatalog" className="bg-[#081540] px-[16px]">
      <h1
        className={`text-white  text-center pt-[56px] text-lg font-bold ${josefine.className}`}
      >
        Catalogo Musical
      </h1>
      <div className="flex flex-col justify-center sm:flex-row">
        <OptionalInputs
          placeholder="Tipo de evento"
          option1="Boda"
          option2="Cumpleaños"
          option3="XV años"
          option4="Bautizo"
          option5="Chill"
        />
        <OptionalInputs
          placeholder="Género"
          option1="Banda"
          option2="Cumbia"
          option3="Rock"
          option4="Norteño"
          option5="Jazz"
        />
        <OptionalInputs
          placeholder="Localidad"
          option1="Monterrey"
          option2="Guadalajara"
          option3="CdMx"
          option4="Zihuatanejo"
          option5="León"
        />
        <div
          id="pinkButton"
          className="pt-[19px] pb-[16px] flex justify-around sm:w-10 sm:mt-3  "
        >
          <button className="rounded-lg bg-[#EE0075] w-[435px] h-[35px] flex flex-row justify-center gap-[18px]  text-white">
            <h2 className="pt-1 sm:hidden">Buscar</h2>
            <a href="" className="pt-1">
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
      <div
        id="cardsContainer"
        className="  flex flex-col pt-[62px] gap-3 sm:flex-row sm:flex-wrap place-items-center     "
      >
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
          className={"hidden"}
        />
        <MusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
        <InvisibleMusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
        <InvisibleMusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
        <InvisibleMusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="clasica"
        />
        <InvisibleMusicianCard
          musician="the beetles"
          locality="Los angeles, USA"
          chip1="jazz"
          chip2="classic"
        />
      </div>
    </section>
  );
}
