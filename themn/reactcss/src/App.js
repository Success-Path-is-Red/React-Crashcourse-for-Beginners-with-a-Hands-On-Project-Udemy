import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [h1color, setcolor] = useState('red')

    function changecolor() {
        if(h1color == 'red')
            setcolor('green')
        else
            setcolor('red')
    }

    return (
        <div className="App">
            <h1 style={{color: h1color, background: 'yellow'}}>css in react</h1>
            <button onClick={changecolor}>change color of text</button>
            <h1 className='custom'>this is from external styling</h1>
        </div>
    );
}

export default App;
