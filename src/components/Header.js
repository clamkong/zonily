import React from 'react';
import logoImg from '../images/Zonily Logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import {Button, Icon} from 'semantic-ui-react';

const Header = withRouter(({history}) => (
    <header className="app-header">
        <div className="app-header__inner">
            <div className="header__inner__left">
                <div className="logo-container">
                    <NavLink to="/" activeClassName="is-active" exact={true}>
                        <img className="logo" src={logoImg} alt="logo" />
                    </NavLink>
                </div>
            </div>
            <div className="header__inner__right">
                <div className="header-nav">
                    <span className="header--nav-item">
                        <NavLink to="/marketplace" activeClassName="is-active">Marketplace</NavLink>
                    </span>
                    <span className="header--nav-item">
                        <NavLink to="/about" activeClassName="is-active">About</NavLink>
                    </span>
                    <span className="header--nav-item">
                        <NavLink to="/myplaybooks" activeClassName="is-active">My Playbooks</NavLink>
                    </span>
                </div>
                <div className="shopping-cart">
                    <Button 
                        className="header__cart-item"
                        icon
                    >
                        <Icon name="cart" />
                    </Button>
                </div>
                <div className="header--login-signup">
                    <Button
                        className="header__login-item"
                        primary
                        onClick={() => {
                            history.push('/login');
                        }}
                    >
                        Log In
                    </Button>
                    <Button
                        className="header__signup-item"
                        secondary
                        onClick={() => {
                            history.push('/signup');
                        }}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    </header>
))

export default Header;
