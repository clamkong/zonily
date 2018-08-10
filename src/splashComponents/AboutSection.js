import React from 'react';

const AboutSection = () => {
    return (
        <section id="process">
            <div className="row section-intro">
                <div className="col-twelve with-bottom-line">
                    <h5>About</h5>
                    <h1>Why Zonily?</h1>

                    <div className="lead">
                        <p>Have you ever wondered <span style={{"textDecoration": "underline", "fontWeight": "bold"}}>what</span> you should be doing to achieve your business goals?</p>
                        <p>Have you ever wondered <span style={{ "textDecoration": "underline", "fontWeight": "bold" }}>how</span> you can take your current business to the next level?</p>
                        <p>Starting a business is hard. Running a business is even harder.</p>

                        <p>We understand. That's why we built Zonily.</p>
                        <p>Zonily is a marketplace of stories that inspire and playbooks that guide.</p>
                        <p>
                            At Zonily, you will find playbooks developed by some of the most inspirational and 
                            experienced entrepreneurs who will give you insight into steps and strategies 
                            for how to build a successful business. 
                        </p>
                        <p>
                            Our mission at Zonily is to bring you the tools, 
                            resources, methods and systems that can help you scale and grow your 
                            business. With Zonily's help, you'll be able to spend your time, energy, and money on 
                            what’s most important to you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;