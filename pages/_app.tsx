import React from "react";
// import "../styles/globals.css";
import "../styles/globals.css";
import Head from "next/head";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <DynamicCookieBanner /> */}

      <Head>
        <title>Web Site</title>
      </Head>
      <main>
        <Component {...pageProps} />
        {/* <Footer /> */}
      </main>
    </>
  );
}
