import React from 'react';
import StockPhoto1 from '../images/stock_photo1.jpg'
import StockPhoto2 from '../images/stock_photo2.jpg'

export default class SplashPage extends React.Component {
    render(){
        return (
          <div className="splash-page">
            <div className="splash-content-container-1">
              <text>Z o n i l y</text>
            </div>

            <div className="tri-content-container">
              <div className="tri-content-col even">
              </div>
              <div className="tri-content-col even">
              </div>
              <div className="tri-content-col even">
              </div>
            </div>

            <div className="stock-photo-container">
              <img className="stock-photo" src={StockPhoto2}></img>
            </div>

            <div className="tri-content-container">
              <div className="tri-content-col odd">
              </div>
              <div className="tri-content-col odd">
              </div>
              <div className="tri-content-col odd">
              </div>
            </div>

            <div className="splash-footer-container">
              <div className="splash-footer-content">
                <h1>About the Team</h1>
              </div>
            </div>
          </div>
        );
    }
}
