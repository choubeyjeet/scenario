import { useDispatch, useSelector } from "react-redux";
export default function NavbarAction (){
  
    const data = useSelector(state => state.scenario);
const downloadJSON = () =>{
    
    console.log(data);
}
    return <><ul >
        <li onClick={downloadJSON}>Save</li>
        <li>Clear</li>
        <li></li>
        </ul></>
}