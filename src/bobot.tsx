import React from 'react';
import robotStyle from './robot.module.css';

// function Bobot (props): React.FC {
//   return (
//     <div>
//       Bobot
//     </div>
//   );
// }
interface RobotProps {
    id: string,
    name: string
}
const Bobot: React.FC<RobotProps> = ({ id, name }) => {
    return <div className={robotStyle.robot}>
        {id}-{name}
    </div>
}
export default Bobot;
