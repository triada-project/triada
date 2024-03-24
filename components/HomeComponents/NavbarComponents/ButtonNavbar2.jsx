import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ButtonNavbar2(props) {
  return (
    <Button
      className="hidden sm:flex font-medium bg-[#29FEFD] text-[#081540] hover:bg-[#29fefeb0]"
      as={Link}
      href={props.href}
    >
      {props.nameButton}
    </Button>
  );
}
