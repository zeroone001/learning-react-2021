import React, {useContext} from 'react';
import { UpdateAppContext } from "../../AppState";

/* 高阶函数 */
export const withAddHoc = (ChildComponents: React.ComponentType) => {
  return (props) => {
    return <ChildComponents {...props} />
  }
};
/* 这就是自定义hook */
export const UseAddtoCart = () => {
  const setValue = useContext(UpdateAppContext);
  const clickEvent = () => {
    if (setValue) {
      setValue((state) => {
        return {
          ...state,
          username: "zxcvxxxxx",
        };
      });
    }
  };
  return clickEvent
};
