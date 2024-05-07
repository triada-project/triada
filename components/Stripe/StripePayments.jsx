
import React, { useState, useEffect } from "react";

const createCheckoutSession = async () => {
    const res = await fetch('http://localhost:3005/create-checkout-session/', { // Asegúrate de utilizar el puerto correcto
      method:'POST',
    });
    const data = await res.json();
    return data.url;
  };

const ProductDisplay = () => (
  <section>
    
    <div className="product w-6/12 flex flex-col p-3 " >
      <img
        src="http://localhost:5000/assets/images/imagenPorQueNosotros.png"
        alt="The cover of Stubborn Attachments"
        className="w-2/12  max-w-xs h-20 "
      />
      <div className="description  mt-1">
        <h3 class="text-lg font-semibold">Evento Juan</h3>
        <h5 class="text-sm">$1,000.00</h5>
      </div>
    
      <form action="http://localhost:3005/create-checkout-session" method="POST">
        <button type="submit" className="w-2/12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-0 px-5 border border-blue-500 hover:border-transparent rounded mt-2">
          Pagar
        </button>
      </form>
    </div>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}


