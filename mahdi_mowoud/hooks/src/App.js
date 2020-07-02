import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[username, setusername] = useState('mahdi');
  function changeusername() {
    setusername('john');
  }
  useEffect(() => {
      alert('welcome salam')
  },[])
  return (
    <div className="App">
      <h1>hooks</h1>
      <p>username is {username}</p>
      <button onClick={()=>{setusername('abalfazl')}}>change username</button>
    </div>
  );
}

export default App;
