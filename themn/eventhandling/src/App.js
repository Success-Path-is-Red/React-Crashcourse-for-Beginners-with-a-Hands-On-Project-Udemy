import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    function openalert() {
        alert('dokme zadi ke baz :/')
    }

    return (
        <div className="App">
            <h1>event</h1>
            <button onClick={() => {
                alert('dokme ro zadi')
            }}> DOKME
            </button>

            <button onClick={openalert}> DOKME</button>

            <input type="text" onChange={ () => {alert('the input is changed')} }/>

            <h1 onMouseOver={ () => {alert('you hoverd !')} }>hover here to go fuck yourself</h1>
        </div>
    );
}

export default App;
