import "./assets/css/ConfirmationBox.css"
export default function ConfirmationBox ({setDeleteConfirmation, deleteReport, currentIndex, dataType}) {

    const closePopUp = ()=>{
        setDeleteConfirmation(false)
    } 

    return <><div className="modalBox">
        <div className="confirm">
    <h1>Confirm your action</h1>
    <p>Are you sure you want to Delete {dataType}</p>
    <button onClick={closePopUp}>Cancel</button>
    <button autoFocus onClick={()=>{deleteReport(currentIndex)}}>Confirm</button>
  </div>
        </div></>
}