import { useForm } from "react-hook-form";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function LogInForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px]"
      >
        <div className="flex flex-col ">
          <label
            className={`pb-[8px] font-bold text-[16px] ${josefine.className}`}
          >
            Correo Electrónico
          </label>
          <input
            type="text"
            className="text-black  pl-2 h-[40px] rounded-xl"
            {...register("email", {
              required: true,
              pattern: /^[^\s]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <p> El campo correo Electronico es requerido</p>
          )}
          {errors.email?.type === "pattern" && (
            <p> El formato del correo electronico es incorrecto</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className={`pb-[8px] font-bold text-[16px] ${josefine.className}`}
          >
            Contraseña
          </label>
          <input
            type="password"
            className="text-black  pl-2 h-[40px] rounded-xl"
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

        <input
          type="submit"
          value="ACCEDER"
          className={`bg-[#EE0075] rounded-xl font-semibold text-[18px] h-[42px] ${josefine.className} `}
        />
      </form>
    </div>
  );
}
