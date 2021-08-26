import App, { Container } from "next/app";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
// import "./animations.css";
import { useRouter } from "next/router";
import Transition from "../components/Transition";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <Component className="main" {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;
