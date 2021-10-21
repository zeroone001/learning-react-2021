import React from "react";
import { InnerLogin } from './InnerLogin';
import { useSelector, useDispatch } from 'react-redux';
import { MyState } from '../../redux/myReducer';

export const LoginIn: React.FC = () => {
  const language = useSelector<MyState>((state) => state.language)
  return (
  <div>
    这是， {language}
    <InnerLogin title={'点击我'}></InnerLogin>
  </div>);
};


