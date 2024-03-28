import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBarPrueba from "@/components/NavbarPrueba";
import ModalCliente from "@/components/ModalCliente";
import ModalClientePendiente from "@/components/ModalClientePendiente";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NavBarPrueba />
      <ModalCliente></ModalCliente>
      <ModalClientePendiente></ModalClientePendiente>
      {/* <Component {...pageProps} /> */}
    </NextUIProvider>
  );
}
