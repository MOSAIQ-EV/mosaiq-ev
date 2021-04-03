import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

import { Logo } from "../components/Icons";
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
  div, span, p, a {
    ${font.text}
  }
  a {    
    transition: transform 200ms ease-in-out;
  }
`;

const fontFace = css`
  @font-face {
    font-family: "Varela Round";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("https://fonts.gstatic.com/s/varelaround/v13/w8gdH283Tvk__Lua32TysjIfp8uPLdshZg.woff2")
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MOSAIQ e.V.</title>
        <link rel="preload" href="https://fonts.gstatic.com" />
        <style>{fontFace}</style>
        <meta name="robots" content="noindex" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Container>
        <Logo />
        <br />
        <br />
        <h1>im Aufbau</h1>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
