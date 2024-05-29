import Image from "next/image";
import { Lato, Josefin_Sans } from "next/font/google";
import UpdateCardPicture from "@/components/UpdateCardPicture";
import ButtonsStepper from "@/components/stepperComponents/ButtonsStepper";
import FooterMain from "@/components/footer/footer";
import StepperLayout from "@/components/stepperComponents/StepperLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function Stepper() {
  const router = useRouter();
  const userId = router.query.id;
  const [userData, setUserData] = useState(null);

  console.log(userId);
  console.log(userData, "STEPPER");

  useEffect(() => {
    if (userId) {
      // Realiza la solicitud fetch para obtener los datos del usuario
      fetch(`http://localhost:4000/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // Almacena los datos del usuario en el estado local
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // Maneja el error si la solicitud falla
        });
    }
  }, [userId]); // Ejecuta el efecto solo cuando cambia userId

  // useEffect(() => {
  //   if (userData) {
  //     const response = fetch(`http://localhost:3500/auth/login`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email: userData.email,
  //         password: userData.password,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (response.json()?.token) {
  //       localStorage.setItem("token", response.json()?.token);
  //     } else {
  //       setError("root", {
  //         message: "Información incorrecta, prueba de nuevo.",
  //       });
  //     }
  //   }
  // }, [userData]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/login/verify", {
        // Corrección en la ruta
        method: "POST",
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        // Redirigir a otra página después del login exitoso (opcional)
      } else {
        console.error("Credenciales incorrectas"); // Establecer mensaje de error
      }
    } catch (error) {
      console.error("Error en el login:", error);
      // setError("Error al iniciar sesión"); // Establecer mensaje de error
    }
  };

  useEffect(() => {
    if (userData) {
      handleLogin(); // Llama a la función de login cuando se cargan los datos
    }
  }, [userData]);

  if (!userData) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <StepperLayout>
      <section className=" w-[330px] mt-14 md:w-[404px] flex flex-col items-center">
        <h2
          className={`${josefine.className} text-xl text-center font-semibold md:text-3xl `}
        >
          Carga una imagen de perfil
        </h2>
        <p
          className={`${lato.className} text-start text-[#455A64] w-[328px] mt-3 md:w-full md:text-center`}
        >
          Esta será la imagen principal que se mostrará al público
        </p>
        <UpdateCardPicture userData={userData} />
        <ButtonsStepper
          mTop={"mt-[60px]"}
          step={"1"}
          stepBack={"/stepper"}
          stepNext={"/stepper/paso2"}
        />
      </section>
    </StepperLayout>
  );
}
