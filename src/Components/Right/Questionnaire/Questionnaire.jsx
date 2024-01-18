import { useEffect, useState } from "react"
import { FaArrowLeft, FaRegTrashAlt, FaEdit, FaAngleDown, FaAngleUp, } from "react-icons/fa";
export default function Questionnaire () {

    const [question, setQuestion] =  useState(null);
    const [error, setError] =  useState(null);
    const [questionType, setQuestionType] = useState(null);
    const [addQuestionform, setAddQuestionform] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

const setFormtType = (type)=>{
   
   if(type !==""){
    setQuestionType(type);
   }
   else{
    setQuestionType(null);
   }
    
   
    if(type==="mcq"){
        setQuestion({
            "ques_type": "mcq",
            "question": "",
            "a": "",
            "b": "",
            "c": "",
            "d": "",
            "answer": "",
            "category": ""
            
        })
        setError({
            "ques_type": "mcq",
            "question": false,
            "a": false,
            "b": false,
            "c": false,
            "d": false,
            "answer": false,
            "category": false,
            "equal": false
            
        })
    }
    if(type==="qna"){
        setQuestion({
            "ques_type": "qna",
            "question": "",
            "answer": "",
            
            
        })
        setError({
            "ques_type": "qna",
            "question": false,
            "answer": false,
            
            
        })
    }

    if(type==="flag"){
        setQuestion({
            "ques_type": "flag",
            "question": "",
            "answer": "",
            
            
        })
        setError({
            "ques_type": "flag",
            "question": false,
            "answer": false,
            
            
        })
    }
}

const formSubmit = () =>{
   const type = questionType;

   if(type === "mcq"){ 

    setError({
        "ques_type": "mcq",
        "question": false,
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "answer": false,
        "category": false,
        "equal": false
        
    })

    if (question.question === "") {
        setError((prevError) => ({ ...prevError, question: true }));
      }
      if (question.category === "") {
        setError((prevError) => ({ ...prevError, category: true }));
      }

      if (question.answer === "") {
        setError((prevError) => ({ ...prevError, answer: true }));
      }

      if (question.a === "") {
        setError((prevError) => ({ ...prevError, a: true }));
      }

      if (question.b === "") {
        setError((prevError) => ({ ...prevError, b: true }));
      }

      if (question.c === "") {
        setError((prevError) => ({ ...prevError, c: true }));
      }

      if (question.d === "") {
        setError((prevError) => ({ ...prevError, d: true }));
      }


      if (
        question.answer === question.a ||
        question.answer === question.b ||
        question.answer === question.c ||
        question.answer === question.d
      ) {
        setError((prevError) => ({ ...prevError, equal: false }));
      } else {
        setError((prevError) => ({ ...prevError, equal: true }));
      }

   }


   if(type === "flag"){ 

    setError({
        "ques_type": "flag",
        "question": false,
        
        "answer": false,
        
    })

    if (question.question === "") {
        setError((prevError) => ({ ...prevError, question: true }));
      }
     
      if (question.answer === "") {
        setError((prevError) => ({ ...prevError, answer: true }));
      }

    

   }

   if(type === "qna"){ 

    setError({
        "ques_type": "qna",
        "question": false,
        
        "answer": false,
        
    })

    if (question.question === "") {
        setError((prevError) => ({ ...prevError, question: true }));
      }
     
      if (question.answer === "") {
        setError((prevError) => ({ ...prevError, answer: true }));
      }


   }

if(type!==null){
    
     setIsSubmitted(true);
}
}





useEffect(() => {
       
    if (isSubmitted) {
        var hasErrors = null;
        if(questionType==="mcq"){
             hasErrors =  error.question || error.category || error.answer || error.a || error.b || error.c || error.d || error.equal;
        }
     
        if(questionType==="flag"){
            hasErrors = error.question ||  error.answer;
        }

        if(questionType==="qna"){
            hasErrors = error.question ||  error.answer;
        }

      if (!hasErrors) {
        console.log("Form submitted successfully");
        console.log(question)
      } else {
        console.log("Form has errors");
      }

      
      setIsSubmitted(false);
    }
  }, [error, isSubmitted]);

  
  const setOnfocuss = (name) => {
    setError((prevError) => ({ ...prevError, [name]: false }));
  };



  const handleInputChange = (field, value) => {
    const newValue = value;

    // Check if the first character is a space and prevent updating the state
    if (newValue.length === 0 || (newValue.length === 1 && newValue[0] === ' ')) {
        setQuestion((prevQuestion) => ({ ...prevQuestion, [field]: "" }));
      
      return;
    }

    // Remove extra spaces using a regular expression
    const cleanedValue = newValue.replace(/\s+/g, ' ');
    
    setQuestion((prevQuestion) => ({ ...prevQuestion, [field]: cleanedValue }));
    console.log(question);
  };


   return <>
  
 <div className="buttonGroupNotes" style={{marginBottom:20}}><span></span>
        <button onClick={()=>{setAddQuestionform(!addQuestionform)}}>Add Question</button>
      </div>
 

{addQuestionform && <>
    

    <div className="formGroupT">
    <label >Please Select Question Type*</label>
    <select name="type" className="inputField" onChange={(e)=>{
setFormtType(e.target.value);

    }}
    
    >
    <option value="">--Select Type--</option>
      <option value="mcq">MCQ</option>
      <option value="qna">QNA</option>
      <option value="flag">Flag</option>
     
    </select>
    
    </div>

    


   {questionType == 'mcq' && <>
   
   <div className="questionBg">
   <div className="formGroupT">
    <label >Please Select Question Category*</label>
    <select name="type" className="inputField" onChange={(e) => {
        setOnfocuss("category")
  setQuestion((prevQuestion) => ({ ...prevQuestion, category: e.target.value }));
}}>
  <option value="">--Select Category--</option>
  <option value="Space System Software">Category 1</option>
  <option value="Cyber Security Pen Testing">Category 2</option>
  <option value="Cyber Training Lab">Category 3</option>
  <option value="Hybrid Environment">Category 4</option>
</select>
{error.category && <><span className="error">Category is required.</span></>}

    
    </div>
   <div className="formGroupT">
   <label >Question*</label>
    <input type="text"  placeholder="Enter Question" className="inputField" 
    onFocus={()=>{ setOnfocuss("question")}}
    onChange={(e) => {
        handleInputChange("question", e.target.value )
 }}
 value={question.question}
 />
{error.question && <><span className="error">Question is required.</span></>}
   </div>
   
   <div className="formGroupT">
   
    <input type="text"  placeholder="Option 1" className="inputField" 
     onFocus={()=>{ setOnfocuss("a")}}
     onChange={(e) => {
        handleInputChange("a", e.target.value )
 }}
 value={question.a}/>
{error.a && <><span className="error">Option 1 is required.</span></>}
   </div>
   <div className="formGroupT">
  
    <input type="text"  placeholder="Option 2" className="inputField" 
     onFocus={()=>{ setOnfocuss("b")}}
     onChange={(e) => {
        handleInputChange("b", e.target.value )
 }}
 value={question.b}/>
{error.b && <><span className="error">Option 2 is required.</span></>}
   </div>
   <div className="formGroupT">
  
    <input type="text"  placeholder="Option 3" className="inputField"  
     onFocus={()=>{ setOnfocuss("c")}}
     onChange={(e) => {
        handleInputChange("c", e.target.value )
 }}
 value={question.c}/>
{error.c && <><span className="error">Option 3 is required.</span></>}
   </div>
   <div className="formGroupT">
  
    <input type="text"  placeholder="Option 4" className="inputField" 
     onFocus={()=>{ setOnfocuss("d")}}
     onChange={(e) => {
        handleInputChange("d", e.target.value )
 }}
 value={question.d}/>
{error.d && <><span className="error">Option 4 is required.</span></>}
   </div>
   <div className="formGroupT">
  
  <input type="text"  placeholder="Answer" className="inputField" 
   onFocus={()=>{ 
    setOnfocuss("equal");
    setOnfocuss("answer")}}
    onChange={(e) => {
        handleInputChange("answer", e.target.value )
 }}
 value={question.answer}/>
{error.answer && <><span className="error">Answer is required.</span></>}
{(error.equal && !error.answer) && <><span className="error">Answer should be match to the one of the options.</span></>}
 </div>

   </div>
   </>}

   {questionType == 'qna' && <>
   <div className="questionBg">
   <div className="formGroupT">
   <label >Question*</label>
    <input type="text"  placeholder="Enter Question" className="inputField"
     onFocus={()=>{ setOnfocuss("question")}}
     onChange={(e) => {
        handleInputChange("question", e.target.value )
 }}
 value={question.question}/>
{error.question && <><span className="error">Question is required.</span></>}
   </div>
   <div>
   <div className="formGroupT">
   
    <textarea type="text"  placeholder="Enter Answer" className="inputField" 
     onFocus={()=>{ setOnfocuss("answer")}}
     onChange={(e) => {
        handleInputChange("answer", e.target.value )
 }}
 value={question.answer}></textarea>
{error.answer && <><span className="error">Answer is required.</span></>}
   </div></div></div></> }

   {questionType == 'flag' && <>
   <div className="questionBg">
   <div className="formGroupT">
   <label >Question*</label>
    <input type="text"  placeholder="Enter Question" className="inputField" 
      onFocus={()=>{ setOnfocuss("question")}}
      onChange={(e) => {
        handleInputChange("question", e.target.value )
 }}
 value={question.question}/>
{error.question && <><span className="error">Question is required.</span></>}
   </div>
   <div>
   <div className="formGroupT">
   
    <input type="text"  placeholder="Enter Flag Value" className="inputField" 
      onFocus={()=>{ setOnfocuss("answer")}}
      onChange={(e) => {
        handleInputChange("answer", e.target.value )
 }}
 value={question.answer}/>
{error.answer && <><span className="error">Answer is required.</span></>}
   </div></div></div></> }
   <div className="formGroupT">
    <input type="button" value="Save" onClick={formSubmit}/>
    </div>
</>}
    </>
}