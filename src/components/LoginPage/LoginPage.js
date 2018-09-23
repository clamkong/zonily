import React from "react";
import "../../styles/components/LoginPage.css";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-page-tile">
          <div className="container">
            <div className="login-page-title">
              <h1>LOG IN</h1>
            </div>
            <div className="login-page-form">
              <input
                id="login-page-form__email"
                name="email"
                placeholder="Email"
                required="required"
                type="email"
              />
              <input
                id="login-page-form__password"
                name="password"
                ng-model="password"
                placeholder="Password"
                type="password"
              />
              <p id="login-page-form__forgot-password">
                <a className="forgot mc-modal-reset-trigger" href="#">
                  {" "}
                  Forgot your password?
                </a>
              </p>
              <button
                className="login-page-form__submit"
                id="login-page-form__submit-button"
                type="submit"
              >
                {" "}
                Log in
              </button>
              <p className="button_desc">
                Need an account?{" "}
                <a className="login-page-form__register-trigger" href="#">
                  {" "}
                  Create an account.
                </a>
              </p>
            </div>
            <div className="login-page-form__footer" />
          </div>
        </div>
      </div>
    );
  }
}
