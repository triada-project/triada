import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function BlueNumbers(props) {
  return (
    <div className="flex flex-col    lg:pt-5 lg:gap-6   ">
      <h1
        className={`text-[#29FEFD] flex pl-0 lg:w-4 lg:h-4 text-3xl sm:text-xl font-semibold lg:text-4xl lg:pl-1 ${lato.className}`}
      >
        {props.numbers}
      </h1>
      <h2
        className={` text-white flex w-[65px] text-lg text-center font-normal sm:text-sm  lg:text-3xl  ${lato.className}`}
      >
        {props.title}
      </h2>
    </div>
  );
}
