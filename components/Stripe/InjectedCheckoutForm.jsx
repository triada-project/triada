
import React, { useState, useEffect } from "react";

export default function InjectedCheckoutForm() {
  return ( 
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto pt-20 ">
        <img class="w-full" src="https://guitarraviva.com/wp-content/uploads/2023/06/mejor-guitarrista-de-la-historia.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Evento Juan</div>
          <p class="text-gray-700 text-base text-center">
            ...... El eproceso de pago se cancelo .......
          </p>
        </div>
        <div className="text-center p-5">
          <a href="http://localhost:5000" className=" bg-transparent hover:bg-blue-500 text-blue-700  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Inicio</a>
        </div>
      </div>
    </>
  )
}

