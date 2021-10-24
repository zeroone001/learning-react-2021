import React, { createRef, ReactElement, useState, useEffect } from "react";
// css module css in js
import styles from "./index.module.scss";
// import Robot from "./components/other/Robot";
// import tsConfig from "./assets/images/tsConfig.jpg";
// import ShoppingCart from "./components/other/ShoppingCart";
import {
  BrowserRouter,
  Route,
  Switch,
  HashRouter,
  NavLink,
} from "react-router-dom";

import { HomePage, LoginIn, Register } from "./pages";
function App() {
  /* exact 精准匹配路径 */
  return (
    <div className={styles.App}>
      <HashRouter>
        <NavLink
          to="/loginIn"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          loginIn
        </NavLink>
        <Switch>
          <Route exact path="/detail/:abc" component={HomePage} />
          <Route exact path="/loginIn" component={LoginIn} />
          <Route exact path="/register" component={Register} />
          {/* 404页面 */}
          <Route render={() => <h1>404页面</h1>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
