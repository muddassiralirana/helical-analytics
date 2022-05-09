import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
