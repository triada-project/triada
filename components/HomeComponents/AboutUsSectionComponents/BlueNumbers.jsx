import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function BlueNumbers(props) {
  return (
    <div className="flex flex-col gap-[6px] items-center  lg:pt-5 lg:gap-6   ">
      <h1
        className={`text-[#29FEFD] flex font-bold text-[20px]  lg:w-4 lg:h-4 sm:text-[12px] lg:text-4xl lg:pl-1 ${lato.className}`}
      >
        {props.numbers}
      </h1>
      <h2
        className={` text-white flex w-[60px] text-[12px] text-center font-normal sm:text-[12px]  lg:text-3xl  ${lato.className}`}
      >
        {props.title}
      </h2>
    </div>
  );
}
