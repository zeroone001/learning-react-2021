import React, { useState } from "react";

interface defaultContextType {
  username: string
  age: number
}

const defaultContext: defaultContextType = {
  username: "abc",
  age: 18
};

export const AppContext = React.createContext(defaultContext);
export const UpdateAppContext = React.createContext<
  React.Dispatch<React.SetStateAction<defaultContextType>> | undefined
>(undefined);


// 定义一个高阶函数
export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContext);
  // 我们需要把setState也传过去
  return (
    <AppContext.Provider value={state}>
      <UpdateAppContext.Provider value={setState}>{props.children}</UpdateAppContext.Provider>
    </AppContext.Provider>
  );
};
// export default AppState;
