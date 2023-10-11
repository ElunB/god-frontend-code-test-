import "../public/css/styles.scss";
import React from "react";
import { AppProps } from "next/app.js";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
