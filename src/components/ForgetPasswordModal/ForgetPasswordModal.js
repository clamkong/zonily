import React from "react";
import BaseModal from "../BaseModal/BaseModal";
import "../../styles/components/ForgetPasswordModal.css";

class ForgetPasswordModal extends React.Component {
  render() {
    return (
      <BaseModal
        isOpen={this.props.isOpen}
        handleModalClose={this.props.handleModalClose}
      >
        <div className="forget-password-container">
          <div className="forget-password-container-title">
            <h1>RESET YOUR PASSWORD</h1>
          </div>
          <div className="forget-password-container-form">
            <input
              id="forget-password-container-form__email"
              name="email"
              placeholder="Email"
              required="required"
              type="email"
            />
            <button
              className="forget-password-container-form__submit"
              id="forget-password-container-form__submit-button"
              type="submit"
            >
              {" "}
              SEND EMAIL
            </button>
          </div>
          <div className="forget-password-container-form__footer" />
        </div>
      </BaseModal>
    );
  }
}

export default ForgetPasswordModal;
