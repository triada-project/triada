import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ButtonNavbar1(props) {
  return (
    <Button
      className="hidden sm:flex font-medium border border-[#29FEFD] bg-inherit text-[#29FEFD] hover:bg-[#29FEFD] hover:text-black"
      as={Link}
      href={props.href}
    >
      {props.nameButton}
    </Button>
  );
}
