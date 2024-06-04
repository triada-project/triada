import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/TRIADA-LOGO.png"
        />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
