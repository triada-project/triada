import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ButtonNavbar1(props) {
  return (
    <Button
      className={`hidden lg:flex rounded-md px-8 font-normal border border-[#29FEFD] bg-inherit text-[#29FEFD] hover:bg-[#29FEFD] hover:text-black ${josefine.className}`}
      as={Link}
      href={props.href}
    >
      {props.nameButton}
    </Button>
  );
}
