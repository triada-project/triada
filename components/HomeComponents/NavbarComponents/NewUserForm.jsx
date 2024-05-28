import { useForm } from "react-hook-form";
import { Josefin_Sans, Lato } from "next/font/google";
import { Checkbox } from "@nextui-org/react";
import Swal from "sweetalert2";
import ClientOrMusician from "./ClientOrMusician";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function NewUserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const password2 = watch("password2");

  async function onSubmit(data) {
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        role: data.role,
        name: data.name,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Usuario creado con éxito, te hemos enviado un correo y verifica tu cuenta.",
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
        
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario no creado, inténtalo de nuevo",
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
      });
    }
  }

  return (
    <>
      <div className="flex ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px] w-[331px] lg:w-[387px]"
        >
          <div className="flex flex-col gap-2">
            <div
              className={`flex flex-col justify-start items-center text-[24px] font-bold lg:text-[32px] lg:items-start ${josefine.className}`}
            >
              Crea una cuenta
            </div>
            <section
              htmlFor="TipoDeCuenta"
              className="flex flex-col justify-center items-center py-[15px] sm:items-start"
            >
              <p
                className={`text-[16px] font-bold flex  ${josefine.className}`}
              >
                Tipo de cuenta
              </p>
              <div className="flex gap-5">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="Cliente"
                    name="tipoDeCuenta"
                    value="cliente"
                    {...register("role", { required: true })}
                  />
                  <label
                    htmlFor="Cliente"
                    className={`text-[16px] ${lato.className}`}
                  >
                    Cliente
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="Musician"
                    name="tipoDeCuenta"
                    value="musico"
                    {...register("role", { required: true })}
                  />
                  <label
                    htmlFor="Musician"
                    className={`text-[16px] ${lato.className}`}
                  >
                    Músico
                  </label>
                </div>
              </div>
              {errors.role?.type === "required" && (
                <p>Necesitamos saber el tipo de cuenta</p>
              )}
            </section>
            {/* <ClientOrMusician /> */}
            <label
              className={`pb-[8px] font-bold text-[16px] ${josefine.className}`}
            >
              Nombre del cliente / Proyecto musical
            </label>
            <input
              id="name"
              type="text"
              className="text-black w-[310px] sm:w-[365px] pl-2 h-[40px] rounded-xl"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <p>Necesitamos tu nombre para continuar</p>
            )}

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
              <p>El campo correo electrónico es requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="">
                El formato del correo electrónico es incorrecto
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
              className="text-black pl-2 w-[310px] sm:w-[365px] h-[40px] rounded-xl"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password?.type === "required" && (
              <p>El campo contraseña es requerido</p>
            )}
            {errors.password?.type === "pattern" && (
              <p>
                La contraseña requiere al menos un dígito, una minúscula y una
                mayúscula
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p>La contraseña requiere al menos 6 caracteres</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p>La contraseña solo puede incluir hasta 12 caracteres</p>
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
              className="text-black pl-2 w-[310px] sm:w-[365px] h-[40px] rounded-xl"
              {...register("password2", {
                required: true,
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
                pattern: /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password2?.type === "required" && (
              <p>El campo confirmar contraseña es requerido</p>
            )}
            {errors.password2?.type === "validate" && (
              <p>Las contraseñas no coinciden</p>
            )}
            {errors.password2?.type === "pattern" && (
              <p>
                La contraseña requiere al menos un dígito, una minúscula y una
                mayúscula
              </p>
            )}
            {errors.password2?.type === "minLength" && (
              <p>La contraseña requiere al menos 6 caracteres</p>
            )}
            {errors.password2?.type === "maxLength" && (
              <p>La contraseña solo puede incluir hasta 12 caracteres</p>
            )}
          </div>

          <input
            type="submit"
            value="CREAR PERFIL"
            className={`bg-[#EE0075] rounded-xl font-semibold text-[18px] w-[310px] sm:w-[365px] h-[42px] ${josefine.className}`}
          />
        </form>
      </div>
    </>
  );
}
