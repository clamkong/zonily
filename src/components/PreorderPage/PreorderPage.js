import React from 'react';
import Header from '../SplashPage/splashComponents/Header';
import "../../styles/base.css";
import "../../styles/main.css";

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

                <button className="stroke" type="submit" name="subscribe">Pre-order</button>

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
                <i className="preorder-page icon-video"/>
              </div>
            </div>
          </div>
        );
    }
}
