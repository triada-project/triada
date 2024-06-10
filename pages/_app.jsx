import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import useTokenExpiration from "@/hooks/useTokenExpiration";

export default function App({ Component, pageProps }) {
  useTokenExpiration();
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
