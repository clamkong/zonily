import React from 'react';

import avatar1 from '../images/avatars/avatar-1.jpg'
import avatar2 from '../images/avatars/avatar-2.jpg'

const PlaybookPartnersSection = () => {
    return (
        <section id="testimonials">
            <div className="row section-intro">
                <div className="col-twelve with-bottom-line">
                    <h5>Partners</h5>
                    <h1>Who You'll Learn From</h1>
                </div>
            </div>
            <div className="row flex-container">
                Our current partners have businesses earning between $1 million - $25 million in revenue.
                <div>We are currently developing their playbooks! Stay tuned!</div>
            </div>
        </section>
    )

    // return (
    //     <section id="testimonials">
    //         <div className="row">
    //             <div className="col-twelve">
    //                 <h5>Partners</h5>
    //                 <h2 className="h01">Who You'll Learn From</h2>
    //             </div>
    //         </div>
    //         <div className="row flex-container">
    //             <div id="testimonial-slider" className="flexslider">
    //                 <ul className="slides">
    //                     <li>
    //                         <div className="testimonial-author">
    //                             <img src={avatar1} alt="Author image" />
    //                             <div className="author-info">
    //                                 Company A
    //                                 <span className="position">John Doe, Owner</span>
    //                             </div>
    //                         </div>
    //                         <p>
    //                             Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is
    //                             great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking.
    //                             Don't settle. As with all matters of the heart, you'll know when you find it.
    //                         </p>
    //                     </li>
    //                     <li>
    //                         <div className="testimonial-author">
    //                             <img src={avatar2} alt="Author image" />
    //                             <div className="author-info">
    //                                 Company B
    //                                 <span>Jane Doe, General Manager</span>
    //                             </div>
    //                         </div>
    //                         <p>
    //                             This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
    //                             bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
    //                             cursus a sit amet mauris.
    //                         </p>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </section>
    // );
}

export default PlaybookPartnersSection;