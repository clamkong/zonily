import React from 'react';

export default class IntroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailSubmitted: false
        }
    }

    onFormSubmit = (e) => {
        //axios calls form submit
        console.log(`Submitting email ${e.target[0].value}`)
        e.target[0].value = "";

        this.setState({
            emailSubmitted: true
        });

        e.preventDefault();
    }

    getSubscribeForm = () => {
        return (
            <form id="subscribe-form" onSubmit={this.onFormSubmit} className="group">
                <input type="email" name="dEmail" className="email" id="mc-email" placeholder="Email us to learn more" />
                <button className="stroke" type="submit" name="subscribe">Submit</button>
            </form>
        )
    }

    getEmailSubmittedMessage = () => {
        return (
            <h5>Great! You've been signed up for updates!</h5>
        )
    }

    render() {
        //dont need the "learn more" button but keep the code for now
        //<a className="button stroke smoothscroll" href="#process" title="">Learn More</a>
        return (
            <section id="intro">
                <div className="shadow-overlay"></div>
                <div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h5>Hello welcome to Zonily.</h5>
                            <h1>The Business Playbook Marketplace.</h1>
                            <h5>We connect the experience of successful entrepreneurs to you.</h5>
                            <div className="subscribe-container">
                                {
                                    this.state.emailSubmitted ? this.getEmailSubmittedMessage() : this.getSubscribeForm()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}