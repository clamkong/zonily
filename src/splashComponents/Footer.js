import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="row">
                    <div className="col-four tab-full mob-full footer-info">
                        <div className="footer-logo"></div>
                    </div>
                    <div className="col-two tab-1-3 mob-1-2 social-links">
                        <h4>Follow Us!</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Zonily-287783848656914/">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/zonilyinc/">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Linkedin</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright Zonily Inc. 2018.</span>
                            <span>Design by
                            <a href="http://www.styleshout.com/"> styleshout</a>
                            </span>
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