import React from "react";
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip ,Input} from "@nextui-org/react";
import Events from "../../objects/events.json";
import { Josefin_Sans, Lato, } from "next/font/google";
import NavBar from "../Navbar";

const josefine = Josefin_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

class CheckoutForm extends React.Component {

    state = {
        name: "oswaldo",
        email: "samu@gmail.com",
        amount: "800", // Agrega el estado para almacenar el monto
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (event) => {
        // Evitamos que se realice la sumisión predeterminada del formulario
        // lo que refrescaría la página.
        event.preventDefault();

    const { stripe, elements } = this.props;
    const { name, email, amount } = this.state;

    if (!stripe || !elements) {
      // Aún no se ha cargado Stripe.js.
      // Asegúrate de deshabilitar la sumisión del formulario hasta que Stripe.js se haya cargado.
      return;
    }

    const result = await stripe.confirmPayment({
      // Instancia `Elements` que se utilizó para crear el Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: name,
                email: email,
            },
        },
        amount: amount * 100, // Convierte el monto a centavos (si está en dólares)
        currency: "MXN", // Define la moneda (por ejemplo, USD)
      },
    });

    if (result.error) {
      // Muestra el error a tu cliente (por ejemplo, detalles de pago incompletos)
      console.log(result.error.message);
    } else {
      // Tu cliente será redirigido a tu `return_url`. Para algunos métodos de pago
      // como iDEAL, tu cliente será redirigido primero a un sitio intermedio
      // para autorizar el pago, luego redirigido a la `return_url`.
    }
  };

  render() {
    return (
        
        
      <form onSubmit={this.handleSubmit}>
        {/* <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" /> */}
        <Input  type="text" label="Nombre" variant="bordered" value={this.state.name}  onChange={this.handleChange} className=" w-full text-black h-8 mb-4 " />
        <Input  type="email" label="Correo Electronico" variant="bordered"  value={this.state.email}
            onChange={this.handleChange} className=" w-full text-black h-8 mb-4" />
                
        <CardElement className="w-full h-8 border rounded-lg"/>

        <div className="flex flex-row bg-blue-200 hover:bg-blue-300 text-xs rounded-md h-22 w-full  p-4 mt-3 mb-3"  >
            {/* <Image src="/assets/svg/play.svg"  className="w-6 h-6 mr-2" /> */}
            Al terminar tu proceso de compra tu dinero estará protegido sin cobrarse, si el artista acepta tu reservación se cobrará el día del evento mediante un código que te haremos llegar. Si el artista rechaza la reservación, se te devolverá integro. 
        </div>

        <button className="bg-gray-900 text-white hover:bg-neutral-500 p-1 w-full rounded-full mt-3 h-8" disabled={!this.props.stripe}>Pagar $ {this.state.amount}.00 mxn.</button>
      </form>
    );
  }
}

// Crea una instancia de Stripe
const stripePromise = loadStripe('pk_test_51P4oMODoqexf69WmTXJ9qRi28ldWZyj70NFDyWovRCxykhJAIOuKdWtWq0rfsEaWZNOG5iTn80UZ0bR6Lw8cVeph00y7A00xJX');

export default function StripePayments() {

    

    const { events } = Events;
    const eventosPendientes = events.filter((evento) => evento.estado === 'finalizado');
    

    return (



        
        
        <main className=" max-w-[1440px] h-screen items-center m-auto ">
            <NavBar></NavBar>



            <div className="max-w-[80%] gap-4 items-center m-auto p-auto"> 


            

              <stripe-buy-button 
                buy-button-id="buy_btn_1P5z4JDoqexf69Wms6hPh6Lj"
                publishable-key="pk_test_51P4oMODoqexf69WmTXJ9qRi28ldWZyj70NFDyWovRCxykhJAIOuKdWtWq0rfsEaWZNOG5iTn80UZ0bR6Lw8cVeph00y7A00xJX"
              >
              </stripe-buy-button> 

                    
            </div>




            <script async
              src="https://js.stripe.com/v3/buy-button.js">
            </script>
            

            



            

        </main>
    )
}
