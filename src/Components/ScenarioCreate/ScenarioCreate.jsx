import React, { useEffect, useState } from "react"
import Select from 'react-select';
import "./assets/css/createScenario.css";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function ScenarioCreate () {
 

    const [formValue, setFormValue] = useState({

        "type" : "",
        "title" : "",
        "thumbnail" : null,
        "description" : "",
        "level" : "",
        "scenario_duration" : "",
        "is_private" : false,
        "users" : [],
        "teams" : [],
        "organization" : [],

    })
const [teamsValue, setTeamValue] = useState({
    "teams": null,
    "users": null,
    "organization": null

});

const [error, setError] = useState({

  "title":false,
  "thumbnail":false,
  "description":false,
  "type":false,
 "level": false,
 "is_private": false,


});
const [isSubmitted, setIsSubmitted] = useState(false);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const updateFormValue = (name, value) => {
        if (name === "is_private" && value === false) {
          setFormValue((prevFormValue) => ({
            ...prevFormValue,
            [name]: value,
            users: [],
            organization: [],
            teams: [],
          }));
          
          
          setTeamValue({
            "teams": null,
            "users": null,
            "organization": null,
          });
        } else {
          setFormValue((prevFormValue) => ({
            ...prevFormValue,
            [name]: value,
          }));
        }
      };
      
      const handleTeamSelectChange = (type, selectedValues) => {
        setTeamValue((prevVal)=>({...prevVal, [type]:selectedValues}))
        const selectedValuesArray = selectedValues.map((option) => option.value);
      
      
        updateFormValue(type, selectedValuesArray);
      };


      const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
           
          const reader = new FileReader();
    
          reader.onload = (e) => {
            setFormValue((prevFormValue) => ({
              ...prevFormValue,
              thumbnail: e.target.result,
            }));
          };
    
          reader.readAsDataURL(file);
        }
        else {
          setError((prevError) => ({ ...prevError, thumbnail: true }));
            setFormValue((prevFormValue) => ({
                ...prevFormValue,
                thumbnail: null,
              }));
        }
      };

      const submitForm = () => {
       
        setError({
          title: false,
          thumbnail: false,
          description: false,
          type: false,
          level: false,
          is_private: false,
        });
      
      if(formValue.is_private) {
        
        if(formValue.users.length===0 && formValue.teams.length===0 && formValue.organization.length===0) {
          setError((prevError) => ({ ...prevError, is_private: true }));
        }

       }
        if (formValue.title === "") {
          setError((prevError) => ({ ...prevError, title: true }));
        }
      
        if (formValue.thumbnail === null) {
          setError((prevError) => ({ ...prevError, thumbnail: true }));
        }
      
        if (formValue.description === "") {
          setError((prevError) => ({ ...prevError, description: true }));
        }
        if (formValue.type === "") {
          setError((prevError) => ({ ...prevError, type: true }));
        }

        if (formValue.level === "") {
          setError((prevError) => ({ ...prevError, level: true }));
        }

        setIsSubmitted(true);
      };
      
      const handleInputChange = (field, value) => {
        const newValue = value;
    
        // Check if the first character is a space and prevent updating the state
        if (newValue.length === 0 || (newValue.length === 1 && newValue[0] === ' ')) {
          updateFormValue(field, "");
          return;
        }
    
        // Remove extra spaces using a regular expression
        const cleanedValue = newValue.replace(/\s+/g, ' ');
    
        updateFormValue(field, cleanedValue);
      };


      useEffect(() => {
       
        if (isSubmitted) {
         
          const hasErrors = error.title || error.thumbnail || error.description || error.type || error.level || error.is_private;
    
          if (!hasErrors) {
            console.log("Form submitted successfully");
          } else {
            console.log("Form has errors");
          }
    
          
          setIsSubmitted(false);
        }
      }, [error, isSubmitted]);
      
      
      const setOnfocuss = (name) => {
        setError((prevError) => ({ ...prevError, [name]: false }));
      };
      
    return <>
 
<div className="formContainer">
       
