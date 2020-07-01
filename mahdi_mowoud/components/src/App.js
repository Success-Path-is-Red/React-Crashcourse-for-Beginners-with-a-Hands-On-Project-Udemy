import React from 'react';
import logo from './logo.svg';
import './App.css';
import CC from "./CC";
import FC from "./FC";
function App() {
  return (
    <div className="App">
     <h1>components</h1>
        <CC name="mahdi" username = "mahdi_mowoud"/>
        <FC game="basketball" ball="green"/>
    </div>
  );
}

export default App;
