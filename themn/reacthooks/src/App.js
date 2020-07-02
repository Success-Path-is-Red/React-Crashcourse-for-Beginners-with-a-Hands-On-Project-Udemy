import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [username, setusername] = useState('amirhossein');
    const [count, setcount] = useState(0);

    useEffect(()=>{
        alert('welcome to this page')
    }, [])

    function changeusername() {
        if (username == 'mahdi')
            setusername('amirhossein');
        else
            setusername('mahdi');
    }

    return (
        <div className="App">
            <h1>happy hooking</h1>
            <p>username is now {username}</p>
            <button onClick={changeusername}>change username!</button>
            <br/>
            <p>you have clicked {count} times</p>
            <button onClick={() => setcount(count + 1)}>increase counter</button>
        </div>
    );
}

export default App;
