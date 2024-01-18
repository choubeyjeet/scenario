import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaFilePdf,FaFilePowerpoint,FaCloudUploadAlt, FaFileExcel, FaFileWord, FaImage, FaTrash } from "react-icons/fa";
import {ISO} from "../ISO";
import { useDispatch, useSelector } from "react-redux";
import { setformValue } from "../../../../features/CreateScenario/CreateScenarioSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationBox from "../../../ConfirmationBox/ConfirmationBox";


export default function ServerSetting ({objectType}) {
  const dispatch = useDispatch()
    const [activeSection, setActiveSection] = useState(null);
    const [activeSection1, setActiveSection1] = useState(4);
    const [activeSetting, setactiveSetting] = useState(0);
    const [activeISO, setactiveISO] = useState(null);
   
    const [currentIndex, setCurrentIndex] = useState(null);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const { serverstationtype, srname, srdescription, srlabname, srlabId, srlabdescription, srconfigmemory, srconfigcpu, srconfigarchitecture, srconfigmodel, srdocuments } = useSelector(state => state.scenario);


    const deleteListItem = (index)=>{
      const newArray = [...srdocuments];
      newArray.splice(index, 1);
    
      dispatch(setformValue({
        srdocuments: newArray
      }));
      setDeleteConfirmation(false)
      toast("Document deleted successfully.");
    }
  
    const fileType = useRef(null)

    const toggleAccordion = (index) => {
      setActiveSection((prevIndex) => (prevIndex === index ? null : index));
    };
    const toggleAccordion1 = (index) => {
      setActiveSection1((prevIndex) => (prevIndex === index ? null : index));
    };


    const setFieldValue = (index) => {
      setactiveISO(index);
  
      const formData = ISO[index];
  
      dispatch(setformValue({
        srlabname: formData.name,
        srlabdescription: formData.description,
        srlabId: formData.id
      }));
    };
  
    const handleKeyPress = (event) => {
      // Prevent typing any characters
      if (!/^\d$/.test(event.key)) {
        event.preventDefault();
      }
    };
  
    const uploadDocument = (e) => {
      const updatedDocumentList = [...srdocuments, e[0]];
      
      dispatch(setformValue({
        srdocuments: updatedDocumentList
      }));
     
      toast("Document uploaded successfully.");
    };
    
    const setDeleteConfirmationBox = (index) =>{
      setCurrentIndex(index);
      setDeleteConfirmation(true)
    }

    return <>  <div className="titleForShow">{objectType} Setting</div>
    <div className="accordion">
       <div className={`accordion-item ${activeSection === 0 ? 'active' : ''}`}>
         <div className="accordion-header" onClick={() => toggleAccordion(0)}>
         <span>General</span><span>{activeSection===0 ? <FaAngleUp /> : <FaAngleDown />}</span>
         </div>
         <div className="accordion-content">
            <div className="inputfieldWithLabel">
              <span className="fieldTitle">Type</span>
              <br />
              <input
                type="text"
                readOnly
                placeholder={serverstationtype}
                value={serverstationtype}
                className="readOnlyText"
              />
            </div>
            <div className="inputfieldWithLabel">
              <span className="fieldTitle">Node Name*</span>
              <br />
              <input
                type="text"
                placeholder="Enter Node Name"
                className="inputfieldT"
                onChange={(e)=>{
                  dispatch(setformValue({srname: e.target.value}));
                }}
                value={srname}
              />
            </div>
            <div className="inputfieldWithLabel">
              <span className="fieldTitle">Node Description</span>
              <br />
              <input
                type="text"
                placeholder="Enter Node Description"
                className="inputfieldT"
                onChange={(e)=>{
                  dispatch(setformValue({srdescription: e.target.value}));
                }}
                value={srdescription}
              />
            </div>
          </div>
       </div>
 
       <div className={`accordion-item ${activeSection === 1  ? 'active' : ''}`}>
         <div className="accordion-header" onClick={() => toggleAccordion(1)}>
           <span>Lab</span><span>{activeSection === 1 ? <FaAngleUp /> : <FaAngleDown />}</span>
         </div>
         <div className="accordion-content">
            <div className="inputfieldWithLabel">
              <input
                type="text"
                readOnly
                value={srlabname}
                placeholder="No Lab Assigned"
                className="readOnlyText"
               
              />
            </div>
            <div className="inputfieldWithLabel">
              <span className="fieldTitle">Description</span>
              <br />
              <input
                type="text"
                value={srlabdescription}
                readOnly
                placeholder="Enter Node Description"
                className="inputfieldT"
              />
            </div>
            <div className="inputfieldWithLabel">
              <div className="configurationTab">
                <span
                  className={activeSetting === 0 ? 'activeUnderLin' : ''}
                  onClick={() => {
                    setactiveSetting(0);
                  }}
                >
                  General
                </span>
                <span
                  className={activeSetting === 1 ? 'activeUnderLin' : ''}
                  onClick={() => {
                    setactiveSetting(1);
                  }}
                >
                  Configuration
                </span>
              </div>
            </div>

            {activeSetting === 0 && (
              <>
                <div className="inputfieldWithLabel">
                  <div>
                    <input className="inputfieldT" placeholder="Search Here" />
                  </div>
                  <div style={{ marginTop: 20 }}>
                    {ISO.map((value, index) => (
                      <span key={`icon_${index}`}>
                        <img
                          src={value.icon}
                          title={value.name}
                          onClick={() => setFieldValue(index)}
                          className={`isoIcon ${
                            activeISO === index ? 'activeIcon' : ''
                          }`}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeSetting === 1 && (
              <>
                <br />
                <div className="accordion">
                  <div
                    className={`accordion-item ${
                      activeSection1 === 4 ? 'active' : ''
                    }`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion1(4)}
                    >
                      <span>Default Section</span>
                      <span>
                        {activeSection1 === 4 ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                    </div>
                    {activeSection1 === 4 && (
                      <>
                        <div className="accordion-content">
                          <div className="inputfieldWithLabel">
                            <span className="fieldTitle">Memory(GB)*</span>
                            <br />
                            <input
                              type="text"
                              min="0"
                              placeholder="GB"
                              className="inputfieldT"
                              
                              onChange={(e)=>{
                                dispatch(setformValue({srconfigmemory: e.target.value}));
                              }}
                              value={srconfigmemory}
                              onKeyPress={handleKeyPress}
                            />
                          </div>
                          <div className="inputfieldWithLabel">
                            <span className="fieldTitle">CPU*</span>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="Number of CPU"
                              className="inputfieldT"
                              onKeyPress={handleKeyPress}
                              onChange={(e)=>{
                                dispatch(setformValue({srconfigcpu: e.target.value}));
                              }}
                              value={srconfigcpu}
                            />
                          </div>
                          <div className="inputfieldWithLabel">
                            <span className="fieldTitle">
                              CPU Architecture
                            </span>
                            <br />
                            <input
                              type="text"
                              onKeyPress={handleKeyPress}
                              placeholder="Enter CPU Architecture"
                              className="inputfieldT"
                              onChange={(e)=>{
                                dispatch(setformValue({srconfigarchitecture: e.target.value}));
                              }}
                              value={srconfigarchitecture}
                            />
                          </div>
                          <div className="inputfieldWithLabel">
                            <span className="fieldTitle">CPU Model</span>
                            <br />
                            <input
                              type="text"
                              placeholder="Enter CPU Model"
                              className="inputfieldT"
                              onChange={(e)=>{
                                dispatch(setformValue({srconfigmodel: e.target.value}));
                              }}
                              value={srconfigmodel}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className={`accordion-item ${
                      activeSection1 === 5 ? 'active' : ''
                    }`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion1(5)}
                    >
                      <span>Select predefined configuration</span>
                      <span>
                        {activeSection1 === 5 ? <FaAngleUp /> : <FaAngleDown />}
                      </span>
                    </div>
                    {activeSection1 === 5 && (
                      <>
                        <div className="accordion-content">
                          <p>Content for section 1.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
       </div>
 
       <div className={`accordion-item ${activeSection === 2 ? 'active' : ''}`}>
         <div className="accordion-header" onClick={() => toggleAccordion(2)}>
         <span>Documents</span><span>{activeSection===2 ? <FaAngleUp /> : <FaAngleDown />}</span> 
         </div>
         <div className="accordion-content" style={{margin: "auto 0"}}>
           {activeSection === 2 && <>
           
            <div className="ButtonUploaderDiv">
                  <label htmlFor="upload-file" title="Add Document" className="ButtonLabel"><span><FaCloudUploadAlt size="26px"/></span> <span>Add Document</span></label>
                  <input type="file" id="upload-file" className="UploaderBtn" onChange={(e)=>{
                    uploadDocument(e.target.files)
                  }}
                  accept=
"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
                  />
                </div>
                <div>
                <ul className="DocumentView">
  {srdocuments.length >0 ? <>{srdocuments?.map((value, index) => {
    const fileExtension = value.name.split('.').pop().toLowerCase();
    
    let icon;
    if (fileExtension === 'pdf') {
      icon = <FaFilePdf  />;
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      icon = <FaImage />;
    } else if (['doc', 'docx'].includes(fileExtension)) {
      icon = <FaFileWord />;
    } else if (['ppt', 'pptx'].includes(fileExtension)) {
      icon = <FaFilePowerpoint />;
    } else if (['xls', 'xlsx'].includes(fileExtension)) {
      icon = <FaFileExcel />;
    } else {
      // Default icon for unknown file types
      icon = <FaImage />;
    }

    return (
      <li key={`index_${index}`}>
        
        <span className="ChildViewIcon"><span>{icon}</span> <span>{value.name}</span></span>
        <span><FaTrash className="DeleteIcon" title="Remove Document" onClick={()=>{
            
            setDeleteConfirmationBox(index)
          }}/></span>
      </li>
    );
  })}</>: <><span>No documents to display.</span></>}
</ul>

                </div>
           
           </>}
         </div>
       </div>
     </div>
     <ToastContainer autoClose={2000}/>
      {deleteConfirmation && <><ConfirmationBox setDeleteConfirmation={setDeleteConfirmation} currentIndex={currentIndex} deleteReport={deleteListItem} dataType={"Document"}/></>}
     </>
}