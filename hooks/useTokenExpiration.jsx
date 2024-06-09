import { useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function useTokenExpiration() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        token.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      //console.log(payloadObject.exp);
      const expirationTime = payloadObject.exp * 1000; // Convertir a milisegundos

      const timeLeft = expirationTime - Date.now();

      if (timeLeft > 0) {
        setTimeout(() => {
          Swal.fire({
            icon: "warning",
            title: "Tu sesión ha expirado, por favor inicia sesión de nuevo.",
            timer: 5000,
          });
          localStorage.removeItem("token");
          router.push("/"); // Redirigir al login
        }, timeLeft);
      } else {
        // El token ya expiró, redirige inmediatamente
        localStorage.removeItem("token");
        router.push("/");
      }
    }
  }, []); // Ejecutar solo una vez al montar el componente
}
export default useTokenExpiration;
