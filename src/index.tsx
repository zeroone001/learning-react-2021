import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from './AppState';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
