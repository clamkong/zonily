import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/zonily-logo-with-label.png";
import "../../styles/base.css";
import "../../styles/main.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../CheckoutForm";

export default class PreOrderPage extends React.Component {
  render() {
    return (
      <div className="preorder-page">
        <NavLink to="/" activeClassName="is-active" exact={true}>
          <div className="logo">
            <img src={Logo} />
          </div>
        </NavLink>
        <div className="preorder-page-container">
          <div className="preorder-page__left-container">
            <h1 className="preorder-page__header">
              Pre-order your playbook today!
            </h1>
            <h3 className="preorder-page__header">$25.00 each</h3>
            <div className="perk-list">
              <div className="perk-list__title">What you'll get:</div>
              <ul>
                <li>Choice of either GoFresh and/or Bobabia</li>
                <li>First look at playbooks by Mid-October</li>
                <li>Priority invite to our Beta User Program</li>
                <li>
                  VIP happy hour with all business playbook partners at our
                  Launch Party in February, 2019
                </li>
                <li>Access to our newsletter of all Zonily updates</li>
              </ul>
            </div>
            <div className="videos">
              <div className="perk-list__title">Bobabia Playbook Preview:</div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5dwM5zsT81s"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
              <div className="perk-list__title">GoFresh Playbook Preview:</div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NnRpp7DSeAc"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            </div>
            <div>Questions? Contact us at support@zonily.com</div>
          </div>
          <div className="preorder-page__right-container">
            <StripeProvider apiKey="pk_live_8ZBOxjftOcLbdSTnPTN8n5d9">
              <div className="example">
                <Elements>
                  <CheckoutForm fontSize="16px" />
                </Elements>
              </div>
            </StripeProvider>
          </div>
        </div>
      </div>
    );
  }
}
