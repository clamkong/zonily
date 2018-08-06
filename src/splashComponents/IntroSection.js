import React from 'react';

const IntroSection = () => {
    return (
        <section id="intro">
            <div className="shadow-overlay"></div>
            <div className="intro-content">
                <div className="row">
                    <div className="col-twelve">
                        <h5>Hello welcome to Zonily.</h5>
                        <h1>The Business Playbook Marketplace.</h1>

                        <a className="button stroke smoothscroll" href="#process" title="">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;