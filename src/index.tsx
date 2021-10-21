import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from './AppState';
import { Provider } from 'react-redux';
import store from "./redux/store";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    {/* <AppStateProvider>
      <App />
    </AppStateProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
