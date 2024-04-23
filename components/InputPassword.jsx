import { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/public/assets/svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/assets/svg/EyeSlashFilledIcon";

export default function PasswordInput({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label={text}
      isRequired
      variant="bordered"
      radius="sm"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className={`w-[328px] h-14 lg:w-[30rem]`}
    />
  );
}
