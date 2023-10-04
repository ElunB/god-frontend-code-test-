import "../public/css/styles.scss";
import React, { useEffect, useState } from "react";
import { ProductContainer } from "../src/components/ProductContainer";
import { AppProps } from "next/app.js";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
