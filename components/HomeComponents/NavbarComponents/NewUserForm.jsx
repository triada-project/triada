import { useForm } from "react-hook-form";
import { Josefin_Sans, Lato } from "next/font/google";
import ClientOrMusician from "./ClientOrMusician";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function NewUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3007/users", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        password2: data.password2,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("User was created");
    } else {
      alert("User was not created, try again");
    }
  }

  return (
    <>
      <div className="flex ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px] w-[331px] lg:w-[387px]"
        >
          <div className="flex flex-col  ">
            <div
              className={`flex flex-col justify-start items-center text-[24px]   font-bold lg:text-[32px] lg:items-start ${josefine.className} `}
            >
              Crea una cuenta
            </div>
            <ClientOrMusician />
            <label
              className={`pb-[8px] font-bold text-[16px] ${josefine.className}`}
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="text"
              className="text-black w-[310px] sm:w-[365px] pl-2 h-[40px] rounded-xl"
              {...register("email", {
                required: true,
                pattern: /^[^\s]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-lime-500 text-xs">
                {" "}
                El campo correo Electronico es requerido
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-lime-500 text-xs">
                {" "}
                El formato del correo electronico es incorrecto
              </p>
            )}
          </div>
          <div id="containerPassword1" className="flex flex-col">
            <label
              className={`pb-[8px] font-bold text-[16px] ${josefine.className}`}
            >
              Contraseña
            </label>
            <input
              id="password1"
              type="password"
              className="text-black  pl-2 w-[310px] sm:w-[365px] h-[40px] rounded-xl"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password?.type === "required" && (
              <p> El campo contraseña es requerido</p>
            )}
            {errors.password?.type === "pattern" && (
              <p>
                {" "}
                La contraseña requiere al menos un dígito, una minúscula y una
                mayúscula
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p> La contraseña requiere al menos 6 caracteres</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p> La contraseña solo puede incluir hasta 12 caracteres</p>
            )}
          </div>
          <div id="containerPassword2" className="flex flex-col">
            <label
              className={`pb-[8px] font-bold text-[16px] ${josefine.className}`}
            >
              Confirmar contraseña
            </label>
            <input
              id="password2"
              type="password"
              className="text-black  pl-2 w-[310px] sm:w-[365px] h-[40px] rounded-xl"
              {...register("password2", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password2?.type === "required" && (
              <p> El campo confirmar contraseña es requerido</p>
            )}
            {errors.password2?.type === "pattern" && (
              <p>
                {" "}
                La contraseña requiere al menos un dígito, una minúscula y una
                mayúscula
              </p>
            )}
            {errors.password2?.type === "minLength" && (
              <p> La contraseña requiere al menos 6 caracteres</p>
            )}
            {errors.password2?.type === "maxLength" && (
              <p> La contraseña solo puede incluir hasta 12 caracteres</p>
            )}
          </div>

          <input
            type="submit"
            value="CREAR PERFIL"
            className={`bg-[#EE0075] rounded-xl font-semibold text-[18px] w-[310px] sm:w-[365px] h-[42px] ${josefine.className} `}
          />
        </form>
      </div>
    </>
  );
}
