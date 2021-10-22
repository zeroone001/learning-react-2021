import React from "react";
import { InnerLogin } from "./InnerLogin";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/useSelector";
import { changeLan } from '../../redux/configureStore';

export const LoginIn: React.FC = () => {
  const language = useSelector((state) => state.language);

  const dispatch = useDispatch();
  
  function changeLanguage() {
    dispatch(changeLan('英语'));
  }

  return (
    <div>
      <div onClick={changeLanguage}>这是， {language}</div>

      <InnerLogin title={"点击我"}></InnerLogin>
    </div>
  );
};
