import { Lato, Josefin_Sans } from "next/font/google";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useForm, Controller } from "react-hook-form";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import SelectGenreMusic from "@/components/SelectGenreMusic/SelectGenreMusic";
import SelectTypeEvents from "@/components/SelectGenreMusic/SelectTypeEvents";
import { Spinner, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Step3() {
  const router = useRouter();
  const userId = router.query.id;
  const [route, setRoute] = useState();
  const tokenObject = useTokenStore((state) => state.tokenObject);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      musicalGenre: "",
      eventType: "",
      description: "",
    },
  });

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        tokenFromLocalStorage.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      useTokenStore.setState({ tokenObject: payloadObject });
    }
  }, []);

  const onSubmit = (data) => {
    // e.preventDefault();
    setRoute(router.push(`/stepper/paso4/${userId}`));
    console.log(data);
    const response = fetch(`http://18.119.160.6:4000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventType: data.eventType.split(","),
        musicalGenre: data.musicalGenre.split(","),
        musicianType: data.musicianType,
        description: data.description,
      }),
    });
  };

  if (!userId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }
  //console.log(errors);

  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Cuéntanos sobre tu música
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col items-center mt-5">
            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3`}
            >
              ¿Cómo describirías la configuración musical del proyecto (Solista,
              Dúo, Grupo, Banda, etc.)?
            </p>
            <Select
              label="Tipo de artista"
              isRequired
              //autoFocus={true}
              variant="bordered"
              radius="sm"
              className={`w-[328px] h-14 md:w-[404px]`}
              //errorMessage={!errors.estado ? "" : "Debes elegir un Estado"}
              {...register("musicianType", { required: true })}
            >
              <SelectItem key={"Banda"}>Banda</SelectItem>
              <SelectItem key={"Solista"}>Duo</SelectItem>
              <SelectItem key={"Solista"}>Solista</SelectItem>
            </Select>

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuáles son los géneros musicales que interpretas? Selecciona al
              menos 1 opción y un máximo de 5.
            </p>

            <Controller
              name="musicalGenre"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <SelectGenreMusic
                  onChange={(val) => {
                    if (Array.isArray(val)) {
                      onChange(val.join(","));
                    } else {
                      onChange(val);
                    }
                  }}
                  selectedKeys={value ? value.split(",") : []}
                  // width="w-[328px] lg:w-[30rem]"
                />
              )}
            />

            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              ¿Cuáles son los tipos de eventos a los que asistes?
            </p>
            <Controller
              name="eventType"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <SelectTypeEvents
                  onChange={(val) => {
                    if (Array.isArray(val)) {
                      onChange(val.join(","));
                    } else {
                      onChange(val);
                    }
                  }}
                  selectedKeys={value ? value.split(",") : []}
                  // width="w-[328px] lg:w-[30rem]"
                />
              )}
            />
            <p
              className={`${lato.className} text-start text-[#455A64] w-[328px] md:w-full md:text-center pb-3 mt-5`}
            >
              Danos una descripción de tu proyecto músical, esto aparecerá en la
              información de tu perfil que verán los clientes
            </p>
            <Textarea
              variant="bordered"
              isRequired
              label="Descripción"
              placeholder="Cuentanos sobre ti"
              description="200 caracteres como máximo, solo texto simple."
              className="w-full"
              {...register("description")}
            />

            <ButtonsStepper
              mTop={"mt-[60px]"}
              step={"3"}
              stepBack={`/stepper/paso2/${userId}`}
              stepNext={`/stepper/paso4/${userId}`}
            />
          </div>
        </form>
      </section>
    </StepperLayout>
  );
}
