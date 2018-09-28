import React from "react";
import axios from "axios";

export default class ContactUsSection extends React.Component {
  onFormSubmit = e => {
    //axios calls form submit
    console.log(`Submitting email ${e.target}`);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";

    e.preventDefault();
  };
  onFormSubmit = e => {
    //axios calls form submit
    console.log(`Submitting email ${e.target[0].value}`);

    const baseURL = "https://zonily-api.herokuapp.com";
    const endpoint = "/contact/message/";
    const query =
      "?email=" +
      e.target[1].value +
      "&name=" +
      e.target[0].value +
      "&message=" +
      e.target[2].value;
    const eventTarget = e.target;

    axios
      .get(baseURL + endpoint + query)
      .then(resp => {
        console.log("successfully sent message");
          eventTarget[0].value = "";
          eventTarget[1].value = "";
          eventTarget[2].value = "";
      })
      .catch(error => {
        throw "error submitting message for contact us";
      });
    // e.target[0].value = "";
    // e.target[1].value = "";
    // e.target[2].value = "";
    e.preventDefault();
  };

  render() {
    return (
      <section id="contact-us">
        <div className="row section-intro">
          <div className="col-twelve with-bottom-line">
            <h5>Contact Us</h5>
          </div>
        </div>
        <div className="row flex-container">
          <ul>
            <li>Questions about Zonily?</li>
            <li>Want to be a free Beta User?</li>
            <li>Want to see a specific business's playbook?</li>
            <li>Questions about our Launch Event?</li>
            <li>Something you want to see from Zonily?</li>
          </ul>
          We would love to hear from you!
          <div className="subscribe-form">
            <form id="mc-form" onSubmit={this.onFormSubmit} className="group">
              <input
                type="text"
                name="dName"
                className="email"
                id="mc-name"
                placeholder="Name (Required)"
                required="true"
              />
              <input
                type="email"
                name="dEmail"
                className="email"
                id="mc-email"
                placeholder="Email (Required)"
                required="true"
              />
              <textarea
                className="email"
                id="mc-message"
                placeholder="Message (Optional)"
              />
              <button className="stroke" type="submit" name="subscribe">
                Send Message
              </button>
              <label className="subscribe-message" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
