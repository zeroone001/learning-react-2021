import React, { useContext } from "react";
import robotStyle from "./robot.module.css";
import { AppContext } from "../index";
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
  return (
    <div className={robotStyle.robot}>
      {id}-{name}={value.username}
    </div>
  );
};
export default Bobot;
