import React from 'react';
import Header from './splashComponents/Header';
import IntroSection from './splashComponents/IntroSection';
import ProcessSection from './splashComponents/ProcessSection';
import FeaturesSection from './splashComponents/FeaturesSection';
import TestimonialsSection from './splashComponents/TestimonialsSection';
import FAQSection from './splashComponents/FAQSection';
import Footer from './splashComponents/Footer';

import "./styles/base.css";
import "./styles/main.css";
import "./styles/vendor.css";

const Splash = () => {
    return (
        <div className="splash">
            <Header />
            <IntroSection />
            <ProcessSection />
            <FeaturesSection />
            <TestimonialsSection />
            <FAQSection />
            <Footer />
        </div>
    )
}

export default Splash;
