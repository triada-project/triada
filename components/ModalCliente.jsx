import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Calendar from "../public/assets/svg/active.svg";

import { Divider } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import Events from "../objects/events.json";

// condicional rendering



export default function ModalCliente() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('2xl')
  //const [eventosPendientes, setEventosPendientes] = useState([]);

  

  const { events } = Events;

  
  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  const eventosPendientes = events.filter((evento) => evento.estado === 'cancelado');

  return (
    <>
      <div className="flex flex-wrap gap-3 p-5">
               
        <Button key={size} onPress={() => handleOpen(size)}>Detalle evento </Button>
      
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
              <ModalBody className="sm:flex sm:gap-3 ">
                {/* w-full sm:w-1/2 mb-3 sm:mb-0 */}
               
               
                {eventosPendientes.map((evento, index) => (
                <div key={index} class="flex flex-col sm:flex-row ">                
                 
                    <div class="w-3/10 ">
                        <Image width={250} alt="NextUI hero Image" src={evento.url_imagen} />
                    </div>
                    <div class="w-7/10 p-3 ">
                        
                      <p class="text-black font-bold text-xl mb-1" >{evento.titulo_evento} </p>
                       <Chip className="text-sm p-2">{evento.estado}</Chip>
                        
                        
                        <p className="text-black text-sm font-bold mt-2 pb-2">Detalle del evento: </p>
                            
                        <div class="columns-3 text-black flex">
                        <ul class="list-none mr-5">
                          <div className="flex items-center gap-1">
                            <Image src="/assets/svg/calendar.svg" width={15} height={15} className="mr-3" />
                            <li className="text-xs"> Fecha:{evento.fecha_evento} </li>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image src="/assets/svg/timer.svg" width={13} height={13} />
                            <li className="text-xs ">Inicio: {evento.inicio_evento} </li>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image src="/assets/svg/SvgClock.svg" width={13} height={13} />
                            <li className="text-xs">Término: {evento.termino_evento}</li>
                          </div>
                            </ul>                           
                        <ul class="list-none mr-5 ">
                              <div className="flex items-center gap-1">
                                <Image src="/assets/svg/flash-sharp.svg" width={17} height={15} />
                                <li className="text-xs">{evento.tipo_evento}</li>
                              </div>
                              <li className="text-xs">Contact:</li>
                              <div className="flex items-center gap-1">
                                <Image src="/assets/svg/call.svg" width={20} height={15} />
                                {evento.estado === 'activo' || evento.estado === 'finalizado' &&  <li className="text-xs">{evento.telefono_evento}</li>}
                              </div>
                            </ul>                                              
                        <ul class="list-none ">
                              <div className="flex items-center gap-1">
                                <Image src="/assets/svg/calendar.svg" width={13} height={13} />
                                <li className="text-xs">Horas contratadas: {evento.horas_contratadas_evento}</li>
                              </div>
                              <div className="flex items-center gap-1">
                                <Image src="/assets/svg/cash-outline.svg" width={13} height={13} />
                                <li className="text-xs">Honorarios: {evento.costo_evento}</li>
                              </div>
                              <div className="flex  gap-1">
                                <Image src="/assets/svg/card-sharp.svg" width={13} height={13} className="pt-1" />  
                                <li className="text-xs">Estatus de pago: {evento.estatus_evento}</li>
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
                        <Image src="/assets/svg/ubicacion.svg" width={13} height={13} />
                        <p className="text-xs">{evento.direccion_evento}</p>
                      </div>
                    </CardBody>
                  </Card>
                  
                ))}
                
                
                <p className="text-black text-sm font-bold pb-2 pt-4">Setlist del evento</p>

                <div class="columns-2 lg:columns-3 text-black flex mx-auto ">
                                  
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
                  <Input  type="email" label="Introducir Codigo" variant="bordered"  className="pb-4 w-full text-black" />
                  
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
