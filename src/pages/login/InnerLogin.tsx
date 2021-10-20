import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
// 这里使用了高阶函数withRouter
interface PropsType extends RouteComponentProps {
  title: string;
}

const InnerLoginInComponent: React.FC<PropsType> = ({
  title,
  history,
  location,
  match,
}) => {
  return (
    <div onClick={() => history.push("/detail/123")}>
      <h1>登录页面 {title}</h1>
    </div>
  );
};

export const InnerLogin = withRouter(InnerLoginInComponent);
