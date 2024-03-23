import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBarPrueba from "@/components/NavbarPrueba";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NavBarPrueba />
      {/* <Component {...pageProps} /> */}
    </NextUIProvider>
  );
}
