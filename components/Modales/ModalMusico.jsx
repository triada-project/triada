import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Events from "../../objects/events.json";

import { Josefin_Sans, Lato, } from "next/font/google";

const josefine = Josefin_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });



export default function ModalClientePendiente() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('3xl')

  const { events } = Events;

  
  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  const eventosPendientes = events.filter((evento) => evento.estado === 'cancelado');

  return (
    <>
      <div className="flex flex-wrap gap-3 p-5">

               
        <Button key={size} onPress={() => handleOpen(size)}>Detalle evento pendiente </Button>
      
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              
              <ModalHeader className="flex flex-col gap-1 text-black "></ModalHeader>
               
              <ModalBody className=" h-[600px] sm:flex sm:gap-3   ">
              {/* <ModalBody className="sm:flex sm:gap-3 "> */}
              {eventosPendientes.map((evento, index) => (
              <Card className=" p-10 overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'activo' && (
                    <div className="flex flex-row bg-blue-200 hover:bg-blue-300  rounded-md h-22 w-full  p-4 "  >
                      <Image src="/assets/svg/play.svg"  className="w-6 h-6 mr-2" />
                      Evento {evento.estado}
                    </div>
                    )}
                    {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'finalizado' && (
                    <div className="flex flex-row bg-lime-200 hover:bg-lime-300  rounded-md h-22 w-full  p-4 "  >
                      <Image src="/assets/svg/checkmark-circle.svg"  className="w-6 h-6 mr-2" />
                      Evento {evento.estado}
                    </div>
                    )}
                    {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'cancelado' && (
                    <div className="flex flex-row bg-red-200 hover:bg-red-300  rounded-md h-22 w-full  p-4 "  >
                      <Image src="/assets/svg/close-circle.svg"  className="w-6 h-6 mr-2" />
                      Evento {evento.estado}
                    </div>
                    )}
                    {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'pendiente' && (
                    <div className="flex flex-row bg-amber-200 hover:bg-amber-300  rounded-md h-22 w-full  p-4 "  >
                      <Image src="/assets/svg/warning_FILL1_wght400_GRAD0_opsz24 2.svg"  className="w-6 h-6 mr-2" />
                      Evento {evento.estado}
                    </div>
                    )}

                    {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'pendiente' && (
                    <div className="bg-red-200  rounded-md h-22 w-full mt-4  p-4 "  >
                      <h2 className="text-center">Nueva solicitud de evento</h2>
                      <p>Esta es una nueva solicitud de evento, analiza la propuesta para aceptarla
                         o declinarla
                      </p>
                      <div className="flex flex-row gap-4 mt-5">
                        <Button color="danger" className="w-full">
                            Rechazar Evento
                        </Button>   
                        <Button color="danger" className="w-full">
                            Aceptar
                        </Button>        
                      </div>

                    </div>
                    )}
                    <br />
                    
                    <div className="flex flex-row gap-6">
                      <Image
                        alt="card-background"
                        src={evento.url_imagen}
                        className="rounded-full w-20 h-20"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-center md:text-lg font-semibold">{evento.titulo_evento}</p>
                        <Chip>{evento.estado}</Chip>
                      </div>
                    

                    </div>
                  

                    <div>                    
                      <p className="mt-2 mb-1 font-semibold">Detalle del evento</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10">
                  
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                          <p className="text-sm font-semibold">Agenda</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Image src="/assets/svg/calendar.svg"  className="w-6 h-6 mr-2" />
                            <p>Fecha: {evento.fecha_evento}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Image src="/assets/svg/timer.svg" className="w-6 h-6 mr-2" />
                          <p>Hora Inicio: {evento.inicio_evento}</p>
                        </div>
                        <div className="flex items-center">
                          <Image src="/assets/svg/timer.svg" className="w-6 h-6 mr-2" />
                          <p>Hora Término: {evento.termino_evento}</p>
                        </div>
                      </div>

                     


                      <div className="flex flex-col  ">                  
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          <div>
                            <p className="text-sm font-semibold">Tipo de evento</p>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <Image src="/assets/svg/flash-sharp.svg" className="w-6 h-6 mr-2" />
                              <p>{evento.tipo_evento}</p>
                            </div>
                          </div>                    
                        </div>
                      </div>

                      


                      <div className="flex flex-col ">                  
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          <div>
                            <p className="text-sm font-semibold">Contacto</p>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <Image src="/assets/svg/call.svg" className="w-6 h-6 mr-2"  />
                              {evento.estado === 'activo' || evento.estado === 'finalizado' &&  <p className="">{evento.telefono_evento}</p>}
                            </div>
                          </div>                    
                        </div>
                      </div>


                    </div>
                </div>
               
                <div className="mt-8 ">
                  <p className="text-sm font-semibold">Dirección</p>
                  <br />
                  <div className="flex  items-center bg-slate-200 rounded-lg p-2">
                    <Image src="/assets/svg/ubicacion.svg" className="w-6 h-6 mr-2" />
                    <p className="text-sm">Juárez #650,  Colonia San Agustín, C.P. 68188 Monterrey, Nuevo León</p>
                  </div>
                </div>
                <br />

                <div className="mt-4">
                  <p className="text-sm font-semibold">Detalle de pago</p>
                  <div>
                    <p className="text-sm font-semibold">Resumen</p>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                      
                      <div>
                        <div className="flex items-center">
                          <Image src="/assets/svg/calendar.svg"  className="w-6 h-6 mr-2" />
                          <p>Horas contratadas: {evento.horas_contratadas_evento}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image src="/assets/svg/timer.svg" className="w-6 h-6 mr-2" />
                        <p>Honorarios: {evento.costo_evento}</p>
                      </div>
                      <div className="flex items-center">
                        <Image src="/assets/svg/timer.svg" className="w-6 h-6 mr-2" />
                        <p>Estatus de pago: {evento.estatus_evento}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <br />
                {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'activo' && (
                <div className="bg-blue-200 hover:bg-blue-300  rounded-md h-22 w-full mt-4  p-4 "  >
                  El pago se depositara en tu cuenta en automático al terminar el evento, 
                  recuerda compartir el código de inicio de evento al cliente antes de inicar tú 
                  presentación..
                </div>
                )}
                {eventosPendientes.length > 0 && eventosPendientes[0].estado === 'cancelado' && (
                <div className="bg-red-200 hover:bg-red-300  rounded-md h-22 w-full mt-4  p-4 "  >
                  Lamentamos informar que la realización de este evento no fue posible, ya que no cumplia
                  con las expectativas ni del cliente ni de la banda musical. Diferencias en la ubicación,
                  la fecha y otros factores externos influyeron en esta decisión. Estamos comprometidos a
                  brindar experiencias excepcionales, y aunque esta ocasion no funcionó, esperamos que puedan
                  colaborar en eventos futuros que se alineen mejor con las expectativas de ambas partes.
                  ¡Agradecemos tu comprensión!
                </div>
                )}


              </Card>
                ))}
               
                 
              </ModalBody>
              <ModalFooter>
                <Button color="primary d-none " className="hidden" onPress={onClose}>
                  Action
                </Button>
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
