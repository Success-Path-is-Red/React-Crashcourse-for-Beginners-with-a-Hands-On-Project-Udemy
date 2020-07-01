import React from 'react';
import logo from './logo.svg';
import './App.css';
import CC from './CC'
import FC from './FC'
function App() {
  return (
    <div className="App">
      <h1>components</h1>
        <CC name="mammad" username="mmd"/>
        <FC game="paasur"/>
    </div>
  );
}

export default App;
