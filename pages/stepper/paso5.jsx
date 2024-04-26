import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/buttonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import ButtonPink from "@/components/perfil-cliente/ButtonPink";
import RequestCard from "@/components/RequestCard";
import { useState } from "react";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step5() {
  const [requests, setRequests] = useState([]);
  const [text, setText] = useState("");
  const onInputChange = (event) => {
    setText(event.target.value);
  };

  //console.log(requests);

  const addRequest = () => {
    if (text.trim().length > 0) {
      setRequests([text, ...requests]);
      setText("");
    } else {
      alert("Ingresa un texto");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addRequest();
    }
  };

  const onDelete = (index) => {
    const newRequests = [...requests];
    newRequests.splice(index, 1);
    setRequests(newRequests);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] lg:w-[500px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Datos de contratación y pago
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-5">
            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3`}
            >
              ¿Cúales son tus honorarios por hora evento?
            </p>
            <Input
              type="number"
              label="Ingresa aquí tus honorarios"
              isRequired
              placeholder="0.00"
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] lg:w-full`}
              {...register("song", { required: true })}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuántas horas máximo te pueden agendar por evento?
            </p>
            <Input
              type="number"
              label="Ingresa aquí las horas"
              isRequired
              placeholder="0"
              min={1}
              max={24}
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] lg:w-full`}
              {...register("song", { required: true })}
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Tienes requerimientos especiales para tu presentación? Dinos
              cuáles son (máximo 5):
            </p>
            <Input
              type="text"
              maxLength={100}
              onChange={onInputChange}
              value={text}
              onKeyDown={handleKeyDown}
              label="Escribe aquí el requerimiento"
              description="Límite 100 carateres por requerimiento."
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px] mb-7 lg:w-full`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              // {...register("request", { required: true })}
            />

            {/* <button onClick={addRequest}>Agregar</button> */}

            <ButtonPink
              onClick={addRequest}
              width="w-full"
              text="Agregar requerimiento"
              // type="submit"
            />
            {requests.map((request, index) => {
              return (
                <RequestCard
                  key={index}
                  text={request}
                  onDelete={() => onDelete(index)}
                />
              );
            })}
            {/* <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard /> */}
            <ButtonsStepper
              mTop={"mt-[60px]"}
              step={"5"}
              stepBack={"/stepper/paso2"}
              stepNext={"/stepper/paso4"}
            />
          </div>
        </form>
      </section>
    </StepperLayout>
  );
}