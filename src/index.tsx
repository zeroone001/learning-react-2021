import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const defaultContext = {
  username: "abc",
};

export const AppContext = React.createContext(defaultContext);

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={defaultContext}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
