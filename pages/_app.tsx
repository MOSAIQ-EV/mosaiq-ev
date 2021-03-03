import type { AppProps } from "next/app";
import { Html } from "next/document";
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
    font-family: 'Varela Round', sans-serif;
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
    hyphens: auto;
    word-break: break-word;
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
  div, span, p, a {
    ${font.text}
  }
  a {    
    transition: transform 200ms ease-in-out;
    :hover {
      transform: scale(1.02);
    }
  }

`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MOSAIQ e.V.</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Skeleton>
        <Component {...pageProps} />
      </Skeleton>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
