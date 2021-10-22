import React, { createRef, ReactElement, useState, useEffect } from "react";
// css module css in js
import styles from "./HomePage.module.css";
import { Header, Footer } from '../../components';
import { RouteComponentProps, useLocation } from 'react-router-dom';

interface PropsParams {
  abc: string
}

export const HomePage:React.FC<RouteComponentProps<PropsParams>> = (props) => {
  console.log('props', props.match.params.abc);
  console.log('query:', useLocation().search);
  const query = new URLSearchParams(useLocation().search);
  console.log('query', query.get('q'));
  
  
  return (
    <div className={styles.App}>
      <Header title={'这是title'}></Header>
      <Footer></Footer>
    </div>
  );
}

