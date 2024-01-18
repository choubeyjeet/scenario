import React, { useEffect, useState } from 'react';
import './App.css';
import LeftContainer from './Components/Left/LeftContainer';
import MiddleContainer from './Components/Middle/MiddleContainer';
import RightContainer from './Components/Right/RightContainer';
import NavbarAction from './Components/NavbarAction/NavbarAction';
import { Route, Routes } from 'react-router-dom';
// import ScenarioCreate from './Components/ScenarioCreate/ScenarioCreate';


function App() {
  const [objectType, setObjectType] = useState(null);
  

  return (
    <>
    <Routes>

      {/* <Route path="scenario/create" element={<ScenarioCreate />}/> */}
    <Route path="/" element={<> <div className="EditorClassAdded">
     
     <div style={{ width: '8%', textAlign: 'center' }} className='mobileView'><LeftContainer /></div>
     <div style={{ width: '1%' }}></div>
     <div style={{ width: '43%', marginTop: 15}} className='mobileView'><MiddleContainer setObjectType={setObjectType}/></div>
     <div style={{ width: '1%' }}></div>
     <div style={{ width: '45%'}} className='mobileView'><RightContainer objectType={objectType}/></div>
     
   </div></>}/>
    </Routes>
   
    
    </>
  
  );
}

export default App;