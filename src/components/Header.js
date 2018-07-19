import React from 'react';
import logoImg from '../images/Zonily Logo.png';
const Header = () => (
    <div className="app-header"> 
        <img className="logo" src={logoImg} alt="logo"/>
        <div className="company-name"><h1>Zonily</h1></div>
    </div>
)

export default Header;
