import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className="navbar">
            <h1>Final Project Header</h1>
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
}

export default Header;