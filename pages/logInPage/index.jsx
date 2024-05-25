import React from "react";
import { Button, Checkbox, Link } from "@nextui-org/react";
import { Josefin_Sans, Lato } from "next/font/google";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import TiradaLogo from "/public/assets/svg/triada-logo.svg";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function LogInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (responseData?.token) {
      localStorage.setItem("token", responseData.token);
      router.push("/");
    } else {
      setError("root", { message: "Información incorrecta, prueba de nuevo." });
    }
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#9E1056] to-[#312971] text-white ${josefine.className}`}
    >
      <div className="w-full max-w-md px-6 py-8 border border-white rounded-lg shadow-lg bg-white text-black">
        <Image
          src={TiradaLogo}
          alt="Tirada Logo"
          className="mx-auto mb-6"
          width={150}
          height={150}
        />
        <h1
          id="getIn"
          className={`text-center text-3xl font-bold mb-6 ${josefine.className}`}
        >
          Iniciar sesión
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {errors.root && (
            <p className="bg-red-500/50 text-white w-full rounded-md p-2 border border-red-500">
              {errors.root?.message}
            </p>
          )}
          <div className="flex flex-col">
            <label className={`pb-2 font-bold text-lg ${josefine.className}`}>
              Correo Electrónico
            </label>
            <input
              type="text"
              className="text-black pl-2 h-10 rounded-xl border border-gray-300"
              {...register("email", {
                required: true,
                pattern: /^[^\s]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">
                El campo correo electrónico es requerido
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-500">
                El formato del correo electrónico es incorrecto
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className={`pb-2 font-bold text-lg ${josefine.className}`}>
              Contraseña
            </label>
            <input
              type="password"
              className="text-black pl-2 h-10 rounded-xl border border-gray-300"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">El campo contraseña es requerido</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                La contraseña requiere al menos un dígito, una minúscula y una
                mayúscula
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                La contraseña requiere al menos 6 caracteres
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500">
                La contraseña solo puede incluir hasta 12 caracteres
              </p>
            )}
          </div>
          <input
            type="submit"
            value="ACCEDER"
            className={`bg-[#EE0075] rounded-xl font-semibold text-white text-lg h-10 ${josefine.className}`}
          />
        </form>
        <div className="flex py-4 justify-between">
          <Checkbox classNames={{ label: "text-sm text-black" }}>
            Recuérdame
          </Checkbox>
          <Link color="primary" href="#" size="sm">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}
