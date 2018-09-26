import React from "react";
import LoginModal from "../../LoginModal/LoginModal";
import SignupModal from "../../SignupModal/SignupModal";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isSignupModalOpen: false
    };
  }

  handleLoginModalOpen() {
    this.setState({ isLoginModalOpen: true, isSignupModalOpen: false });
  }

  handleLoginModalClose() {
    this.setState({ isLoginModalOpen: false });
  }

  handleSignupModalOpen() {
    this.setState({ isSignupModalOpen: true, isLoginModalOpen: false });
  }

  handleSignupModalClose() {
    this.setState({ isSignupModalOpen: false });
  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="logo">
            <a href="/">Zonily</a>
          </div>
          <nav id="main-nav-wrap">
            <ul className="main-navigation">
              <li className="current">
                <a className="smoothscroll" href="#intro" title="">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#process" title="">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#features" title="">
                  Playbooks
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials" title="">
                  Partners
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#pricing" title="">
                  Pricing
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact-us" title="">
                  Contact Us
                </a>
              </li>
              <li
                className="highlight with-sep"
                onClick={this.handleSignupModalOpen.bind(this)}
              >
                <a href="#">Sign Up</a>
              </li>
              <li
                className="highlight"
                onClick={this.handleLoginModalOpen.bind(this)}
              >
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>
        </div>
        <LoginModal
          isOpen={this.state.isLoginModalOpen}
          handleModalClose={this.handleLoginModalClose.bind(this)}
          handleSwitchToSignup={this.handleSignupModalOpen.bind(this)}
        />
        <SignupModal
          isOpen={this.state.isSignupModalOpen}
          handleModalClose={this.handleSignupModalClose.bind(this)}
          handleSwitchToLogin={this.handleLoginModalOpen.bind(this)}
        />
      </header>
    );
  }
}
