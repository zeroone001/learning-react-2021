import React from 'react';

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
    return <li>
        {id}-{name}
    </li>
}
export default Bobot;
