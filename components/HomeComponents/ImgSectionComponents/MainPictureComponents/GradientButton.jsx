import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function GradientButton(props) {
  return (
    <div className="pl-20 pt-4 sm:pl-40 ">
      <button
        className={`px-1 py-1 rounded-3xl bg-gradient-to-r from-[#FF01C0] via-purple-500 to-[#01FFFE] text-xl font-semibold ${josefine.className}`}
      >
        <h1 className=" py-2 flex gap-24 bg-gradient-to-r from-[#3F1150] to-[#184673] rounded-3xl px-5 text-[#29FEFD]">
          {" "}
          {props.nameButton}{" "}
          <a href="">
            <svg
              className=""
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.72-4.719a.752.752 0 0 1 .53-1.282.751.751 0 0 1 .532.22l6 6a.748.748 0 0 1 0 1.062l-6 6a.752.752 0 0 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12Z"
                fill="#29FEFD"
              />
            </svg>
          </a>
        </h1>
      </button>
    </div>
  );
}