<form >

  <div className="formGroupT">
    <label >Please Select Category*</label>
    <select name="type" className="inputField" onChange={(e)=>{
        setOnfocuss("type");
      
      updateFormValue("type", e.target.value)}}>
    <option value="">--Select Category--</option>
      <option value="Space System Software">Space System Software</option>
      <option value="Cyber Security Pen Testing">Cyber Security Pen Testing</option>
      <option value="Cyber Training Lab">Cyber Training Lab</option>
      <option value="Hybrid Enviornment">Hybrid Enviornment</option>
     
    </select>
    {error.type && <><span className="error">Category is required.</span></>}
    </div>

   <div className="formGroupT">
   <label >Scenario Name*</label>
    <input type="text" onFocus={()=>{
      setOnfocuss("title")
    }} name="scenarioname" placeholder="Enter Scenario Name" className="inputField"  onChange={(e)=>{handleInputChange("title", e.target.value)}} value={formValue.title}/>
    {error.title && <><span className="error">Scenario Name is required.</span></>}
   </div>

<div className="formGroupT">
    <label htmlFor="lname">Scenario Description*</label>
    <input type="text" onFocus={()=>{
      setOnfocuss("description");
    }} name="scenariodescription" placeholder="Enter Scenario Description" className="inputField" onChange={(e)=>{handleInputChange("description", e.target.value)}} value={formValue.description}/>
    {error.description && <><span className="error">Scenario Description is required.</span></>}
    </div>
    

  


<div className="formGroupT">
    <label>Excercise Duration</label>
    <input type="datetime-local"  name="scenario_duration" className="inputField" onChange={(e)=>{updateFormValue("scenario_duration", e.target.value)}}/>

   

    </div>

   

<div className="formGroupT">
    <label >Please Select Level*</label>
    <select name="type" className="inputField" onChange={(e)=>{
      setOnfocuss("level");
      updateFormValue("level", e.target.value)}}>
      <option value="">--Select Level--</option>
      <option value="Basic">Basic</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Expert">Expert</option>
    </select>
    {error.level && <><span className="error">Level is required.</span></>}
    </div>

    <div className="formGroupT">
    <label >Please Select Thumbnail*</label>
   
   <div>
   <input type="file"  name="thumbnail" className="inputField" accept="image/png, image/jpeg"  onChange={(event) => { setOnfocuss("thumbnail"); handleThumbnailChange(event); }}/>
   {error.thumbnail  && <><span className="error">Thumbnail is required.</span></>}
    {(formValue.thumbnail !=="" && formValue.thumbnail !==null) && <> <img
            src={formValue.thumbnail}
            alt="Thumbnail Image"
            className="ImageThumbnail"
          /><br />&nbsp;</>}

   </div>
    </div>


    <div className="formGroupT" style={{display:"flex",alignItems:"center"}}>
    
    Private <input
  type="checkbox"
  name="scenariodescription"
  className="inputFieldcheck"
  checked={formValue.is_private} 
  onChange={(e) => { updateFormValue("is_private", e.target.checked); }}
/>
    </div>



{formValue.is_private && <>

   
    <div className="formGroupT">
    <label >Please Select Users</label>
    <Select
      isMulti
      value={teamsValue.users}
      onChange={(selectedValues)=>{
        setOnfocuss("is_private");
        handleTeamSelectChange("users", selectedValues)}}
      options={options}
    />
    </div>


    <div className="formGroupT">
    <label >Please Select Organization</label>
    <Select
      isMulti
      value={teamsValue.organization}
      onChange={(selectedValues)=>
        {
          setOnfocuss("is_private");
          handleTeamSelectChange("organization", selectedValues)}}
      options={options}
    />
    </div>

    <div className="formGroupT">
    <label >Please Select Teams</label>
    <Select
      isMulti
      value={teamsValue.teams}
      onChange={(selectedValues)=>{
        setOnfocuss("is_private");
        handleTeamSelectChange("teams", selectedValues)}}
      options={options}
    />
    </div>

    {error.is_private  && <><span className="error">Either Users, Organization or Teams is required.</span></>}

</>}


    <div className="formGroupT">
    <input type="button" onClick={submitForm} value="Save" />
    </div>
  </form>
</div>


   
    </>
}