import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import { MobxStoreProvider } from "./stores/MobxStoreProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MobxStoreProvider>
      <App />
    </MobxStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
