import React from "react";
import { InnerRegister } from './InnerRegister';
import store from '../../redux/store';


export const Register: React.FC = () => {
  const stateStore = store.getState();

  return (
  <div>
    <InnerRegister title={stateStore.language}></InnerRegister>
  </div>);
};


