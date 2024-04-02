import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
//import ButtonPink from "./ButtonPink";
import { useForm } from "react-hook-form";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function HoursForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-center items-center lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py-5 lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className=" flex items-center gap-2 mt-5">
          <Select
            label="Hora de inicio"
            isRequired
            //autoFocus={true}
            variant="bordered"
            radius="sm"
            className={`w-[135px] h-14 `}
            //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
            {...register("startHour", { required: true })}
          >
            <SelectItem key={"9:00"}>9:00</SelectItem>
            <SelectItem key={"10:00"}>10:00</SelectItem>
            <SelectItem key={"11:00"}>11:00</SelectItem>
            <SelectItem key={"12:00"}>12:00</SelectItem>
            <SelectItem key={"13:00"}>13:00</SelectItem>
            <SelectItem key={"14:00"}>14:00</SelectItem>
            <SelectItem key={"15:00"}>15:00</SelectItem>
            <SelectItem key={"16:00"}>16:00</SelectItem>
            <SelectItem key={"17:00"}>17:00</SelectItem>
            <SelectItem key={"18:00"}>18:00</SelectItem>
            <SelectItem key={"19:00"}>19:00</SelectItem>
            <SelectItem key={"20:00"}>20:00</SelectItem>
            <SelectItem key={"21:00"}>21:00</SelectItem>
            <SelectItem key={"22:00"}>22:00</SelectItem>
          </Select>
          {/* <div className=" text-tiny text-danger-50">
            Debes elegir un estado
          </div> */}
          <Select
            label="Hora de fin"
            isRequired
            variant="bordered"
            radius="sm"
            className=" w-[135px] h-14 "
            {...register("endHour")}
          >
            <SelectItem key={"10:00"}>10:00</SelectItem>
            <SelectItem key={"11:00"}>11:00</SelectItem>
            <SelectItem key={"12:00"}>12:00</SelectItem>
            <SelectItem key={"13:00"}>13:00</SelectItem>
            <SelectItem key={"14:00"}>14:00</SelectItem>
            <SelectItem key={"15:00"}>15:00</SelectItem>
            <SelectItem key={"16:00"}>16:00</SelectItem>
            <SelectItem key={"17:00"}>17:00</SelectItem>
            <SelectItem key={"18:00"}>18:00</SelectItem>
            <SelectItem key={"19:00"}>19:00</SelectItem>
            <SelectItem key={"20:00"}>20:00</SelectItem>
            <SelectItem key={"21:00"}>21:00</SelectItem>
            <SelectItem key={"22:00"}>22:00</SelectItem>
            <SelectItem key={"23:00"}>23:00</SelectItem>
          </Select>

          {/* <Button
            type="submit"
            className={` bg-[#EF107D] text-white w-[328px] h-[50px] rounded text-base ${lato.className} lg:w-[30rem]`}
          >
            Guardar
          </Button> 
          <ButtonPink
            width="w-[328px] lg:w-[30rem]"
            text="Guardar"
            type="submit"
            
          />*/}
        </span>
      </form>
    </section>
  );
}
