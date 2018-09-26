import React from "react";
import BaseModal from "../BaseModal/BaseModal";
import ForgetPasswordModal from "../ForgetPasswordModal/ForgetPasswordModal";
import "../../styles/components/LoginModal.css";
import { subscribe } from "react-contextual";
import { withRouter } from "react-router-dom";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isForgetPasswordModalOpen: false
    };
  }

  handleForgetPasswordModalOpen() {
    this.setState({ isForgetPasswordModalOpen: true });
    this.props.handleModalClose();
  }

  handleForgetPasswordModalClose() {
    this.setState({ isForgetPasswordModalOpen: false });
  }

  onLogin() {
    console.log("loggin in!");
    console.log(this.props.store.user);
    this.props.store.loginUser();
    console.log(this.props.store.user);
    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <BaseModal
          isOpen={this.props.isOpen}
          handleModalClose={this.props.handleModalClose}
        >
          <div className="login-container">
            <div className="login-container-title">
              <h1>LOG IN</h1>
            </div>
            <div className="login-container-form">
              <input
                id="login-container-form__email"
                name="email"
                placeholder="Email"
                required="required"
                type="email"
              />
              <input
                id="login-container-form__password"
                name="password"
                ng-model="password"
                placeholder="Password"
                type="password"
              />
              <p id="login-container-form__forgot-password">
                <a
                  className="forgot mc-modal-reset-trigger"
                  href="#"
                  onClick={this.handleForgetPasswordModalOpen.bind(this)}
                >
                  {" "}
                  Forgot your password?
                </a>
              </p>
              <button
                className="login-container-form__submit"
                id="login-container-form__submit-button"
                type="submit"
                onClick={this.onLogin.bind(this)}
              >
                {" "}
                Log in
              </button>
              <p className="button_desc">
                Need an account?{" "}
                <a
                  className="login-container-form__register-trigger"
                  href="#"
                  onClick={this.props.handleSwitchToSignup}
                >
                  {" "}
                  Create an account.
                </a>
              </p>
            </div>
            <div className="login-container-form__footer" />
          </div>
        </BaseModal>
        <ForgetPasswordModal
          isOpen={this.state.isForgetPasswordModalOpen}
          handleModalClose={this.handleForgetPasswordModalClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}

const LoginModalWithRouter = withRouter(props => {
  return LoginModal;
});

export default subscribe(store => ({ store }))(withRouter(LoginModal));
