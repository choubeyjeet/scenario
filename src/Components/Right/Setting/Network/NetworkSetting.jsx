import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaCloudUploadAlt } from "react-icons/fa";
import {ISO} from "../ISO";
import { useDispatch, useSelector } from "react-redux";
import { setformValue } from "../../../../features/CreateScenario/CreateScenarioSlice";
export default function NetworkSetting ({objectType}) {
    const dispatch = useDispatch()
    const [activeSection, setActiveSection] = useState(null);
    const [activeSection1, setActiveSection1] = useState(4);
    const [activeSetting, setactiveSetting] = useState(0);
    const [activeISO, setactiveISO] = useState(null);
    const [formLabValue, setformLabValue] = useState({
      labname: "",
      labdescription: ""
    });
    const fileType = useRef(null)

    const toggleAccordion = (index) => {
      setActiveSection((prevIndex) => (prevIndex === index ? null : index));
    };
    const toggleAccordion1 = (index) => {
      setActiveSection1((prevIndex) => (prevIndex === index ? null : index));
    };

    const { networkstationtype, ntname, ntdescription } = useSelector(state => state.scenario);

//Start To set the value for Lab 
const setFieldValue = (index)=>{
  setactiveISO(index)

const formData = ISO[index];

setformLabValue({
  labname: formData.name,
  labdescription: formData.description
})

}

//End To set the value for Lab 


  // const handleKeyPress = (event) => {
  //   // Prevent typing any characters
  //   if (!/^\d$/.test(event.key)) {
  //     event.preventDefault();
  //   }
  // };


  const handleInputChange = (fieldName, event) => {
    const newValue = event.target.value;
  
    // Check if the first character is a space and prevent updating the state
    if (newValue.length === 0 || (newValue.length === 1 && newValue[0] === ' ')) {
      dispatch(setformValue({ [fieldName]: '' })); // Use computed property name
      return;
    }
  
    // Remove extra spaces using a regular expression
    const cleanedValue = newValue.replace(/\s+/g, ' ');
  
    dispatch(setformValue({ [fieldName]: cleanedValue })); // Use computed property name
  };

    return <>  <div className="titleForShow">{objectType} Setting</div>
    <div className="accordion">
       <div className={`accordion-item ${activeSection === 0 ? 'active' : ''}`}>
         <div className="accordion-header" onClick={() => toggleAccordion(0)}>
         <span>General</span><span>{activeSection===0 ? <FaAngleUp /> : <FaAngleDown />}</span>
         </div>
         <div className="accordion-content">
            <div className="inputfieldWithLabel">
     <span className="fieldTitle">Type</span><br />
 
         <input type="text" readOnly placeholder="" value={networkstationtype} className="readOnlyText"/>
</div>
<div className="inputfieldWithLabel">
        <span className="fieldTitle">Node Name*</span><br />
         <input type="text" value={ntname} placeholder="Enter Node Name" className="inputfieldT"
         onChange={(e)=>{
          handleInputChange("ntname" ,e)
         
        }}
        />
</div>
      
<div className="inputfieldWithLabel">
         <span className="fieldTitle">Node Description</span><br />
         <input type="text" value={ntdescription} placeholder="Enter Node Description" className="inputfieldT"
           onChange={(e)=>{
          handleInputChange("ntdescription" ,e)
         
        }}
         />
         
         </div>
         </div>
       </div>
{/*  
       <div className={`accordion-item ${activeSection === 1  ? 'active' : ''}`}>
         <div className="accordion-header" onClick={() => toggleAccordion(1)}>
           <span>Lab</span><span>{activeSection === 1 ? <FaAngleUp /> : <FaAngleDown />}</span>
         </div>
         <div className="accordion-content">
            <div className="inputfieldWithLabel">

         <input type="text" readOnly value={formLabValue.labname} placeholder="No Lab Assigned" className="readOnlyText"/>
</div>

      
<div className="inputfieldWithLabel">
         <span className="fieldTitle">Description</span><br />
         <input type="text" value={formLabValue.labdescription} readOnly placeholder="Enter Node Description" className="inputfieldT"/>
         
         </div>


         <div className="inputfieldWithLabel">
         
<div className="configurationTab">   <span className={activeSetting===0 ? "activeUnderLin" : ""} onClick={()=>{setactiveSetting(0)}}>General</span>
          <span className={activeSetting===1 ? "activeUnderLin" : ""}  onClick={()=>{setactiveSetting(1)}}>Configuration</span></div>
       
        
         
         </div>

{activeSetting===0 && <>
  <div className="inputfieldWithLabel">
<div>

<input className="inputfieldT" placeholder="Search Here" />
</div>
<div style={{marginTop: 20}}>
{ISO.map((value, index) => (
  <span key={`icon_${index}`}>
    <img
      src={value.icon}
      title={value.name}
      onClick={() => setFieldValue(index)}
      className={`isoIcon ${activeISO === index ? 'activeIcon' : ''}`}
    />
  </span>
))}

</div>
</div>
</>}

{activeSetting===1 && <><br />
  <div className="accordion">
      <div className={`accordion-item ${(activeSection1 === 4) ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => toggleAccordion1(4)}>
        <span>Default Section</span><span>{activeSection1===4 ? <FaAngleUp /> : <FaAngleDown />}</span>  
        </div>
        {activeSection1===4 && <><div className="accordion-content">
        <div className="inputfieldWithLabel">
        <span className="fieldTitle">Memory(GB)*</span><br />
         <input type="text" min="0"  placeholder="GB" className="inputfieldT"  onKeyPress={handleKeyPress}/>
</div>
<div className="inputfieldWithLabel">
        <span className="fieldTitle">CPU*</span><br />
         <input type="number" min="0" placeholder="Number of CPU" className="inputfieldT" onKeyPress={handleKeyPress}/>
</div>
<div className="inputfieldWithLabel">
        <span className="fieldTitle">CPU Architecture</span><br />
         <input  type="text"  onKeyPress={handleKeyPress} placeholder="Enter CPU Architecture" className="inputfieldT"/>
</div>
<div className="inputfieldWithLabel">
        <span className="fieldTitle">CPU Model</span><br />
         <input type="text"  placeholder="Enter CPU Model" className="inputfieldT" />
</div>
        </div></>}
      </div>
      <div className={`accordion-item ${activeSection1 === 5 ? 'active' : ''}`}>
        <div className="accordion-header" onClick={() => toggleAccordion1(5)}>
        <span>Select predefined configuration</span><span>{activeSection1===5 ? <FaAngleUp /> : <FaAngleDown />}</span>  
        </div>
        {activeSection1 === 5 && <>   <div className="accordion-content">
          <p>Content for section 1.</p>
        </div></>}
     
      </div>
      </div>
</>}

         </div>
       </div> */}
 
       {/* <div className={`accordion-item ${activeSection === 2 ? 'active' : ''}`}>
         <div className="accordion-header" onClick={() => toggleAccordion(2)}>
         <span>Documents</span><span>{activeSection===2 ? <FaAngleUp /> : <FaAngleDown />}</span> 
         </div>
         <div className="accordion-content" style={{margin: "auto 0"}}>
           {activeSection === 2 && <>
           
           <div>
            
           <input type="file" id="upload-file" />
           </div>

           
           </>}
         </div>
       </div> */}
     </div></>
}