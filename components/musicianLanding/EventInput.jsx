import React from "react";
import Image from "next/image";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";
import HoursForm from "../../components/musicianLanding/HoursForm";
import EventForm from "../../components/musicianLanding/EventForm";

export default function EventInput() {
  return (
    <>
      <div className="border-2 rounded-lg p-5 mt-10">
        <h1 className="{`${roboto.classname} text-[#312971] text-2xl text-center font-bold sm:text-[30px]">
          Inicia la reservación para tu evento aquí
        </h1>
        <div>
          <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
            Elige una fecha
          </h2>

          <div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Elige el horario
            </h2>
            <div className="border border-blue-700 bg-blue-100 rounded-md mt-2 flex ">
              <div>
                <Image
                  src={info_FILL1}
                  alt="info"
                  width={20}
                  height={20}
                  className="ml-2 mt-2 mr-5"
                />
              </div>
              <div>
                <p className="text-blue-700 flex-auto text-center p-2">
                  Disponible Jueves de 16:00 a 22:00 Viernes de 16:00 a 22:00
                  Sábado de 16:00 a 22:00
                </p>
              </div>
            </div>
            <div>
              <HoursForm />
            </div>
            <div className="flex items-center mt-5">
              <p>Horas contratadas</p>
              <p className="ml-5">00</p>
            </div>
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
              Detalles del evento
            </h2>
            <div>
              <EventForm />
            </div>
            <div className="border border-blue-700 bg-blue-100 rounded-md mt-5 flex">
              <div>
                <Image
                  src={info_FILL1}
                  alt="info"
                  width={20}
                  height={20}
                  className="ml-2 mt-2 mr-5"
                />
              </div>
              <div>
                <p className="text-blue-700 flex-auto text-center p-2">
                  Al terminar tu proceso de compra tu dinero estará protegido
                  sin cobrarse, si el artista acepta tu reservación se cobrará
                  el día del evento mediante un código que te haremos llegar. Si
                  el artista rechaza la reservación, se te devolverá integro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
