import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="row">
                <div className="logo">
                    <a href="index.html">Lhander</a>
                </div>

                <nav id="main-nav-wrap">
                    <ul className="main-navigation">
                        <li className="current">
                            <a className="smoothscroll" href="#intro" title="">Home</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#process" title="">About</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#features" title="">Features</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#pricing" title="">Pricing</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#faq" title="">FAQ</a>
                        </li>
                        <li className="highlight with-sep">
                            <a href="#" title="">Sign Up</a>
                        </li>
                    </ul>
                </nav>

                <a className="menu-toggle" href="#">
                    <span>Menu</span>
                </a>
            </div>
        </header>
    )
}

export default Header;