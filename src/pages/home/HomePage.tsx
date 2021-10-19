import React, { createRef, ReactElement, useState, useEffect } from "react";
// css module css in js
import styles from "./HomePage.module.scss";
import { Header, Footer } from '../../components';

function HomePage() {
  return (
    <div className={styles.App}>
      <Header title={'这是title'}></Header>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
