import React, { useContext } from "react";
import robotStyle from "./robot.module.css";
import { AppContext } from "../AppState";
import { UseAddtoCart } from "./AddHoc";
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
  const clickEvent = UseAddtoCart();
  return (
    <div className={robotStyle.robot} onClick={() => clickEvent()}>
      RobotComponent--- {id}-{name}={value.username}, {value.age}
    </div>
  );
};
export default Bobot;
