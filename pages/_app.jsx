import "@/styles/globals.css";
import "@/styles/App_.css";
import { NextUIProvider } from "@nextui-org/react";
import triadaLogo from "../public/assets/images/TRIADA-LOGO.png";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="../public/assets/images/TRIADA-LOGO.png"
        />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
