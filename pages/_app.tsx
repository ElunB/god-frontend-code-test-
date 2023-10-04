import "../public/css/styles.scss";
import React, { useEffect, useState } from "react";
import { Container } from "../src/components/Container";
import { AppProps } from "next/app.js";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      {/* renderar index.tsx?*/}
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
