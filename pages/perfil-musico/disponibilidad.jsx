import MenuMobileMusician from "@/components/profile-musician/MenuMobileMusician.jsx";
import AsideMusico from "@/components/profile-musician/AsideMusico.jsx";
import { Josefin_Sans, Lato } from "next/font/google";
import { Checkbox } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import ButtonPink from "../../components/musicianLanding/ButtonPink";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PerfilMusico() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <MenuMobileMusician page="disponibilidad" role="musico" />
      <main className=" overflow-y-auto shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] bg-white  flex flex-col items-center m-auto sm:grid sm:grid-cols-[245px_minmax(245px,_1fr)]">
        <AsideMusico page="disponibilidad" />
        <section className=" w-[90%] flex flex-col items-center sm:col-start-2 sm:col-span-1 sm:h-screen sm:w-[80%] sm:ml-11 lg:ml-[72px] lg:items-start ">
          <h1
            className={`${josefine.className} text-black text-xl font-semibold my-10 sm:text-[28px] lg:mt-[4.5rem] `}
          >
            Disponibilidad
          </h1>
          <p className={`${lato.className} text-[#455A64]`}>
            Selecciona tus horarios de trabajo para que los clientes puedan
            verlos y reservarlos.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-2 rounded-lg p-5 flex flex-col  lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py- lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Lunes</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Martes</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Miércoles</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Jueves</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Viernes</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Sábado</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <div className="w-24">
                  <Checkbox isDisabled>Domingo</Checkbox>
                </div>
                <div className="flex gap-2">
                  <Select
                    label="Hora de inicio"
                    isRequired
                    //autoFocus={true}
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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

                  <Select
                    label="Hora de fin"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="w-32"
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
                </div>
              </div>
              <div className="mt-5 w-full flex justify-center">
                <ButtonPink text="Actualizar" />
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
