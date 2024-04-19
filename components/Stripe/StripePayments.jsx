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



        
        
        <main className=" max-w-[1440px] items-center m-auto ">
            <NavBar></NavBar>

            <Card className="max-w-[80%] mx-auto mb-10 mt-10">
                <CardBody className="bg-white  m-auto">
                    {eventosPendientes.map((evento, index) => (
                        // <div key={index} class="flex flex-col sm:flex-row ">                
                        <div key={index} className="grid grid-cols-1 md:grid-cols-[50fr,50fr] gap-4 mb-20 mt-20">             
                                    
                                    {/* class=" w-full sm:w-unit-6xl" */}
                            <div className="w-[70%] m-auto" >
                            
                                <Image  alt="NextUI hero Image" src={evento.url_imagen}  className="max-w[150] h-200"/>
                            </div>
                            
                            <div class=" p-0 ">
                            
                                <p class="text-black font-bold text-2xl mb-1" >{evento.titulo_evento} </p>
                                
                                {/* <Chip className="text-sm p-2 outline outline-offset-2 outline-1 bg-inherit"><Image src="/assets/svg/checkmark-circle.svg"  className="w-6 h-6 mr-2" /> {evento.estado}</Chip> */}
                                
                            
                                
                                
                            <p className="text-black text-sm sm:text-1xl font-bold mt-10 pb-2">Detalle del evento: </p>
                                    
                            {/* <div class="columns-1 lg:columns-3  text-black flex"> */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}
                            <div className="flex flex-col md:flex-row ">
                            
                                <ul class="list-none mr-9 ">

                                <div className="flex  items-center gap-1 md:gap-0 pb-3">
                                    <Image src="/assets/svg/calendar_client.svg"  className="mr-1 w-4 h-6 md:mr-3" />
                                    <li className="sm:text-xl"> Fecha:{evento.fecha_evento} </li>
                                </div>
                                <div className="flex items-center gap-1 md:gap-0 pb-3">
                                    <Image src="/assets/svg/timer.svg" className="w-4 h-6 mr-1  md:mr-3" />
                                    <li className="sm:text-xl ">Inicio: {evento.inicio_evento} </li>
                                </div>
                                <div className="flex items-center gap-1 md:gap-0 pb-3">
                                    <Image src="/assets/svg/SvgClock.svg" className="w-4 h-6 mr-1  md:mr-3 " />
                                    <li className="sm:text-xl">Final: {evento.termino_evento}</li>
                                </div>
                                </ul>  

                                <ul class="list-none mr-9 ">
                                <div className="flex items-center pb-3" >
                                    <Image src="/assets/svg/flash-sharp.svg" className="w-4 h-6 mr-1 md:mr-3" />
                                    <li className="sm:text-xl">{evento.tipo_evento}</li>
                                </div>
                                <li className="text-xs sm:text-xl pb-3">Contacto:</li>
                                <div className="flex items-center gap-1">
                                    <Image src="/assets/svg/call.svg"className="w-4 h-6 mr-1  md:mr-3" />
                                    {evento.estado === 'activo' || evento.estado === 'finalizado' &&  <li className="text-xs sm:text-xl">{evento.telefono_evento}</li>}
                                </div>
                                </ul> 

                                

                            </div> 
                            </div>    
                        </div>
                    ))}

                    <p className="ml-24"> Dirección: </p>
                    <br />
                    {eventosPendientes.map((evento, index) => (
                        <Card key={index} className="mt-1 max-w-[80%] m-auto  ">
                        <CardBody >
                            <div className="flex items-center gap-2 ">
                            
                            <Image src="/assets/svg/ubicacion.svg" className="w-6 h-6 mr-2" />
                            <p className="md:text-lg">{evento.direccion_evento}</p>
                            </div>
                        </CardBody>
                        </Card>
                    
                    ))}


                    {eventosPendientes.map((evento, index) => (
                        
                    <div key={index} className="  max-w-[80%] ml-24 mt-20">
                        <p>Detalle Evento: </p>
                        <ul class="list-none ">
                            <div className="flex items-center gap-1 pb-3">
                            <Image src="/assets/svg/calendar_client.svg" className="w-4 h-6 mr-2 md:w-4" />
                            <li className="sm:text-xl">Horas: {evento.horas_contratadas_evento}</li>
                            </div>
                            <div className="flex items-center gap-1 pb-3">
                            <Image src="/assets/svg/cash-outline.svg"className="w-4 h-6 mr-2 md:w-4" />
                            <li className="sm:text-xl">Costo:${evento.costo_evento}</li>
                            </div>
                            <div className="flex  gap-1 pb-3">
                            <Image src="/assets/svg/card-sharp.svg" className="w-4 h-6 mr-2 md:w-4" />  
                            <li className="sm:text-xl pt-1"> {evento.estatus_evento}</li>
                            </div>  
                        </ul>   
                    </div>               

                    ))}
                </CardBody>
            </Card>

            <div className="max-w-[80%] gap-4  mx-auto pb-10">  

                    <Card className="mt-20 m-auto" >
                        <CardBody className="bg-white  m-auto">
                            <div className="p-5">
                                <Elements stripe={stripePromise}>
                                
                                    <ElementsConsumer>
                                        {({ stripe, elements }) => (
                                        <CheckoutForm stripe={stripe} elements={elements} />
                                        )}
                                    </ElementsConsumer>
                                </Elements>
                            </div>           
                        </CardBody>
                    </Card>
            </div>
        </main>
    )
}
