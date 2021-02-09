import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";

import Skeleton from "../components/Skeleton";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: Arial, Helvetica, sans-serif;
    background: #c4dfdf;
  }
  html, body {
    height: 100%;
  }
  body > div {
    display: flex;
    flex-direction: column;
    height: 100%;

  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MOSAIQ e.V.</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Skeleton>
        <Component {...pageProps} />
      </Skeleton>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
