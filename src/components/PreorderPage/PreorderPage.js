import React from 'react';
import Header from '../SplashPage/splashComponents/Header';
import "../../styles/base.css";
import "../../styles/main.css";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';

export default class PreOrderPage extends React.Component {
    render() {
        return (
          <div className='preorder-page'>
            <Header/>
            <div className='preorder-page-container'>
              <div className='preorder-page__left-container'>
                <h1 className='preorder-page__header'>
                  Level up your business.
                </h1>
                <h3 className='preorder-page__header'>
                $25.00
                </h3>

                <div>
                  Overview
                  <div>
                    This section will tell you more about the playbook.
                  </div>
                  <br/>
                  <div>
                    Pre-order bonuses:
                  </div>
                </div>
              </div>
              <div className='preorder-page__right-container'>
              <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <div className="example">
                  <Elements>
                    <CheckoutForm fontSize="16px"/>
                  </Elements>
                </div>
              </StripeProvider>
              </div>
            </div>
          </div>
        );
    }
}
