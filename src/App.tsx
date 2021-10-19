import React, { createRef, ReactElement, useState, useEffect } from "react";
// css module css in js
import styles from "./index.module.scss";
// import Robot from "./components/other/Robot";
// import tsConfig from "./assets/images/tsConfig.jpg";
// import ShoppingCart from "./components/other/ShoppingCart";
import { Header, Footer } from './components';

function App() {

  return (
    <div className={styles.App}>
      <Header title={'这是title'}></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
