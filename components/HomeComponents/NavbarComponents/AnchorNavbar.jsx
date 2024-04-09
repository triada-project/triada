import Link from "next/link";

export default function AnchorNavbar(props) {
  return (
    <div>
      <Link className="text-white hover:underline " href={props.href}>
        {props.nameAnchor}
      </Link>
    </div>
  );
}
