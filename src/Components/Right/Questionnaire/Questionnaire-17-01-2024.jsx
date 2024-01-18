import { useState } from "react"
import { FaArrowLeft, FaRegTrashAlt, FaEdit, FaAngleDown, FaAngleUp, } from "react-icons/fa";
export default function Questionnaire () {

    const [questionnaire, setQuestionnaire] =  useState([]);
    const [questionnaireName, setquestionnaireName] =  useState("");
    const [questionnaireName2, setquestionnaireName2] =  useState("");
    const [showAddquestion, setShowAddquestion] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

const addQuestionnaire = () =>{
    setquestionnaireName2(questionnaireName)
    setQuestionnaire([...questionnaire, {
        "name": questionnaireName,
        "description": "",
        "user": [],
        "passingThreshold":"",
        "question": []
    }])
    setquestionnaireName("");
    setShowAddquestion(true);
}

const addQuestion = () => {
    setQuestionnaire(prevQuestionnaire => {
        const lastQuestionnaire = prevQuestionnaire[prevQuestionnaire.length - 1];

        // Check if the last questionnaire exists and has a "question" array
        if (lastQuestionnaire && Array.isArray(lastQuestionnaire.question)) {
            // Push a new question object into the "question" array
            lastQuestionnaire.question.push({
                name: "",
                answermode: "",
                mcq: [],
                qna: "",
                flag: ""
            });
        }

        return [...prevQuestionnaire];
    });
};

const toggleAccordion = (index) => {
    setActiveSection((prevIndex) => (prevIndex === index ? null : index));
  };
    return <>
    {console.log(questionnaire[0]?.name)}
   {!showAddquestion ? <>  <div className="buttonGroupNotes">
    <div className="inputFieldW100"><input placeholder="New questionnaire name*"  onChange={(e)=>{setquestionnaireName(e.target.value)}} value={questionnaireName}/></div>
    <div><button style={{width: 80}} onClick={addQuestionnaire} disabled={questionnaireName !==""? false : true}>Add</button></div>

    </div>  {questionnaire.length > 0 ? <>
    
        <div className="listofNotes">
        <ul>
          {questionnaire.map((val, index) => (
            <li key={index} className="EditIconForNotes"><span style={{width: "90%"}}>{val.name}</span><span className="removeNotes"><FaEdit title="Edit" onClick={()=>{editNotes(index)}}/>&nbsp;&nbsp;&nbsp;&nbsp;<FaRegTrashAlt title="Delete" onClick={()=>{
            
              setDeleteConfirmationBox(index)
            }}/></span></li>
          ))}
        </ul>
        </div>

</> : <><div className="descriptionC" style={{marginTop:20}}>No questionnaire(s) to display.</div></>}</> : <>
    <div className="backBtn" onClick={()=>{setShowAddquestion(false)}}><FaArrowLeft /> Back to the list</div>
    <div className="inputfieldWithLabel"><span className="fieldTitle">Questionnaire Name*</span><br /><input type="text" defaultValue={questionnaireName2} readOnly className="readOnlyText"/></div>
        <div className="inputfieldWithLabel"><span className="fieldTitle">Questionnaire Description</span><br /><input placeholder="Enter Questionnaire Description" type="text"  className="inputfieldT"/></div>

    <div style={{display:"flex", justifyContent: "space-between"}}>
    <div className="inputfieldWithLabel" style={{width: "50%"}}><span className="fieldTitle">Select User</span><br /><select placeholder="Enter Questionnaire Description" type="text"  className="inputfieldT"><option>test</option></select></div>
        
        <div className="inputfieldWithLabel" style={{width: "40%"}}><span className="fieldTitle">Passing Threshold</span><br />
        
        <input type="number" min="0" className="inputfieldT" style={{width: "50%"}}/> of 0 points
        </div>

    </div>
<div style={{marginTop:40}}><hr /></div>
<span className="descriptionC" style={{marginBottom:40}}>
Add new question
</span>
<div className="inputfieldWithLabel"><span className="fieldTitle">Question*</span><br /><input placeholder="Enter Question" type="text"  className="inputfieldT"/></div>
<div style={{display:"flex", justifyContent: "space-between", alignItems: "self-end"}}>
<div className="inputfieldWithLabel" style={{width: "100%"}} ><span className="fieldTitle">Select Answer Mode*</span><br /><select placeholder="Enter Questionnaire Description" type="text"  style={{width: "95%"}} className="inputfieldT"><option>MCQ</option><option>QNA</option><option>Flag</option></select></div>
<div className="inputfieldWithLabel"><button className="addBtn" onClick={addQuestion}>Add</button></div>
</div>
<div className="accordion" style={{marginTop:30}}>
   
{questionnaire[0]?.question.length > 0 && <>
    {questionnaire[0]?.question.map((val, index)=>{
return <div  className={`accordion-item ${activeSection === index ? 'active' : ''}`}>
<div className="accordion-header" onClick={() => toggleAccordion(index)}>
  <span>accordion title</span>
  <span>{activeSection === index ? <FaAngleUp /> : <FaAngleDown />}</span>
</div>
<div className="accordion-content">
  testst
  </div>

</div>
})}</>}
    </div>
        </>}
  



   
    </>
}