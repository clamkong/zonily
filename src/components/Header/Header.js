import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import logoImg from '../../images/zonily-logo-with-label.png';
import './Header.css';

const Header = withRouter(({history}) => (
    <div className="app-header">
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
                        <NavLink to="/" activeClassName="is-active">Marketplace</NavLink>
                    </span>
                    <span className="header--nav-item">
                        <NavLink to="/myplaybooks" activeClassName="is-active">My Playbooks</NavLink>
                    </span>
                </div>
                
            </div>
        </div>
    </div>
))

export default Header;


// <div className="shopping-cart">
//     <Button
//         className="header__cart-item"
//         icon
//         onClick={() => {
//             history.push('/cart');
//         }}
//     >
//         <Icon name="cart" />
//     </Button>
// </div>
//     <div className="header--login-signup">
//         <Button
//             className="header__login-item"
//             primary
//             onClick={() => {
//                 history.push('/login');
//             }}
//         >
//             Log In
//                     </Button>
//         <Button
//             className="header__signup-item"
//             secondary
//             onClick={() => {
//                 history.push('/signup');
//             }}
//         >
//             Sign Up
//                     </Button>
//     </div>