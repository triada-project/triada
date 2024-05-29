import NavBar from "@/components/Navbar";
import React from "react";
import FooterMain from "@/components/footer/footer";

export default function Index() {
  return (
    <>
      <main className="max-w-[1440px] items-center m-auto bg-white ">
        <NavBar />

        <div class="max-w-2xl p-6 bg-indigo-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-20 mb-20 text-white">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              Tu pago se realizo con exito:{" "}
            </h5>
          </a>
          <p class="mt-5 mb-3 font-normal text-white dark:text-gray-400">
            Tu dinero esta retenido aun no se genera el pago(tu dinero estará
            protegido sin cobrarse). Al terminar tu evento, tendras que generar
            un codigo el cual se lo compartiras al artista y el capturará el
            codigo y terminara de hacer el cobro.
          </p>
          <br />
          <span class="font-black">
            *Nota: Si el artista rechaza la reservación, se te devolverá
            integro.
          </span>
          <br />
          <a
            href="http://localhost:3000"
            class="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Aceptar
          </a>
        </div>

        <FooterMain />
      </main>
    </>
  );
}
