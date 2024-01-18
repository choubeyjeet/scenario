import React, { useEffect, useState } from "react";
import "./assets/css/RightContainer.css";
import { FaAngleRight, FaAngleLeft,FaPencilRuler } from "react-icons/fa";
import WorkstationSetting from "./Setting/Workstation/WorkstationSetting";
import ServerSetting from "./Setting/Server/ServerSetting";
import NetworkSetting from "./Setting/Network/NetworkSetting";
import ScenarioNotes from "./Notes/ScenarioNotes";
import ScenarioReports from "./Reports/ScenarioReports";
import Questionnaire from "./Questionnaire/Questionnaire";
import ScenarioCreate from "../ScenarioCreate/ScenarioCreate";

export default function RightContainer({ objectType }) {
  const menuItems = [
    { label: "CREATE", key: "CREATE" },
    { label: "DETAILS", key: "DETAILS" },
    { label: "QUESTIONNAIRE", key: "QUESTIONNAIRE" },
    { label: "REPORTS", key: "REPORTS" },
    { label: "NOTES", key: "NOTES" },
    
  ];

  const [active, setActive] = useState("CREATE");

  const [visibleItems, setVisibleItems] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  const handleItemClick = (item) => {
    setActive(item.key);
  
  };

  const handleArrowClick = (direction) => {
    if (direction === "right") {
      setStartIndex((prevIndex) => Math.min(prevIndex + 1, menuItems.length - 3));
    } else {
      setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <>
      <div>
        <ul className="rightPanelList">
        <li className="arrowBtn">  <button onClick={() => handleArrowClick("left")}><FaAngleLeft /></button></li>
          {menuItems.slice(startIndex, startIndex + visibleItems).map((item) => (
            <li 
              key={item.key}
              className={active === item.key ? "active" : ""}
              onClick={() => {
                
                handleItemClick(item)
               
                
              }
              }
            >
              {item.label}
            </li>
          ))}
          <li className="arrowBtn"><button onClick={() => handleArrowClick("right")}>
            <FaAngleRight />
            </button></li>
        </ul>
        {/* {menuItems.length > visibleItems && (
          <div>
            
          
          </div>
        )} */}
      </div>
      <hr />




{ active==="DETAILS" && <>
{objectType === null && (
        <span className="descriptionC">
          To view or change configuration for a Node or Link, please select one first.
        </span>
      )}
      {objectType === "Workstation" && (
       <>
     <WorkstationSetting objectType={objectType}/>
       </>
      )}
      {objectType === "Network" && (
      <> <NetworkSetting objectType={objectType}/></>
      )}

{objectType === "Server" && (
       <> <ServerSetting objectType={objectType}/></>
      )}
</>

}

{active ==="NOTES" && <><ScenarioNotes/></>}

{active ==="CREATE" && <><ScenarioCreate/></>}

{active ==="REPORTS" && <><ScenarioReports/></>}
{active ==="QUESTIONNAIRE" && <><Questionnaire/></>}
    </>
  );
}
