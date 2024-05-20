import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Stripe/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import Events from "../../../objects/events.json";
import NavBar from "@/components/Navbar";
import FooterMain from "@/components/footer/footer";
import { useRouter } from "next/router";



function Payment() {
  const router = useRouter();
  const eventId = router.query.id;  
  console.log('this is',eventId);
  

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret,'codigo secreto');
  const [idEvent,setIdEvent] = useState("");
  const [eventFee,setEventFee] = useState();
  console.log(eventFee, 'this eventFee stripe');
  
  const fetchrequest= async()=>{
    try {
      const response = await fetch(`http://localhost:3005/events/${eventId}`, {
        headers:{
          "Content-Type": "application/json",
        }
      })   
      const responseData = await response.json()
      console.log(responseData, 'responseData');
      setIdEvent(responseData.data._id);
      setEventFee(responseData.data.eventFee);
       
    }catch(error){
      console.error(error);
    }
    
  };

  useEffect(() => {
    
    if(eventId){
      fetchrequest();
    }


  },[eventId]);

  
  // if (!eventId) {
  //  alert('crack')
  // };


  useEffect(() => {
    fetch("http://localhost:3005/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe('pk_test_51P4oMODoqexf69WmTXJ9qRi28ldWZyj70NFDyWovRCxykhJAIOuKdWtWq0rfsEaWZNOG5iTn80UZ0bR6Lw8cVeph00y7A00xJX'));
    });
  }, []);
  
  // useEffect(() => {
  //   fetch("http://localhost:3005/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ eventFee }),
  //   }).then(async (result) => {
  //     const data = await result.json();
  //     console.log(data); // Verificar la respuesta recibida
  //     const { clientSecret } = data; // Extraer clientSecret de la respuesta
  //     setClientSecret(clientSecret); // Establecer clientSecret en el estado
  //   })
  // }, [eventFee]);
  useEffect(() => {
    fetch("http://localhost:3005/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id:idEvent,
        eventFee:eventFee
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [eventFee]);
  
  const { events } = Events;
  //pendiente por confirmar
  const eventosPendientes = events.filter((evento) => evento.estado === 'activo');

  return (
    <>

    <main className="  bg-white m-auto w-full">
        <NavBar />

      

        {eventosPendientes.map((evento, index) => (
        // <div key={index} class="flex flex-col sm:flex-row ">                
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">             
                          
                          {/* class=" w-full sm:w-unit-6xl" */}
              <div className="m-auto" >
                
                  <Image  alt="NextUI hero Image" src={evento.url_imagen}  style={{ width: '350px', height: '200px' }}  />
              </div>
              
              <div class=" p-0 ">
                  <p class="text-black font-bold text-xl mb-1" >{evento.titulo_evento} </p>
                  {/* <Chip className="text-sm p-2 outline outline-offset-2 outline-1 bg-inherit "> </Chip> */}
                  
                  {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'finalizado' && (
                  <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                    <Image src="/assets/svg/checkmark-circle.svg"  className="w-52 h-4 mr-2" />
                    <p className="text-xs pr-1">{evento.estado}</p>
                  </div>
                  )}

                  {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'activo' && (
                    <div className="flex flex-row border border-slate-950 p-1 w-16 rounded-full items-center">
                      <Image src="/assets/svg/play.svg"  className="w-52 h-4 mr-2" />
                      <p className="text-xs pr-1">{evento.estado}</p>
                    </div>
                  )}

                  {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'cancelado' && (
                    <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                      <Image src="/assets/svg/close-circle.svg"  className="w-52 h-4 mr-2" />
                      <p className="text-xs pr-1">{evento.estado}</p>
                    </div>
                  )}

                  {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'pendiente por confirmar' && (
                    <div className="flex flex-row border border-slate-950 p-1 w-2/4 rounded-full items-center">
                      <Image src="/assets/svg/warning_FILL1_wght400_GRAD0_opsz24 2.svg"  className="w-10 h-4 mr-2" />
                      <p className="text-xs w-full pr-1">{evento.estado}</p>
                    </div>
                  )}
              
                  
                  
                <p className="text-black text-l font-bold mt-2 pb-2">Detalle del evento: </p>
                      
                {/* <div class="columns-1 lg:columns-3  text-black flex"> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}
                <div className="flex flex-col md:flex-row ">
                
                  <ul class="list-none mr-9 ">

                    <div className="flex  items-center gap-1 mb-2">
                      <Image src="/assets/svg/calendar_client.svg"  className="mr-1 w-4 h-6 md:w-5 " />
                      <li className="md:text-l"> Fecha:{evento.fecha_evento} </li>
                    </div>
                    <div className="flex items-center gap-1 md:gap-0 mb-2">
                      <Image src="/assets/svg/timer.svg" className="w-4 h-6 mr-1 md:w-5 md:mr-2 "  />
                      <li className="md:text-l ">Inicio: {evento.inicio_evento} </li>
                    </div>
                    <div className="flex items-center gap-1 md:gap:0 mb-2">
                      <Image src="/assets/svg/SvgClock.svg" className="w-4 h-6 mr-1 md:w-5 md:mr-1" />
                      <li className="md:text-l">Final: {evento.termino_evento}</li>
                    </div>
                  </ul>  

                  <ul class="list-none mr-9 ">
                    <div className="flex items-center mb-2">
                      <Image src="/assets/svg/flash-sharp.svg" className="w-4 h-6 mr-2 md:w-5" />
                      <li className="md:text-l">{evento.tipo_evento}</li>
                    </div>
                    {/* <li className="text-xs">Contact:</li> */}
                    <div className="flex items-center gap-1">
                      <Image src="/assets/svg/call.svg"className="w-4 h-6 mr-2  md:w-5 hover:border-slate-400" />
                      {evento.estado === 'activo' || evento.estado === 'finalizado' &&  <li className="text-xs">{evento.telefono_evento}</li>}
                    </div>
                  </ul> 

                  <ul class="list-none ">
                    <div className="flex items-center gap-1 mb-2">
                      <Image src="/assets/svg/calendar_client.svg" className="w-4 h-6 mr-2 md:w-5" />
                      <li className="md:text-l">Horas: {evento.horas_contratadas_evento}</li>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <Image src="/assets/svg/cash-outline.svg"className="w-4 h-6 mr-2 md:w-5" />
                      <li className="md:text-l">Costo:${evento.costo_evento}</li>
                    </div>
                    <div className="flex  gap-1 mb-2">
                      <Image src="/assets/svg/card-sharp.svg" className="w-4 h-6 mr-2 md:w-5 " />  
                      <li className="md:text-l md:pt-0  pt-1 "> {evento.estatus_evento}</li>
                    </div>  
                  </ul>   

                </div> 
              </div>    
          </div>
        ))}




        {eventosPendientes.map((evento, index) => (
          <Card key={index} className="w-3/4 m-auto mt-10 ">
          <CardBody>
            <div className="flex items-center gap-2">
              <Image src="/assets/svg/ubicacion.svg" className="w-5 h-6 mr-2" />
              <p className="md:text-l">{evento.direccion_evento}</p>
            </div>
          </CardBody>
        </Card>
        ))}
        

      
      <div className="w-3/4 m-auto pb-10 mt-10">
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }} >
            <CheckoutForm/>
          </Elements>
        )}
      </div>

    <FooterMain  />
    </main>
    </>
  );
}

export default Payment;
