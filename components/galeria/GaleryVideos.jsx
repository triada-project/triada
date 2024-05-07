import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import ButtonPink from "./ButtonPink";
import CardVideos from "./CardVideos";

export default function GaleryVideos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
        Videos
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 items-center w-full mt-2 mt-5"
      >
        <Input
          isRequired
          variant="bordered"
          radius="sm"
          label="URL"
          {...register("URL")}
          className=""
        />
        <ButtonPink
          width="w-[140px] lg:w-[30rem]"
          text="Agregar"
          type="submit"
          className=""
        />
      </form>
      <CardVideos />
    </>
  );
}
