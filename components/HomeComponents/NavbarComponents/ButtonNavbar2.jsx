import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ButtonNavbar2(props) {
  return (
    <Button
      className={`hidden sm:flex font-semibold rounded-md  px-8 bg-[#29FEFD] text-[#081540] hover:bg-[#71269C] ${josefine.className} `}
      as={Link}
      href={props.href}
    >
      {props.nameButton}
    </Button>
  );
}
