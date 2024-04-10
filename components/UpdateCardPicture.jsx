import Camera from "../public/assets/svg/camera.svg";
import Image from "next/image";
import { Lato } from "next/font/google";
import ButtonPink from "./perfil-cliente/ButtonPink";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function UpdateCardPicture() {
  return (
    <section className=" w-[328px] h-[302px] mt-11 bg-[#FAFAFA] border-dashed border-2 border-[#DEDEDE] rounded-3xl flex flex-col items-center pt-8 lg:w-[228px]">
      <div className=" w-[168px] h-[168px] rounded-full border-1 border-[#CFD8DC] bg-[#FFFFFF] flex justify-center items-center mx-20 lg:mx-[42px]">
        <figure className=" w-[144px] h-[144px] rounded-full bg-[#424242] opacity-70 flex flex-col items-center pt-9 gap-2">
          <Image src={Camera} className=" w-6 h-6" />
          <p
            href=""
            className={`text-sm text-white text-center w-24 ${lato.className}`}
          >
            Actualizar foto de perfil
          </p>
        </figure>
      </div>
      <ButtonPink width={"w-[150px]"} text={"Cargar imagen"} mtop="mt-5" />
    </section>
  );
}
