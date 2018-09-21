import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../images/zonily-logo-with-label.png';
import "../../styles/base.css";
import "../../styles/main.css";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';
// <iframe src="https://drive.google.com/file/d/1Qwi2znqN6wAhJwAF_ZcAKVNavW_rj-V4/preview" width="640" height="480"></iframe >
//   <iframe src="https://drive.google.com/file/d/1xn3kB3k8hFXmYx9MuybiUc4bKa7Dvjz6/preview" width="640" height="480"></iframe>
// <div className="preorder-logo">
//   <a href="/">Zonily</a>
// </div>
export default class PreOrderPage extends React.Component {
    render() {
        return <div className="preorder-page">
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
                  <div className="perk-list__title">
                    What you'll get:
                  </div>
                  <ul>
                    <li>Choice of either GoFresh and/or Bobabia</li>
                    <li>Early Bird access by November 2018</li>
                    <li>Priority invite to our Beta User Program</li>
                    <li>
                      Exclusive invite to our launch party in February
                      2019
                    </li>
                    <li>Development update newsletter</li>
                  </ul>
                </div>
                <div className="videos">
                  <div className="perk-list__title">Bobabia Playbook Preview:</div>
                  <iframe src="https://drive.google.com/file/d/1Qwi2znqN6wAhJwAF_ZcAKVNavW_rj-V4/preview" />

                  <div className="perk-list__title">GoFresh Playbook Preview:</div>
                  <iframe src="https://drive.google.com/file/d/1xn3kB3k8hFXmYx9MuybiUc4bKa7Dvjz6/preview" />
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
          </div>;
    }
}
