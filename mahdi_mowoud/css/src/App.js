import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const[h1color,seth1color]=useState('red');
    function changecolor() {
        seth1color('blue')
    }
  return (
    <div className="App">
      <h1>css in react</h1>
        <h1 style={{color:h1color,background:'blue'}}>hello react</h1>
        <h1 className="simpleh1">this from external styling</h1>
        <button onClick={changecolor}>change color </button>
    </div>
  );
}

export default App;
