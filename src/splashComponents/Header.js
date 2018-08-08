import React from 'react';

const Header = () => {
    //for future sign up button
    // <li className="highlight with-sep">
    //     <a href="#" title="">Sign Up</a>
    // </li>
    return (
        <header>
            <div className="row">
                <div className="logo">
                    <a href="index.html">Zonily</a>
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
                            <a className="smoothscroll" href="#features" title="">Playbooks</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#testimonials" title="">Partners</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#faq" title="">FAQ</a>
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