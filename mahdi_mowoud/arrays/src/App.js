import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names=['react','angular', 'js']

    const nameslist=names.map((name=>{
        return <h1>{name}</h1>
    }))
  return (
    <div className="App">
      <h1>arrsays</h1>
      <h1>the array length is {names.length}</h1>
        <h1>the elements are :{nameslist}</h1>
    </div>
  );
}

export default App;
