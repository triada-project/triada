import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Events from "../../objects/events.json";
import More from "../../public/assets/svg/add-circle";
import More from "../../public/assets/svg/add-circle";

import { Josefin_Sans, Lato } from "next/font/google";
import { Josefin_Sans, Lato } from "next/font/google";

const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const josefine = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function ModalMusico({ eventData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("3xl");
  console.log(eventData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { events } = Events;


  const handleOpen = (size) => {
    setSize(size);
    setSize(size);
    onOpen();
  };

  async function onSubmit(data) {
    const response = await fetch(
      `http://localhost:4000/events/${eventData._id}/confirmar-codigo-evento`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: eventData._id,
          codigoEvento: data.codigoEvento,
        }),
      }
    );
  }

  //const eventData = events.filter((evento) => evento.estado === "aceptado");

  return (
    <>
      <div className="flex flex-wrap gap-3 p-5">
        <Button
          className="bg-white  p-0"
          key={size}
          onPress={() => handleOpen(size)}
        >
          <More /> <p> Detalles </p>
        </Button>
        <Button
          className="bg-white  p-0"
          key={size}
          onPress={() => handleOpen(size)}
        >
          <More /> <p> Detalles </p>
        </Button>
      </div>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black "></ModalHeader>


              <ModalBody className=" h-[600px] sm:flex sm:gap-3   ">
                <div key={eventData._id} className="  overflow-auto">
                  {eventData.status === "aceptado" && (
                    <div className="flex flex-row bg-blue-200 hover:bg-blue-300  rounded-md h-22 w-full  p-4 ">
                      <Image
                        src="/assets/svg/play.svg"
                        className="w-6 h-6 mr-2"
                      />
                      Evento {eventData.status}
                    </div>
                  )}
                  {eventData.status === "finalizado" && (
                    <div className="flex flex-row bg-lime-200 hover:bg-lime-300  rounded-md h-22 w-full  p-4 ">
                      <Image
                        src="/assets/svg/checkmark-circle.svg"
                        className="w-6 h-6 mr-2"
                      />
                      Evento {eventData.status}
                  )}
                  {eventData.status === "finalizado" && (
                    <div className="flex flex-row bg-lime-200 hover:bg-lime-300  rounded-md h-22 w-full  p-4 ">
                      <Image
                        src="/assets/svg/checkmark-circle.svg"
                        className="w-6 h-6 mr-2"
                      />
                      Evento {eventData.status}
                    </div>
                  )}
                  {eventData.status === "cancelado" && (
                    <div className="flex flex-row bg-red-200 hover:bg-red-300  rounded-md h-22 w-full  p-4 ">
                      <Image
                        src="/assets/svg/close-circle.svg"
                        className="w-6 h-6 mr-2"
                      />
                      Evento {eventData.status}
                  )}
                  {eventData.status === "cancelado" && (
                    <div className="flex flex-row bg-red-200 hover:bg-red-300  rounded-md h-22 w-full  p-4 ">
                      <Image
                        src="/assets/svg/close-circle.svg"
                        className="w-6 h-6 mr-2"
                      />
                      Evento {eventData.status}
                    </div>
                  )}
                  {eventData.status === "pendiente" && (
                    <div className="flex flex-row bg-amber-200 hover:bg-amber-300  rounded-md h-22 w-full  p-4 ">
                      <Image
                        src="/assets/svg/warning_FILL1_wght400_GRAD0_opsz24 2.svg"
                        className="w-6 h-6 mr-2"
                      />
                      Evento {eventData.status}
                    </div>
                  )}
                  )}

                  {eventData.status === "pendiente" && (
                    <div className="bg-red-200  rounded-md h-22 w-full mt-4  p-4 ">
                  {eventData.status === "pendiente" && (
                    <div className="bg-red-200  rounded-md h-22 w-full mt-4  p-4 ">
                      <h2 className="text-center">Nueva solicitud de evento</h2>
                      <p>
                        Esta es una nueva solicitud de evento, analiza la
                        propuesta para aceptarla o declinarla
                      <p>
                        Esta es una nueva solicitud de evento, analiza la
                        propuesta para aceptarla o declinarla
                      </p>
                      <div className="flex flex-row gap-4 mt-5">
                        <Button color="danger" className="w-full">
                          Rechazar Evento
                        </Button>
                          Rechazar Evento
                        </Button>
                        <Button color="danger" className="w-full">
                          Aceptar
                        </Button>
                          Aceptar
                        </Button>
                      </div>
                    </div>
                  )}
                  <br />

                  <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                  )}
                  <br />

                  <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                      <Image
                        alt="card-background"
                        src={eventData.clientPicture}
                        className="rounded-full w-20 h-20"
                      />
                      <p className="text-center text-xl md:text-lg font-semibold">
                        {eventData.clientName}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* {eventData.length > 0 &&
                          eventData[0].estado === "finalizado" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                              <Image
                                src="/assets/svg/checkmark-circle.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )}
                      <p className="text-center text-xl md:text-lg font-semibold">
                        {eventData.clientName}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* {eventData.length > 0 &&
                          eventData[0].estado === "finalizado" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                              <Image
                                src="/assets/svg/checkmark-circle.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )}

                        {eventData.length > 0 &&
                          eventData[0].estado === "aceptado" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-16 rounded-full items-center">
                              <Image
                                src="/assets/svg/play.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )}

                        {eventData.length > 0 &&
                          eventData[0].estado === "cancelado" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                              <Image
                                src="/assets/svg/close-circle.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )}
                        {eventData.length > 0 &&
                          eventData[0].estado === "cancelado" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                              <Image
                                src="/assets/svg/close-circle.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )}

                        {eventData.length > 0 &&
                          eventData[0].estado === "pendiente" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                              <Image
                                src="/assets/svg/warning_FILL1_wght400_GRAD0_opsz24 2.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )} */}
                        {eventData.length > 0 &&
                          eventData[0].estado === "pendiente" && (
                            <div className="flex flex-row border border-slate-950 p-1 w-1/4 rounded-full items-center">
                              <Image
                                src="/assets/svg/warning_FILL1_wght400_GRAD0_opsz24 2.svg"
                                className="w-52 h-4 mr-2"
                              />
                              <p className="text-xs pr-1">{evento.estado}</p>
                            </div>
                          )} */}
                    </div>

                    <div>
                      <p className="mt-2 mb-1 text-xl font-semibold">
                        Detalle del evento
                      </p>
                    <div>
                      <p className="mt-2 mb-1 text-xl font-semibold">
                        Detalle del evento
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10">
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                          <p className=" text-base font-semibold">Agenda</p>
                          <p className=" text-base font-semibold">Agenda</p>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Image
                              src="/assets/svg/calendar_client.svg"
                              className="w-6 h-6 mr-2"
                            />
                            <p>Fecha: {eventData.date}</p>
                            <Image
                              src="/assets/svg/calendar_client.svg"
                              className="w-6 h-6 mr-2"
                            />
                            <p>Fecha: {eventData.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Hora Inicio: {eventData.startHour}</p>
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Hora Inicio: {eventData.startHour}</p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Hora Término: {eventData.endHour}</p>
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Hora Término: {eventData.endHour}</p>
                        </div>
                      </div>

                      <div className="flex flex-col  ">
                      <div className="flex flex-col  ">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          <div>
                            <p className="text-sm font-semibold">
                              Tipo de evento
                            </p>
                            <p className="text-sm font-semibold">
                              Tipo de evento
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <Image
                                src="/assets/svg/flash-sharp.svg"
                                className="w-6 h-6 mr-2"
                              />
                              <p>{eventData.eventType}</p>
                              <Image
                                src="/assets/svg/flash-sharp.svg"
                                className="w-6 h-6 mr-2"
                              />
                              <p>{eventData.eventType}</p>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col ">
                      <div className="flex flex-col ">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          <div>
                            <p className="text-sm font-semibold">Contacto</p>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <Image
                                src="/assets/svg/call.svg"
                                className="w-6 h-6 mr-2"
                              />
                              {eventData.estado === "aceptado" ||
                                (eventData.estado === "finalizado" && (
                                  <p className="">{eventData.phoneClient}</p>
                                ))}
                            </div>
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
                      <Image
                        src="/assets/svg/ubicacion.svg"
                        className="w-6 h-6 mr-2"
                      />
                      <p className="text-sm">
                        {eventData?.address?.street} #
                        {eventData?.address?.exteriorNumber}, Colonia{" "}
                        {eventData?.address?.neighborhood},{" "}
                        {eventData?.address?.country},{" "}
                        {eventData?.address?.city}, C.P.{" "}
                        {eventData?.address?.zipCode}
                      </p>
                    </div>
                  </div>
                  <br />
                  </div>

                  <div className="mt-8 ">
                    <p className="text-sm font-semibold">Dirección</p>
                    <br />
                    <div className="flex  items-center bg-slate-200 rounded-lg p-2">
                      <Image
                        src="/assets/svg/ubicacion.svg"
                        className="w-6 h-6 mr-2"
                      />
                      <p className="text-sm">
                        {eventData?.address?.street} #
                        {eventData?.address?.exteriorNumber}, Colonia{" "}
                        {eventData?.address?.neighborhood},{" "}
                        {eventData?.address?.country},{" "}
                        {eventData?.address?.city}, C.P.{" "}
                        {eventData?.address?.zipCode}
                      </p>
                    </div>
                  </div>
                  <br />

                  <div className="mt-4">
                    <p className="text-sm font-semibold">Detalle de pago</p>
                    <div>
                      <p className="text-sm font-semibold">Resumen</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold">Detalle de pago</p>
                    <div>
                      <p className="text-sm font-semibold">Resumen</p>

                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                        <div>
                          <div className="flex items-center">
                            <Image
                              src="/assets/svg/calendar_client.svg"
                              className="w-6 h-6 mr-2"
                            />
                            <p>
                              Horas contratadas:{" "}
                              {eventData.horas_contratadas_evento}
                            </p>
                          </div>
                        </div>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                        <div>
                          <div className="flex items-center">
                            <Image
                              src="/assets/svg/calendar_client.svg"
                              className="w-6 h-6 mr-2"
                            />
                            <p>
                              Horas contratadas:{" "}
                              {eventData.horas_contratadas_evento}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Honorarios: {eventData.eventFee}</p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Estatus de pago: {eventData.status}</p>
                        </div>
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Honorarios: {eventData.eventFee}</p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src="/assets/svg/timer.svg"
                            className="w-6 h-6 mr-2"
                          />
                          <p>Estatus de pago: {eventData.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>

                  <br />
                  {eventData.status === "aceptado" && (
                    <div className="bg-blue-200 hover:bg-blue-300  rounded-md h-22 w-full mt-4  p-4 ">
                      El pago se depositara en tu cuenta en automático al
                      terminar el evento, recuerda compartir el código de inicio
                      de evento al cliente antes de inicar tú presentación..
                    </div>
                  )}
                  {eventData.status === "cancelado" && (
                    <div className="bg-red-200 hover:bg-red-300  rounded-md h-22 w-full mt-4  p-4 ">
                      Lamentamos informar que la realización de este evento no
                      fue posible, ya que no cumplia con las expectativas ni del
                      cliente ni de la banda musical. Diferencias en la
                      ubicación, la fecha y otros factores externos influyeron
                      en esta decisión. Estamos comprometidos a brindar
                      experiencias excepcionales, y aunque esta ocasion no
                      funcionó, esperamos que puedan colaborar en eventos
                      futuros que se alineen mejor con las expectativas de ambas
                      partes. ¡Agradecemos tu comprensión!
                    </div>
                  )}

                  {eventData.status === "aceptado" && (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className=" mt-5 pt-4 flex flex-col gap-3"
                    >
                      <Input
                        className=" w-full h-14 rounded-none"
                        isRequired
                        variant="bordered"
                        radius="sm"
                        label="Ingresa el código compartido por el cliente"
                        {...register("codigoEvento")}
                      />
                      <Button color="danger" className="w-full" type="submit">
                        Confirmar código
                      </Button>
                    </form>
                  )}
                </div>
                {/* <ModalBody className="sm:flex sm:gap-3 "> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary d-none "
                  className="hidden"
                  onPress={onClose}
                >
                <Button
                  color="primary d-none "
                  className="hidden"
                  onPress={onClose}
                >
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
