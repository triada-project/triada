import React, { useState } from "react";
import {
    Image,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/react";
import { Grid, TextField, MenuItem, InputAdornment } from '@mui/material';

// Styles.
import "../styles/payform.component.css";

// Fonts.
import { Josefin_Sans, Lato, } from "next/font/google";

const josefine = Josefin_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function PayForm() {
    // State hooks.
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Cities available (example).
    const cities = [
        {
            value: 'México',
            label: 'México',
        },
        {
            value: 'Monterrey',
            label: 'Monterrey',
        },
        {
            value: 'Guadalajara',
            label: 'Guadalajara',
        },
        {
            value: 'Morelia',
            label: 'Morelia',
        },
    ];

    // Constraint for the 16 digits of the credit card number.
    const handleNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
        let sanitizedValue = event.target.value.replace(/\D/g, '');
        sanitizedValue = sanitizedValue.slice(0, 16);
        event.target.value = sanitizedValue;
    };

    // Handle the different pay options buttons.
    const handlePayOption = (index: number) => {
        setSelectedButton(index);
    };

    return (
        <div className="sm:w-[835px] w-[380px]">
            <Grid container spacing={1.5}>
                {/* First row */}
                <Grid item xs={3.5}>
                    <button className="method-button"
                        style={{
                            border: selectedButton === 1 ? "var(--none, 2px) solid #0570DE" : "none",
                        }}
                        onClick={() => handlePayOption(1)}
                    >
                        <Image
                            alt="card"
                            className="object-cover rounded mr-2"
                            src="../svg/card.svg"
                        />
                        <p className={`${lato.className}`}>Card</p>
                    </button>
                </Grid>
                <Grid item xs={3.5}>
                    <button className="method-button"
                        style={{
                            border: selectedButton === 2 ? "var(--none, 2px) solid #0570DE" : "none",
                        }}
                        onClick={() => handlePayOption(2)}
                    >
                        <Image
                            alt="stripe"
                            className="object-cover rounded mr-2"
                            src="../svg/Stripe.svg"
                        />
                        <p className={`${lato.className}`}>Métodos Stripe</p>
                    </button>
                </Grid>
                <Grid item xs={3.5}>
                    <button className="method-button"
                        style={{
                            border: selectedButton === 3 ? "var(--none, 2px) solid #0570DE" : "none",
                        }}
                        onClick={() => handlePayOption(3)}
                    >
                        <Image
                            alt="google"
                            className="object-cover rounded mr-2"
                            src="../svg/GooglePay.svg"
                        />
                        <p className={`${lato.className}`}>Google Pay</p>
                    </button>
                </Grid>
                <Grid item xs={1.5}>
                    <button className="method-button-options"
                        style={{
                            border: selectedButton === 4 ? "var(--none, 2px) solid #0570DE" : "none",
                        }}
                        onClick={() => handlePayOption(4)}
                    >
                        <p className={`${lato.className}`}>...</p>
                    </button>
                </Grid>

                {/* Second row */}
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        label="Número de tarjeta"
                        placeholder="1234 1234 1234 1234"
                        variant="outlined"
                        onInput={handleNumbers}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Image
                                        alt="visa"
                                        className="object-cover rounded px-0.5"
                                        src="../svg/visa.svg"
                                    />
                                    <Image
                                        alt="masterCard"
                                        className="object-cover rounded px-0.5"
                                        src="../svg/master-card.svg"
                                    />
                                    <Image
                                        alt="americanExpress"
                                        className="object-cover rounded px-0.5"
                                        src="../svg/american-express.svg"
                                    />
                                    <Image
                                        alt="discover"
                                        className="object-cover rounded px-0.5"
                                        src="../svg/discover.svg"
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                {/* Third row */}
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        label="Expiración"
                        placeholder="MM / YY"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        label="CVC"
                        placeholder="CVC"
                        variant="outlined"
                    />
                </Grid>

                {/* Fourth row */}
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        select
                        label="Ciudad"
                        variant="outlined"
                        defaultValue={cities[0].value}
                    >
                        {cities.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        label="Código postal"
                        placeholder="902100"
                        variant="outlined"
                    />
                </Grid>

                <div className="info-div columns-1">
                    <Image
                        className="info-icon mx-1.5"
                        alt="information"
                        src="../svg/info.svg"
                    />
                    <p className={`info-label ${lato.className}`}>
                        Al terminar tu proceso de compra tu dinero estará protegido sin cobrarse, si el artista acepta tu reservación se cobrará el día del evento mediante un código que te haremos llegar. Si el artista rechaza la reservación, se te devolverá integro.
                    </p>
                </div>

                <div className="columns-1">
                    <button className="pay-button" onClick={onOpen}>
                        <p className={`${lato.className}`}>Pagar $15000.00</p>
                        <Image
                            alt="pay"
                            className="object-cover rounded ml-4"
                            src="../svg/outlined-card.svg"
                        />
                    </button>
                </div>

                {/* Modal stuff */}
                <Modal className="modal-layout" size="2xl" isOpen={isOpen} onOpenChange={onOpenChange} placement="center" isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col text-center gap-1 modal-label">Confirmación de pago</ModalHeader>
                                <ModalBody className="verified-body flex flex-col text-center gap-1">
                                    <div className="verified-div columns-1">
                                        <Image
                                            className="verified-icon mx-1.5"
                                            alt="information"
                                            src="../svg/verified.svg"
                                        />
                                        <p className={`verified-label ${lato.className}`}>
                                            Tu solicitud de reserva para el evento será enviada al músico,
                                            este tendrá un plazo de 16 horas para responder.
                                        </p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="modal-button" onPress={onClose}>
                                        Aceptar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </Grid>
        </div>
    );
}