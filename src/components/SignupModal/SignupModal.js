import React from "react";
import BaseModal from "../BaseModal/BaseModal";
import "./SignupModal.css";

class SignupModal extends React.Component {
  render() {
    return (
      <BaseModal
        isOpen={this.props.isOpen}
        handleModalClose={this.props.handleModalClose}
      >
        <div className="signup-container">
          <div className="signup-container-title">
            <h1>CREATE AN ACCOUNT</h1>
          </div>
          <div className="signup-container-form">
            <input
              id="signup-container-form__email"
              name="email"
              placeholder="Email"
              required="required"
              type="email"
            />
            <input
              id="signup-container-form__password"
              name="password"
              ng-model="password"
              placeholder="Password"
              type="password"
            />
            <p id="signup-container-form__privacy-terms">
              By creating an account, you agree to our
              <a className="info-links" href="/privacy">
                {" "}
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className="info-links" href="/terms">
                Terms of Service.{" "}
              </a>
            </p>
            <button
              className="signup-container-form__submit"
              id="signup-container-form__submit-button"
              type="submit"
            >
              {" "}
              CREATE ACCOUNT
            </button>
            <p className="button_desc">
              Already have an account?{" "}
              <a
                className="signup-container-form__login-trigger"
                href="#"
                onClick={this.props.handleSwitchToLogin}
              >
                {" "}
                Sign In.
              </a>
            </p>
          </div>
          <div className="signup-container-form__footer" />
        </div>
      </BaseModal>
    );
  }
}

// <p className="or">
//     <span>Or</span>
// </p>
export default SignupModal;
