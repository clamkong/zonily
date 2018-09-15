import React from 'react';

const FAQSection = () => {
    return (
        <section id="faq">
            <div className="row section-intro">
                <div className="col-twelve with-bottom-line">
                    <h5>FAQ</h5>
                    <h1>Questions and Answers.</h1>
                    <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam
          lorem ipsum Consectetur ut in in eu do.</p>
                </div>
            </div>
            <div className="row faq-content">
                <div className="q-and-a block-1-2 block-tab-full group">
                    <div className="bgrid">
                        <h3>When will the marketplace be available?</h3>
                        <p>
                            We are hoping to launch early 2019! For updates email us __!
                        </p>
                    </div>
                    <div className="bgrid">
                        <h3>Can I sign up to be a beta user?</h3>
                        <p>
                            Yes email us!
                        </p>
                    </div>
                    <div className="bgrid">
                        <h3>How much will it cost?</h3>
                        <p>
                            Playbook subscriptions will be about $25 to $50 a month.
                        </p>
                    </div>
                    <div className="bgrid">
                        <h3>Who can I expect playbooks from?</h3>
                        <p>
                            We are currently working with some really great business to bring you stuff.
                        </p>
                    </div>
                    <div className="bgrid">
                        <h3>I'm a business owner who wants to write a playbook. How do I get started?</h3>
                        <p>
                            Email us!
                        </p>
                    </div>
                    <div className="bgrid">
                        <h3>Other questions?</h3>
                        <p>
                            Email us!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;