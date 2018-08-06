import React from 'react';

import avatar1 from '../images/avatars/avatar-1.jpg'
import avatar2 from '../images/avatars/avatar-2.jpg'

const TestimonialsSection = () => {
    return (
        <section id="testimonials">

            <div className="row">
                <div className="col-twelve">
                    <h2 className="h01">Hear What Are Clients Say.</h2>
                </div>
            </div>
            <div className="row flex-container">
                <div id="testimonial-slider" className="flexslider">
                    <ul className="slides">
                        <li>
                            <div className="testimonial-author">
                                <img src={avatar1} alt="Author image" />
                                <div className="author-info">
                                    Steve Jobs
                                    <span className="position">CEO, Apple.</span>
                                </div>
                            </div>
                            <p>
                                Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is
                                great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking.
                                Don't settle. As with all matters of the heart, you'll know when you find it.
                            </p>
                        </li>
                        <li>
                            <div className="testimonial-author">
                                <img src={avatar2} alt="Author image" />
                                <div className="author-info">
                                    John Doe
                                    <span>CEO, ABC Corp.</span>
                                </div>
                            </div>
                            <p>
                                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;