import React from "react";
import { InnerLogin } from "./InnerLogin";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/useSelector";
import { changeLan } from '../../redux/configureStore';
import { RouteComponentProps, useParams } from "react-router-dom";

interface MatchParams {
  tid: string
}

export const LoginIn: React.FC<RouteComponentProps<MatchParams>> = () => {
  // 获取params
  const { tid } = useParams<MatchParams>();
  // state

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
