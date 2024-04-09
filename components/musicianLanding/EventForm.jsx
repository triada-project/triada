import { Josefin_Sans, Lato } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@nextui-org/react";
import Image from "next/image";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";
import ButtonPink from "./ButtonPink";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="border-2 rounded-lg p-5 mt-10flex flex-col  lg:border lg:border-[#717171] lg:rounded lg:px-5 lg:py- lg:border-opacity-25 lg:shadow-lg lg:items-start lg:mt-[67px]">
      <h1 className="{`${roboto.classname} text-[#312971] text-2xl text-center font-bold sm:text-[30px]">
        Inicia la reservación para tu evento aquí
      </h1>
      <div className="border border-blue-700 bg-blue-100 rounded-md mt-5 flex ">
        <div>
          <Image
            src={info_FILL1}
            alt="info"
            width={20}
            height={20}
            className="ml-2 mt-2 mr-5"
          />
        </div>
        <div>
          <p className="text-blue-700 flex-auto text-center p-2">
            Disponible Jueves de 16:00 a 22:00 Viernes de 16:00 a 22:00 Sábado
            de 16:00 a 22:00
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:gap-4 w-full">
          <span className="  gap-2 w-1/2">
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 mb-2 sm:text-[20px]">
              Elige una fecha
            </h2>
            <div className="flex gap-2">
              <Select
                label="Día"
                isRequired
                //autoFocus={true}
                variant="bordered"
                radius="sm"
                className={` `}
                //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
                {...register("startHour", { required: true })}
              >
                <SelectItem key={"1"}>1</SelectItem>
                <SelectItem key={"2"}>2</SelectItem>
                <SelectItem key={"3"}>3</SelectItem>
                <SelectItem key={"4"}>4</SelectItem>
                <SelectItem key={"5"}>5</SelectItem>
                <SelectItem key={"6"}>6</SelectItem>
                <SelectItem key={"7"}>7</SelectItem>
                <SelectItem key={"8"}>8</SelectItem>
                <SelectItem key={"9"}>9</SelectItem>
                <SelectItem key={"10"}>10</SelectItem>
                <SelectItem key={"11"}>11</SelectItem>
                <SelectItem key={"12"}>12</SelectItem>
                <SelectItem key={"13"}>13</SelectItem>
                <SelectItem key={"14"}>14</SelectItem>
                <SelectItem key={"15"}>15</SelectItem>
                <SelectItem key={"16"}>16</SelectItem>
                <SelectItem key={"17"}>17</SelectItem>
                <SelectItem key={"18"}>18</SelectItem>
                <SelectItem key={"19"}>19</SelectItem>
                <SelectItem key={"20"}>20</SelectItem>
                <SelectItem key={"21"}>21</SelectItem>
                <SelectItem key={"22"}>22</SelectItem>
                <SelectItem key={"23"}>23</SelectItem>
                <SelectItem key={"24"}>24</SelectItem>
                <SelectItem key={"25"}>25</SelectItem>
                <SelectItem key={"26"}>26</SelectItem>
                <SelectItem key={"27"}>27</SelectItem>
                <SelectItem key={"28"}>28</SelectItem>
                <SelectItem key={"29"}>29</SelectItem>
                <SelectItem key={"30"}>30</SelectItem>
                <SelectItem key={"31"}>31</SelectItem>
              </Select>

              <Select
                label="Mes"
                isRequired
                variant="bordered"
                radius="sm"
                className=""
                {...register("endHour")}
              >
                <SelectItem key={"Enero"}>Enero</SelectItem>
                <SelectItem key={"Febrero"}>Febrero</SelectItem>
                <SelectItem key={"Marzo"}>Marzo</SelectItem>
                <SelectItem key={"Abril"}>Abril</SelectItem>
                <SelectItem key={"Mayo"}>Mayo</SelectItem>
                <SelectItem key={"Junio"}>Junio</SelectItem>
                <SelectItem key={"Julio"}>julio</SelectItem>
                <SelectItem key={"Agost"}>Agosto</SelectItem>
                <SelectItem key={"Septiembre"}>Septiembre</SelectItem>
                <SelectItem key={"Octubre"}>Octubre</SelectItem>
                <SelectItem key={"Noviembre"}>Noviembre</SelectItem>
                <SelectItem key={"Diciembre"}>Diciembre</SelectItem>
              </Select>

              <Select
                label="Año"
                isRequired
                variant="bordered"
                radius="sm"
                className=" "
                {...register("endHour")}
              >
                <SelectItem key={"2024"}>2024</SelectItem>
                <SelectItem key={"2025"}>2025</SelectItem>
                <SelectItem key={"2026"}>2026</SelectItem>
                <SelectItem key={"2027"}>2027</SelectItem>
                <SelectItem key={"2028"}>2028</SelectItem>
                <SelectItem key={"2029"}>2029</SelectItem>
                <SelectItem key={"2030"}>2030</SelectItem>
              </Select>
            </div>
          </span>
          <span className="items-center gap-2 w-1/2">
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 mb-2 sm:text-[20px]">
              Elige el horario
            </h2>
            <div className="flex gap-2">
              <Select
                label="Hora de inicio"
                isRequired
                //autoFocus={true}
                variant="bordered"
                radius="sm"
                className={``}
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
                className=""
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
          </span>
        </div>
        <h2 className="{`${josefin.classname} text-[#37474F] mt-5 m-b font-semibold sm:text-[20px]">
          Detalles del evento
        </h2>
        <div className=" flex flex-col items-center gap-5 mt-5">
          <div className="sm:flex gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Colonia"
              {...register("colonia")}
              className="sm:w-1/2"
            />
            <Input
              variant="bordered"
              radius="sm"
              label="Código postal"
              {...register("cp")}
              className="sm:w-1/2 mt-5 sm:mt-0"
            />
          </div>
          <div className="sm:flex items-center gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Referencia"
              {...register("referencia")}
            />
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Teléfono"
              {...register("telefono")}
              className="mt-5 sm:mt-0"
            />
          </div>
          <div className="sm:flex items-center gap-4 w-full">
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Nombre de evento"
              {...register("eventName")}
            />
            <Input
              isRequired
              variant="bordered"
              radius="sm"
              label="Tipo de evento"
              {...register("eventType")}
              className="mt-5 sm:mt-0"
            />
          </div>
          <div className="text-black w-full divide-y divide-[#455A64]">
            <h2 className="{`${josefin.classname} text-[#37474F] font-semibold sm:text-[20px]">
              Resumen
            </h2>
            <div className="flex">
              <p className="w-1/2">Horas contratadas</p>
              <p className="w-1/2 text-right">00</p>
            </div>
            <div className="flex">
              <p className="w-2/3">Total de reservación</p>
              <p className="w-1/3 text-right">$00.000.00</p>
            </div>
          </div>
          <Checkbox>Acepto términos y condiciones</Checkbox>
          <ButtonPink
            width="w-[280px] lg:w-[30rem]"
            text="Pagar"
            type="submit"
          />
          <div className="border border-blue-700 bg-blue-100 rounded-md  flex">
            <div>
              <Image
                src={info_FILL1}
                alt="info"
                width={20}
                height={20}
                className="ml-2 mt-2 mr-5"
              />
            </div>
            <div>
              <p className="text-blue-700 flex-auto text-center p-2">
                Al terminar tu proceso de compra, tu dinero estará protegido sin
                cobrarse. Si el artista acepta tu reservación se cobrará el día
                del evento mediante un código que te haremos llegar. Si el
                artista rechaza la reservación, se te devolverá integro.
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
