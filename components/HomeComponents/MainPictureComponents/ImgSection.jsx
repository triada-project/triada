import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ImgSection() {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/assets/images/header-picture.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        id="titleContainer "
        className="sm:pt-10 sm:pl-1 md:pt-10 md:pl-16 lg:pt-10 lg:pl-20 xl:pt-10 xl:pl-4 "
      >
        <p
          className={`pt-40 pl-40 sm:text-6xl md:text-6xl lg:text-6xl font-bold leading-normal text-white xl:text-7xl ${josefine.className}`}
        >
          Armoniza tus <br /> eventos y conecta <br /> con la{" "}
          <span className="  leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE]">
            {" "}
            MÚSICA
          </span>
        </p>
        <h2
          className={`xl:text-2xl pt-2 pl-40 font-bold leading-normal text-white ${josefine.className}`}
        >
          ¡Encuentra la mejor música para tu <br />
          evento especial!
        </h2>
        <div className="pt-4 pl-40 ">
          <button
            className={`px-1 py-1 rounded-3xl bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE] text-xl font-semibold ${josefine.className}`}
          >
            <h1 className=" py-2 flex gap-24 bg-gradient-to-r from-[#3F1150] to-[#184673] rounded-3xl px-5 text-[#29FEFD]">
              {" "}
              Ver músicos{" "}
              <a href="">
                <svg
                  className=""
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.72-4.719a.752.752 0 0 1 .53-1.282.751.751 0 0 1 .532.22l6 6a.748.748 0 0 1 0 1.062l-6 6a.752.752 0 0 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12Z"
                    fill="#29FEFD"
                  />
                </svg>
              </a>
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
