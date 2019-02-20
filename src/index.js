import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/stores";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
