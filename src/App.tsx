import React, { createRef, ReactElement, useState, useEffect } from "react";
// css module css in js
import styles from "./index.module.scss";
// import Robot from "./components/other/Robot";
// import tsConfig from "./assets/images/tsConfig.jpg";
// import ShoppingCart from "./components/other/ShoppingCart";
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import { HomePage } from './pages';
function App() {
  /* exact 精准匹配路径 */
  return (
    <div className={styles.App}>
      <HashRouter>
        <Switch>
          <Route exact path="/:abc" component={HomePage} />
          <Route path="/loginIn" render={() => <h1>登录页面</h1>} />
          {/* 404页面 */}
          <Route render={() => <h1>404页面</h1>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
