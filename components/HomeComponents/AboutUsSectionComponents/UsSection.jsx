import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function UsSection() {
  return (
    <section>
      <div className="bg-[#081540] pb-8 rounded-none ">
        <img
          className="object-cover w-full h-60"
          // Puede ser esta classname, que opinan ustedes bg-cover
          src="/assets/images/picture-nosotros.webp"
          alt="microphoneUsSection"
        />
      </div>
      <div className="bg-[#081540] flex flex-col w-screen gap-3 py-14 px-24 text-center ">
        <h2
          className={`flex justify-center font-bold text-lg text-white ${josefine.className}`}
        >
          Nosotros
        </h2>
        <h3
          className={`flex text-balance text-white font-normal text-xl ${lato.className}`}
        >
          Te conectamos con una variedad de artistas musicales con los que
          encontrarás la combinación perfecta de sonidos para tu evento.
        </h3>
        <h3
          className={`flex pt-1 text-balance text-white font-normal text-xl  ${lato.className}`}
        >
          Únete a nosotros y haz que la música en vivo sea más accesible y
          emocionante para todos.
        </h3>
      </div>
    </section>
  );
}
