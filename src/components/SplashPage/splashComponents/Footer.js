import React from 'react';

const Footer = () => {

    // <div className="row">
    //     <div className="col-four tab-full mob-full footer-info">
    //         <div className="footer-logo"></div>
    //     </div>
    //     <div className="col-two tab-1-3 mob-1-2 social-links">
    //         <h4>Follow Us!</h4>
    //         <ul>
    //             <li>
    //                 <a href="https://www.facebook.com/Zonily-287783848656914/">Facebook</a>
    //             </li>
    //             <li>
    //                 <a href="https://www.instagram.com/zonilyinc/">Instagram</a>
    //             </li>
    //             <li>
    //                 <a href="#">Linkedin</a>
    //             </li>
    //             <li>
    //                 <a href="#">Twitter</a>
    //             </li>
    //         </ul>
    //     </div>
    // </div>

    return (
        <footer>
            <div className="footer-main">
                <div className="footer-content">
                    <div className="footer-content_left">
                        <div className="footer-logo"></div>
                    </div>
                    <div className="footer-content_right">
                        <span className="social-link"><a target="_blank" href="https://www.facebook.com/Zonily-287783848656914/"><i className="fab fa-facebook-square fa-2x"></i></a></span>
                        <span className="social-link"><a target="_blank" href="https://www.instagram.com/zonilyinc/"><i className="fab fa-instagram fa-2x"></i></a></span>
                        <span className="social-link"><a target="_blank" href="https://www.linkedin.com/company/zonily-inc/"><i className="fab fa-linkedin fa-2x"></i></a></span>
                        <span className="social-link"><a target="_blank" href="https://www.meetup.com/Bay-Area-Food-Beverage-Entrepreneurs"><i className="fab fa-meetup fa-2x"></i></a></span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright Zonily Inc. 2018.</span>
                        </div>
                        <div id="go-top" style={{ display: "block" }}>
                            <a className="smoothscroll" title="Back to Top" href="#top">
                                <i className="icon ion-android-arrow-up"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;