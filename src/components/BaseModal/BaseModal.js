import React from "react";
import Modal from "react-modal";

import "../../styles/components/BaseModal.css";

class BaseModal extends React.Component {
  constructor(props) {
    super(props);
  }

  onAfterOpen = () => {
    document.body.style.overflow = "hidden";
  };

  onRequestClose = () => {
    document.body.removeAttribute("style");
    this.props.handleModalClose();
  };

  render() {
    return (
      <Modal
        overlayClassName="base-modal-overlay"
        className="base-modal"
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        onAfterOpen={this.onAfterOpen.bind(this)}
        onRequestClose={this.onRequestClose.bind(this)}
      >
        <div className="base-modal-content">
          <a
            className="base-modal-close"
            onClick={this.onRequestClose}
            href="#"
          />
          {this.props.children}
        </div>
      </Modal>
    );
  }
}

export default BaseModal;
