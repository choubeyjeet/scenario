import DraggableImage from '../DraggableImage/DraggableImage';
import Network from "./assets/img/network.png";
import Gateway from "./assets/img/gateway.png";
import Server from "./assets/img/server.png";
import Workstation from "./assets/img/workstation.png";


export default function LeftContainer () {

    return <><ul className="imageIconUL">
        {/* <li><span><DraggableImage src={Gateway} type="Gateway" /> <br />Gateway</span></li> */}
        <li><span><DraggableImage src={Network} type="Network"/> <br />Network</span></li>
        <li><span><DraggableImage src={Server} type="Server"/><br /> Server</span></li>
       <li><span><DraggableImage src={Workstation} type="Workstation"/><br /> Workstation</span></li>
        </ul></>;
}