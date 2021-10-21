import React from "react";
import { InnerLogin } from './InnerLogin';
import { userSelector } from 'react-redux';

export const LoginIn: React.FC = () => {
  const language = userSelector((state) => state.language)
  return (
  <div>
    <InnerLogin title={'点击我'}></InnerLogin>
  </div>);
};


