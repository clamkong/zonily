import React from 'react';
import logoImg from '../images/Zonily Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="app-header">
        <NavLink to="/" activeClassName="is-active" exact={true}>
            <img className="logo" src={logoImg} alt="logo" />
            <div className="company-name"><h1>Zonily</h1></div>
        </NavLink>
        <NavLink to="/marketplace" activeClassName="is-active">Marketplace</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        <NavLink to="/signup" activeClassName="is-active">Signup</NavLink>
        <NavLink to="/login" activeClassName="is-active">Login</NavLink>
    </header>
)

export default Header;
