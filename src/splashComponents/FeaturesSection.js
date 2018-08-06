import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features">
            <div className="row section-intro">
                <div className="col-twelve with-bottom-line">
                    <h5>Features</h5>
                    <h1>The Playbooks</h1>

                    <p className="lead">
                        [Probably describe what a playbook is...]
                    </p>
                </div>
            </div>

            <div className="row features-content">
                <div className="features-list block-1-3 block-s-1-2 block-tab-full group">
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-window"></i>
                        </span>
                        <div className="service-content">
                            <h3 className="h05">
                                Videos/Podcasts
                            </h3>
                            <p>
                                Hear directly from business owners about their
                                story, their inspirations, and their visions
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-eye"></i>
                        </span>
                        <div className="service-content">
                            <h3 className="h05">Roles Descriptions</h3>
                            <p>
                                Learn about how business owners define 
                                the different roles used to run their business
                            </p>
                        </div>
                    </div>

                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-paint-brush"></i>
                        </span>

                        <div className="service-content">
                            <h3 className="h05">Timelines</h3>
                            <p>
                                Learn about the timelines business owners followed
                                to get to where they got [lol gg blehh]
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-file"></i>
                        </span>
                        <div className="service-content">
                            <h3 className="h05">Workflows</h3>
                            <p>
                                Get access to real workflows used by business owners
                                to run all the different aspects of their business
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-layers"></i>
                        </span>

                        <div className="service-content">
                            <h3 className="h05">Tip & Tricks</h3>
                            <p>
                                Get tips and tricks learned only by experience
                                etc. etc
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-gift"></i>
                        </span>

                        <div className="service-content">
                            <h3 className="h05">Inspiration</h3>
                            <p>
                                Get inspired by businesses you already love and
                                look up to. Starting a business is as much a job
                                as it is a passion..blah blah 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;