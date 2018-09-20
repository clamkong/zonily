import React from 'react';

export default class Header extends React.Component {
  render() {
  return (
      <header>
          <div className="row">
              <div className="logo">
                  <a href="/">Zonily</a>
              </div>
              { this.props.preorder ? <div/> : (
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
                          <a className="smoothscroll" href="#pricing" title="">Pricing</a>
                      </li>
                      <li>
                          <a className="smoothscroll" href="#contact-us" title="">Contact Us</a>
                      </li>

                  </ul>
              </nav>
            )}
            <a className="menu-toggle" href="#">
                <span>Menu</span>
            </a>
          </div>
      </header>
    )
  }
}
