import React, { useState, useEffect } from "react";
import {Image} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
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

  const eventosPendientes = events.filter((evento) => evento.estado === 'activo');

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
                        
                      <p class="text-black font-bold text-xl mb-2" >{evento.titulo_evento} </p>
                       <Chip className="text-sm p-2">{evento.estado}</Chip>
                        
                        
                        <p className="text-black text-sm font-bold mt-2 pb-2">Detalle del evento: </p>
                            
                        <div class="columns-3 text-black flex">
                            <ul class="list-none mr-5">
                                <li className="text-xs">Fecha:{evento.fecha_evento} </li>
                                <li className="text-xs">Inicio: {evento.inicio_evento} </li>
                                <li className="text-xs">Término: {evento.termino_evento}</li>
                            </ul>                           
                            <ul class="list-none mr-5 ">
                                <li className="text-xs">{evento.tipo_evento}</li>
                                <li className="text-xs">Contact:</li>
                                {evento.estado === 'activo' && <li className="text-xs">{evento.telefono_evento}</li>}
                            </ul>                                              
                            <ul class="list-none ">
                                <li className="text-xs">Horas contratadas: {evento.horas_contratadas_evento}</li>
                                <li className="text-xs">Honorarios: {evento.costo_evento}</li>
                                <li className="text-xs">Estatus de pago: {evento.estatus_evento}</li>
                            </ul>                                              
                        </div>

                    </div>    
                </div>
                ))}

                {eventosPendientes.map((evento, index) => (
                  <Card key={index} className="mt-2">
                    <CardBody>
                      <p className="text-sm">{evento.direccion_evento}</p>
                    </CardBody>
                  </Card>
                  
                ))}
                
                
                <p className="text-black text-sm font-bold pb-2 pt-4">Setlist del evento</p>

                <div class="columns-3 text-black flex   mx-auto ">
                                  
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
                
                   
                  
                
                <div className={` ${eventosPendientes.estado === 'pendiente' && hidden} `}>
                                
                  <p className="text-black text-sm font-bold pb-2">Escribir codigo</p>
                  <Input  type="email" label="Introducir Codigo" variant="bordered"  className="pb-4 w-full text-black" />
                  
                  <Button color="danger" className="w-full">
                      Enviar
                  </Button>              
                </div>
                

                
              
                
                 
                 
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
