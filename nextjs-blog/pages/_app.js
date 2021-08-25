import App, { Container } from "next/app";
import React, { Fragment } from "react";
import styled from "styled-components";
import "./styles.css";
import Head from "next/head";
import { Nav } from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
