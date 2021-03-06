import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features">
            <div className="row section-intro">
                <div className="col-twelve with-bottom-line">
                    <h5>Playbooks</h5>
                    <h1>What's in a Playbook?</h1>

                    <p className="lead">
                        Zonily Playbook: An official set of processes, strategies, tactics and actions
                        for an entire business. These include the stories, timelines, and resources 
                        that made it happen.
                    </p>
                </div>
            </div>

            <div className="row features-content">
                <div className="features-list block-1-3 block-s-1-2 block-tab-full group">
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-video"></i>
                        </span>
                        <div className="service-content">
                            <h3 className="h05">
                                Videos/Podcasts
                            </h3>
                            <p>
                                Hear directly from business owners about their
                                stories, their challenges, and their visions.
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-calendar"></i>
                        </span>
                        <div className="service-content">
                            <h3 className="h05">Timelines</h3>
                            <p>
                                Learn about the critical steps and actions that business owners
                                took that helped them achieve success.
                            </p>
                        </div>
                    </div>

                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-shuffle"></i>
                        </span>

                        <div className="service-content">
                            <h3 className="h05">Workflows</h3>
                            <p>
                                Get access to real workflows used by business owners to run the many
                                different aspects of their business.
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-users"></i>
                        </span>
                        <div className="service-content">
                            <h3 className="h05">Role Descriptions</h3>
                            <p>
                                Learn about the different roles that make a business thrive.
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-layers"></i>
                        </span>

                        <div className="service-content">
                            <h3 className="h05">Resources</h3>
                            <p>
                                Get connected with resources to help you execute your vision. 
                                You'll find all the resources you need to build your best business.
                                Don't see a resource you need? Let us know and we'll find it for you!
                            </p>
                        </div>
                    </div>
                    <div className="bgrid feature">
                        <span className="icon">
                            <i className="icon-light-bulb"></i>
                        </span>

                        <div className="service-content">
                            <h3 className="h05">Tips & Tricks</h3>
                            <p>
                                Get tips and tricks learned only from those with experience. Learn valuable insights on
                                building a business that you otherwise wouldn't have thought to search for.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;