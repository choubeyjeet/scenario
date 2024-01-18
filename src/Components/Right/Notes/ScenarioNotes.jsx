import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setformValue } from "../../../features/CreateScenario/CreateScenarioSlice";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationBox from '../../ConfirmationBox/ConfirmationBox';
export default function ScenarioNotes() {
    const dispatch = useDispatch()
 
  const [inputField, setInputField] = useState("");
  const { notes } = useSelector(state => state.scenario);
  const [showSave, setSaveButton] = useState(true);
const [currentIndex, setCurrentIndex] = useState(null);
const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const addingNotes = () => {
    if (inputField.trim() !== "") {
       
  
       dispatch(setformValue({
        notes: [...notes, inputField.trim()]
    }));
    setInputField("");
    }



   
  };

  const deleteListItem = (index)=>{
    const newArray = [...notes];
    newArray.splice(index, 1);
  
    dispatch(setformValue({
        notes: newArray
    }));
    setDeleteConfirmation(false)
    toast("Note deleted successfully.");
  }
 
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


  const editNotes = (index)=>{
    setSaveButton(false)
const note = notes[index];
setInputField(note)
setCurrentIndex(index)
  }

  const saveEditNotes = () => {
    // Create a new array with the existing userNotes
    const newArray = [...notes];

    // Update the value at currentIndex with the new inputField value
    newArray.splice(currentIndex, 1, inputField.trim());


    // Dispatch action immediately with the updated array
    dispatch(setformValue({
        notes: newArray
    }));

    // Reset inputField immediately
    setInputField("");
    setSaveButton(true)
    toast("Note Edited successfully.");
};


  //deleteNotest PopUp 
  const setDeleteConfirmationBox = (index) =>{
    setCurrentIndex(index);
    setDeleteConfirmation(true)
  }
  
  return (
    <>
      <div className="buttonGroupNotes">
        <div className="inputFieldW100">
          <input
            placeholder="Enter Your Notes"
            onChange={(e) => handleInputChange(e)}
            value={inputField}
          />
        </div>
        <div>

            {showSave ? <> <button onClick={addingNotes} disabled={inputField===""? true : false}>Add Note</button></> : <> <button onClick={saveEditNotes} disabled={inputField===""? true : false}>Save Note</button></> }
         
        </div>
      </div>
      <div className="listofNotes">
        <ul>
          {notes.map((val, index) => (
            <li key={index} className="EditIconForNotes"><span style={{width: "90%"}}>{val}</span><span className="removeNotes"><FaEdit title="Edit Note" onClick={()=>{editNotes(index)}}/>&nbsp;&nbsp;&nbsp;&nbsp;<FaRegTrashAlt title="Delete Note" onClick={()=>{
            
              setDeleteConfirmationBox(index)
            }}/></span></li>
          ))}
        </ul>
      </div>

      <ToastContainer autoClose={2000}/>
{deleteConfirmation && <><ConfirmationBox setDeleteConfirmation={setDeleteConfirmation} currentIndex={currentIndex} deleteReport={deleteListItem} dataType={"Note"}/></>}
    </>
  );
}
