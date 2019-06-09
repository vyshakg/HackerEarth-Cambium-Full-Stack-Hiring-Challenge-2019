import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
