import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function openAlert() {
    alert('in yekio zadi')
  }
  return (
    <div className="App">
     <h1>event handloing</h1>
      <button onClick={() =>{alert('you done')}}>click me oh yea</button>
      <button onClick={openAlert}>click me oh yea2</button>
        <input type="text" onChange={() =>{alert('input changed')}}/>
        <h1 onMouseOver={() => {alert('you overd')}}>salam man be to khare ghadimi</h1>
    </div>
  );
}

export default App;
