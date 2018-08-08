import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="row">
                    <div className="col-four tab-full mob-full footer-info">
                        <div className="footer-logo"></div>
                    </div>
                    <div className="col-two tab-1-3 mob-1-2 site-links">
                        <h4>Site Links</h4>
                        <ul>
                            <li>
                                <a href="#">The Team</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-two tab-1-3 mob-1-2 social-links">
                        <h4>Social</h4>
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
                    <div className="col-four tab-1-3 mob-full footer-subscribe">
                        <h4>Contact Us</h4>
                        <p>
                            Questions? Want to be a Beta User? Want to be a
                            Playbook Partner? Let us know!
                        </p>
                        <div className="subscribe-form">
                            <form id="mc-form" className="group">
                                <input type="text" name="dName" className="email" id="mc-name" placeholder="Name (Required)" required="true" />
                                <input type="email" name="dEmail" className="email" id="mc-email" placeholder="Email (Required)" required="true" />
                                <textarea className="email" id="mc-message" placeholder="Message (Optional)" />
                                <button type="submit" name="subscribe">Send Message</button>
                                <label className="subscribe-message"></label>
                            </form>
                        </div>
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