import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { useDispatch, useSelector } from 'react-redux';
import { setformValue } from "../../../features/CreateScenario/CreateScenarioSlice";
import { FaAngleDown, FaAngleUp,FaRegTrashAlt, FaEdit } from "react-icons/fa";
import DOMPurify from 'dompurify';
import "./assets/css/modalBox.css";
import htmlToDraft from 'html-to-draftjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationBox from '../../ConfirmationBox/ConfirmationBox';
import LoaderGIF from '../../LoaderGIF/LoaderGIF';

const ScenarioReports = () => {
    const dispatch = useDispatch()
    const [inputField, setInputField] = useState("");
    const [inputData, setInputData] = useState("");
    const { reports } = useSelector(state => state.scenario);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showAddSections, setShowAddSections] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
   const [editReportS, setEditReport] = useState(false);
   const [editorState, setEditorState] = useState(EditorState.createEmpty());
   const [editorState1, setEditorState1] = useState(EditorState.createEmpty());
   const [editedTitles, setEditedTitles] = useState("");
   const [editedData, setEditedData] = useState("");
   const [deleteConfirmation, setDeleteConfirmation] = useState(false);
   const [isLoading, setIsLoading] = useState(false);


  const handleGetEditorValue = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = draftToHtml(rawContentState); // Convert to HTML
    setInputData(html)
 
  };
  const handleGetEditorValue1 = () => {
    const contentState = editorState1.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = draftToHtml(rawContentState); // Convert to HTML
    setEditedData(html)
 
  };
  
  const handleInputChange = (event) => {
    const newValue = event.target.value;

    // Check if the first character is a space and prevent updating the state
    if (newValue.length === 0 || (newValue.length === 1 && newValue[0] === ' ')) {
      setInputField("");
      return;
    }

    // Remove extra spaces using a regular expression
    const cleanedValue = newValue.replace(/\s+/g, ' ');

    setInputField(cleanedValue);
  };

  const editedChangeHandle = (event) => {
    const newValue = event.target.value;

    // Check if the first character is a space and prevent updating the state
    if (newValue.length === 0 || (newValue.length === 1 && newValue[0] === ' ')) {
      setInputField("");
      return;
    }

    // Remove extra spaces using a regular expression
    const cleanedValue = newValue.replace(/\s+/g, ' ');

    setEditedTitles(cleanedValue);
  };

  const addSectionNew = ()=>{



const fdata = {
    title: inputField,
    data: inputData,
}
dispatch(setformValue({
    reports: [...reports, fdata]
}));
resetEditor()
setShowAddSections(false)

setInputField("");
setActiveSection(null)
toast("Report Section Added successfully.");
  }


  const toggleAccordion = (index) => {
    setActiveSection((prevIndex) => (prevIndex === index ? null : index));
  };


  const sanitizeAndRenderHTML = (htmlContent) => {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);
    return { __html: sanitizedHTML };
  }; 

//to reset the editor
  const resetEditor = () => {
    const newEditorState = EditorState.createEmpty();
    setEditorState(newEditorState);
  };

  const resetEditor1 = () => {
    
    const newEditorState1 = EditorState.createEmpty();
    setEditorState1(newEditorState1);
  };


  //deleteReport PopUp 
const setDeleteConfirmationBox = (index) =>{
  setCurrentIndex(index);
  setDeleteConfirmation(true)
}


 //to delete the report
 const deleteReport = (index) => { 
  const newArray = [...reports];
    newArray.splice(index, 1);
  
    dispatch(setformValue({
        reports: newArray
    }));
    setActiveSection(null)
    setDeleteConfirmation(false)
    toast("Report Section deleted successfully.");
 }

 //to edit the report 
 const editReport = (index) => {
  setEditReport(true);
  const report = reports[index];

  setEditedData(report.data);
  setEditedTitles(report.title);
  setCurrentIndex(index);
  setActiveSection(null)
  const contentBlock = htmlToDraft(report.data);
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
      contentBlock.entityMap
    );
    setEditorState1(EditorState.createWithContent(contentState));
  }
};


const addEditedSection = ()=>{



  const fdata = {
      title: editedTitles,
      data: editedData,
  }
  

  const newArray = [...reports];

  // Update the value at currentIndex with the new inputField value
  newArray.splice(currentIndex, 1, fdata);


  // Dispatch action immediately with the updated array
  dispatch(setformValue({
      reports: newArray
  }));
  setEditReport(false);
 setIsLoading(true);
  toast("Report Section updated successfully.");
  setIsLoading(false);   
}

 const closeEditS = () => { 

  setEditReport(false)
 }

  return (
    <>
    {isLoading && <><LoaderGIF /></>}
      <div className="buttonGroupNotes" style={{marginBottom:20}}><span></span>
        <button onClick={()=>{setShowAddSections(!showAddSections)}}>Add Section</button>
      </div>
    

      <div className="accordion">
      {reports.length > 0 ?   <>{reports.map((value, index)=>{
            return <div key={index}>
            <div  className={`accordion-item ${activeSection === index ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <span>{value.title}</span>
            <span>{activeSection === index ? <FaAngleUp /> : <FaAngleDown />}</span>
          </div>
          <div className="accordion-content">
            <div className=' reportSection'><div dangerouslySetInnerHTML={sanitizeAndRenderHTML(value.data)} style={{width: "85%"}}/>
          
          <div><FaEdit className='reportIcon' title="Edit Report"  onClick={()=>{
            editReport(index)
          }}/> &nbsp; | &nbsp;<FaRegTrashAlt title="Delete Report" className='reportIcon' onClick={()=>{
            
            setDeleteConfirmationBox(index)
          }}/></div></div>
          
          </div>
        </div>
            </div>
        })}</> : <><div className='descriptionC'>No Sections to display</div></>}
        </div>

{showAddSections && <>
    <div className="buttonGroupNotes">
      <div style={{width: "100%"}} >
          <input
            placeholder="Enter Report Title"
            onChange={(e) => handleInputChange(e)}
           value={inputField}
          /><br />&nbsp;&nbsp;<br />&nbsp;
        </div></div>
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onChange={handleGetEditorValue}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
         
        />
        <div className="buttonGroupNotes">
        <button onClick={resetEditor}>Clear Section</button>
        <button onClick={addSectionNew} disabled={inputField === "" || inputData === ""}
>Save Section</button> 
      </div>
      </div>
</>}


{editReportS && <><div id="myModal" className="modalBox">


<div className="modal-content">
  <span className="close" onClick={closeEditS}>&times;</span>
  <div className="buttonGroupNotes">
      <div style={{width: "100%"}} >
          <input
            placeholder="Enter Report Title"
            onChange={(e) => editedChangeHandle(e)}
           value={editedTitles}
          /><br />&nbsp;&nbsp;<br />&nbsp;
        </div></div>
      <div>
        <Editor
          editorState={editorState1}
          onEditorStateChange={setEditorState1}
          onChange={handleGetEditorValue1}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
         
        />
        <div className="buttonGroupNotes">
        <button onClick={resetEditor1}>Clear Section</button>
        <button onClick={addEditedSection} disabled={editedTitles === "" || editedData === ""}
>Save Changes</button> 
      </div>
      </div>
</div>

</div></>}
<ToastContainer autoClose={2000}/>
{deleteConfirmation && <><ConfirmationBox setDeleteConfirmation={setDeleteConfirmation} currentIndex={currentIndex} deleteReport={deleteReport} dataType={"Report"}/></>}

    </>
  );
};

export default ScenarioReports;
