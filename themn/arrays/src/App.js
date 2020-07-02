import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ['react', 'angular', 'node-js'];
    const names_list = names.map(name => {
        return <h1>{name}</h1>
    });
    return (
        <div className="App">
            <h1>arrays</h1>
            <p>the array length is {names.length}</p>
            <p>first element is {names[0]}</p>

            <p>elements in this array are:
                {names_list}
            </p>
        </div>
    );
}

export default App;
