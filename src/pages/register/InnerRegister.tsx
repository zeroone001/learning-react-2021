import React from "react";
import { Link, withRouter, RouteComponentProps, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
// 这里使用了高阶函数withRouter
interface PropsType {
  title: string;
}

export const InnerRegister: React.FC<PropsType> = ({
  title,
}) => {
  const history = useHistory();
  return (
    <Link to={"/detail/123"}>
      <h1>注册页面 {title}</h1>
    </Link>
  );
};

// export const InnerRegister = withRouter(InnerRegisterComponent);
