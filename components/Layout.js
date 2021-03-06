import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

export default (props) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.3/dist/semantic.min.css"
        />
        <script
          async
          src="//cdn.jsdelivr.net/npm/semantic-ui@2.0.3/dist/semantic.min.js"
        ></script>
      </Head>

      <Header />
      {props.children}
    </Container>
  );
};
