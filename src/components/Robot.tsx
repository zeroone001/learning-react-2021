import React, { useContext } from "react";
import robotStyle from "./robot.module.css";
import { AppContext, UpdateAppContext } from "../AppState";
// function Bobot (props): React.FC {
//   return (
//     <div>
//       Bobot
//     </div>
//   );
// }
interface RobotProps {
  id: string;
  name: string;
}
const Bobot: React.FC<RobotProps> = ({ id, name }) => {
  //   return (
  //     <AppContext.Consumer>
  //       {(value) => {
  //         return (
  //           <div className={robotStyle.robot}>
  //             {id}-{name}={value.username}
  //           </div>
  //         );
  //       }}
  //     </AppContext.Consumer>
  //   );
  const value = useContext(AppContext);
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
  return (
    <div className={robotStyle.robot} onClick={clickEvent}>
      {id}-{name}={value.username}, {value.age}
    </div>
  );
};
export default Bobot;
