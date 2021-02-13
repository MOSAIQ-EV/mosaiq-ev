import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";

import Skeleton from "../components/Skeleton";
import { font } from "../components/Typography";
import color from "../styles/color";

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
  h1{
    text-transform: uppercase;
    color: ${color.white};
    ${font.headline1}
  }
  h2{
    ${font.headline2}
  }
  h3{
    ${font.headline3}
  }
  h4{
    ${font.headline4}
  }
  p {
    margin: 1rem 0;
  }
  div, span, p, a {
    ${font.text}
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MOSAIQ e.V.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Skeleton>
        <Component {...pageProps} />
      </Skeleton>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
