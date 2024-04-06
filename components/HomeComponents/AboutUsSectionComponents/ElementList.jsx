import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ElementList(props) {
  return (
    <div className="flex  gap-[33px]    ">
      <div className="bg-[#29FEFD] rounded-full w-3 h-3 flex self-center lg:w-4 lg:h-4 "></div>
      <h2
        className={` text-white flex text-[14px] font-medium sm:text-sm lg:text-[18px]  ${lato.className}`}
      >
        {props.titleElement}
      </h2>
    </div>
  );
}
