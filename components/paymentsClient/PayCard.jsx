import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";

// Styles.
import "../styles/paycard.component.css";

// Fonts.
import { Josefin_Sans, Lato, } from "next/font/google";

const josefine = Josefin_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PayCard() {
    return (
        <Card className="sm:w-[960px]">
            <CardHeader className="main-card overflow-visible">
                <div className="header-container columns-1 md:columns-2 gap-0">
                    <Image
                        alt="card-background"
                        className="card-image object-cover rounded-xl"
                        src="../images/Image.webp"
                    />

                    <div className="columns-1">
                        <p className={`title ${josefine.className}`}>Unión de John & Jane</p>
                        <div className="label-container"><Chip className={`label ${lato.className}`}>Boda</Chip></div>
                        <p className={`detail-label ${josefine.className}`}>Detalle del evento</p>
                    </div>

                    <div className="columns-1 md:columns-2 py-1">
                        <p className={`info-headers ${lato.className}`}>Agenda</p>
                        <p className={`info-headers ${lato.className}`}>Tipo de evento</p>
                    </div>

                    <div className="columns-1 md:columns-2 py-1">
                        <div className="columns-1 icon-text">
                            <Image
                                className="icon"
                                alt="ubication"
                                src="../svg/insert_invitation_black_24dp 1.svg"
                            />
                            <p className={`${lato.className}`}>Fecha: 16/03/2024</p>
                        </div>
                        <div className="columns-1 icon-text">
                            <Image
                                className="icon"
                                alt="ubication"
                                src="../svg/flash-sharp.svg"
                            />
                            <p className={`${lato.className}`}>Boda</p>
                        </div>
                    </div>

                    <div className="columns-1 md:columns-2 py-1">
                        <div className="columns-1 icon-text">
                            <Image
                                className="icon"
                                alt="ubication"
                                src="../svg/watch_later_black_24dp 1.svg"
                            />
                            <p className={`${lato.className}`}>Hora Inicio: 01:00 pm</p>
                        </div>
                        <p className={`info-headers ${lato.className}`}>Contacto</p>
                    </div>

                    <div className="columns-1 md:columns-2 py-1">
                        <div className="columns-1 icon-text">
                            <Image
                                className="icon"
                                alt="ubication"
                                src="../svg/history_toggle_off_black_24dp 1.svg"
                            />
                            <p className={`${lato.className}`}>Hora Término: 3:00 pm</p>
                        </div>
                        <div className="columns-1 icon-text">
                            <Image
                                className="icon"
                                alt="ubication"
                                src="../svg/call.svg"
                            />
                            <p className={`${lato.className}`}>8150279946</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="main-card overflow-visible">
                <div className="body-container">
                    <p className={`info-headers pb-2 ${lato.className}`}>Dirección</p>
                    <div className="place-div columns-1">
                        <Image
                            className="icon m-2"
                            alt="ubication"
                            src="../svg/place_black_24dp 1.svg"
                        />
                        <p className={`place-label ${lato.className}`}>
                            Juárez #650, entre Alpino y Casa Blanca, Colonia San Agustín, C.P. 68188 Monterrey, Nuevo León
                        </p>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="main-card overflow-visible">
                <div className="footer-container">
                    <div className="columns-1">
                        <p className={`footer-label ${josefine.className}`}>Detalle de pago</p>
                    </div>

                    <div className="columns-1">
                        <p className={`info-headers ${lato.className}`}>Resumen</p>
                    </div>

                    <div className="columns-1 icon-text py-1">
                        <Image
                            className="icon"
                            alt="ubication"
                            src="../svg/insert_invitation_black_24dp 1.svg"
                        />
                        <p className={`${lato.className}`}>Horas contratadas: 2</p>
                    </div>

                    <div className="columns-1 icon-text py-1">
                        <Image
                            className="icon"
                            alt="ubication"
                            src="../svg/cash-outline.svg"
                        />
                        <p className={`${lato.className}`}>Honorarios: $8000</p>
                    </div>

                    <div className="columns-1 icon-text py-1">
                        <Image
                            className="icon"
                            alt="ubication"
                            src="../svg/card-sharp.svg"
                        />
                        <p className={`${lato.className}`}>Estatus de pago: pendiente</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}