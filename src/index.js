import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import { store } from "./_helpers";
import { Provider } from "react-redux";
import { SocketProvider } from "socket.io-react";
import io from "socket.io-client";
import config from "./config";
const socket = io.connect(config.ROOT_URL); //http://185.80.128.99:8080

//import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <App />
    </SocketProvider>
  </Provider>,
  document.getElementById("root-wrapper")
);
//registerServiceWorker();
