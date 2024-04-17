import React, { useState } from "react";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ClientOrMusician() {
  const [tipoDeCuenta, setTipoDeCuenta] = useState("");

  return (
    <>
      <form
        htmlFor="TipoDeCuenta"
        className="flex flex-col justify-center items-center py-[15px] sm:items-start"
      >
        <p className={`text-[16px] font-bold flex  ${josefine.className}`}>
          Tipo de cuenta
        </p>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <input
              type="radio"
              id="Cliente"
              name="tipoDeCuenta"
              value="Cliente"
              onChange={(e) => setTipoDeCuenta(e.target)}
            />
            <label
              htmlFor="Cliente"
              className={`text-[16px] ${lato.className}`}
            >
              Cliente
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="Musician"
              name="tipoDeCuenta"
              value="Musician"
              onChange={(e) => setTipoDeCuenta(e.target)}
            />
            <label
              htmlFor="Musician"
              className={`text-[16px] ${lato.className}`}
            >
              Músico
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
