import { Button } from "@nextui-org/react";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ButtonPink(props) {
  return (
    <Button
      type={props.type}
      className={` bg-[#EF107D] text-white ${props.width} h-[50px] rounded text-base ${lato.className} ${props.mtop} `}
    >
      {props.text}
    </Button>
  );
}
