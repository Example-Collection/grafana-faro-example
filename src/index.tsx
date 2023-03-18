import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Store } from "./root.redux";
import { FaroErrorBoundary } from "@grafana/faro-react";
import { initializeFaro } from "./global/initializeFaro";
import { createRoot } from "react-dom/client";

initializeFaro();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <FaroErrorBoundary>
      <Provider store={Store}>
        <App />
      </Provider>
    </FaroErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
