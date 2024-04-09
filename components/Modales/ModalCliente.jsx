import React, { useState, useEffect } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";

import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
// import Events from "../objects/events.json";
import Events from "../../objects/events.json";

// condicional rendering
import { Josefin_Sans, Lato, } from "next/font/google";
import More from "../../public/assets/svg/add-circle";


const josefine = Josefin_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });



export default function ModalCliente() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('2xl')
  //const [eventosPendientes, setEventosPendientes] = useState([]);

  

  const { events } = Events;

  
  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  const eventosPendientes = events.filter((evento) => evento.estado === 'finalizado');

  return (
    <>
      <div className="flex flex-wrap gap-3 p-5">

                      
        <Button className="bg-white  p-0"  key={size} onPress={() => handleOpen(size)}>  <More ></More> <p>  Detalles  </p>   </Button>
        
      
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">Detalle Evento</ModalHeader>
              <ModalBody >
                {/* className="sm:flex sm:gap-3 " */}
                {/* w-full sm:w-1/2 mb-3 sm:mb-0 */}

                {eventosPendientes.map((evento, index) => (
                // <div key={index} class="flex flex-col sm:flex-row ">                
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">             
                               
                               {/* class=" w-full sm:w-unit-6xl" */}
                    <div >
                        <Image  alt="NextUI hero Image" src={evento.url_imagen}  className="max-w[100px] "/>
                     </div>
                    
                    <div class="w-7/10 p-3  ">
                        
                      <p class="text-black font-bold text-xl mb-1" >{evento.titulo_evento} </p>
                       <Chip className="text-sm p-2">{evento.estado}</Chip>
                        
                        
                      <p className="text-black text-sm font-bold mt-2 pb-2">Detalle del evento: </p>
                            
                      {/* <div class="columns-1 lg:columns-3  text-black flex"> */}
                      {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-4"> */}
                      <div className="flex flex-col md:flex-row ">
                      
                        <ul class="list-none mr-5 ">

                          <div className="flex  items-center gap-1">
                            <Image src="/assets/svg/calendar.svg"  className="mr-1 w-4 h-6 md:mr-3" />
                            <li className="md:text-xs"> Fecha:{evento.fecha_evento} </li>
                          </div>
                          <div className="flex items-center gap-1 md:gap-0">
                            <Image src="/assets/svg/timer.svg" className="w-4 h-6 mr-1 md:w-3" />
                            <li className="md:text-xs ">Inicio: {evento.inicio_evento} </li>
                          </div>
                          <div className="flex items-center gap-1 md:gap:0">
                            <Image src="/assets/svg/SvgClock.svg" className="w-4 h-6 mr-1 md:w-3 md:mr-0" />
                            <li className="md:text-xs">Final: {evento.termino_evento}</li>
                          </div>
                        </ul>  

                        <ul class="list-none mr-5 ">
                          <div className="flex items-center">
                            <Image src="/assets/svg/flash-sharp.svg" className="w-4 h-6 mr-2 md:w-3" />
                            <li className="md:text-xs">{evento.tipo_evento}</li>
                          </div>
                          <li className="text-xs">Contact:</li>
                          <div className="flex items-center gap-1">
                            <Image src="/assets/svg/call.svg"className="w-4 h-6 mr-2  md:w-3" />
                            {evento.estado === 'activo' || evento.estado === 'finalizado' &&  <li className="text-xs">{evento.telefono_evento}</li>}
                          </div>
                        </ul> 

                        <ul class="list-none ">
                          <div className="flex items-center gap-1">
                            <Image src="/assets/svg/calendar.svg" className="w-4 h-6 mr-2 md:w-3" />
                            <li className="md:text-xs">Horas: {evento.horas_contratadas_evento}</li>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image src="/assets/svg/cash-outline.svg"className="w-4 h-6 mr-2 md:w-3" />
                            <li className="md:text-xs">Costo:${evento.costo_evento}</li>
                          </div>
                          <div className="flex  gap-1">
                            <Image src="/assets/svg/card-sharp.svg" className="w-4 h-6 mr-2 md:w-3" />  
                            <li className="md:text-xs">Estatus: {evento.estatus_evento}</li>
                          </div>  
                        </ul>   

                      </div> 

                      
                                                                   
                    

                    </div>    
                </div>
                ))}

                {eventosPendientes.map((evento, index) => (
                  <Card key={index} className="mt-1">
                    <CardBody>
                      <div className="flex items-center gap-2">
                        <Image src="/assets/svg/ubicacion.svg" className="w-6 h-6 mr-2" />
                        <p className="md:text-xs">{evento.direccion_evento}</p>
                      </div>
                    </CardBody>
                  </Card>
                  
                ))}
                
                
                <p className="text-black text-sm font-bold pb-2 pt-4 hidden">Setlist del evento</p>

                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black  mx-auto hidden">
                                  
                    <Card className="mr-5">
                        <CardBody>
                            
                           <ul class="list-none mr-5 ">
                                <li className="text-xs">Enter Sandman</li>
                                <li className="text-xs">Metallica</li>                               
                            </ul>     
                        </CardBody>
                    </Card>
                    <Card className="mr-5">
                        <CardBody>
                           <ul class="list-none mr-5 ">
                                <li className="text-xs">Enter Sandman</li>
                                <li className="text-xs">Metallica</li>                               
                            </ul>     
                        </CardBody>
                    </Card>
                    <Card className="mr-5">
                        <CardBody>
                           <ul class="list-none mr-5 ">
                                <li className="text-xs">Enter Sandman</li>
                                <li className="text-xs">Metallica</li>                               
                            </ul>     
                        </CardBody>
                    </Card>
                    <Card className="mr-5">
                        <CardBody>
                           <ul class="list-none mr-5 ">
                                <li className="text-xs">Enter Sandman</li>
                                <li className="text-xs">Metallica</li>                               
                            </ul>     
                        </CardBody>
                    </Card>
                    


                </div>     
                {/* className={` ${eventosPendientes.estado === 'pendiente' && hidden} `} */}

                {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'activo' && (
                <div >
                                
                  <p className="text-black text-sm font-bold pb-2">Escribir codigo</p>
                  <Input  type="email" label="Introducir Codigo" variant="bordered"  className="pb-4 w-full text-black" />
                  
                  <Button color="danger" className="w-full">
                      Enviar
                  </Button>              
                </div>
                )}

                {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'finalizado' && (
                <div >
                                
                  <p className="text-black text-sm font-bold pb-2">Escribir reseña</p>
                  <Input  type="email" label="Tu opinion es importante..." variant="bordered"  className="pb-4 w-full text-black" />
                  
                  <Button color="danger" className="w-full">
                      Enviar
                  </Button>              
                </div>
                )}
                

                
              
                
                 
                 
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary d-none" onPress={onClose}>
                  Action
                </Button> */}
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
