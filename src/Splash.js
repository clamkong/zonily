import React from 'react';
import Header from './splashComponents/Header';
import IntroSection from './splashComponents/IntroSection';
import AboutSection from './splashComponents/AboutSection';
import FeaturesSection from './splashComponents/FeaturesSection';
import PlaybookPartnersSection from './splashComponents/PlaybookPartnersSection';
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
            <AboutSection />
            <FeaturesSection />
            <PlaybookPartnersSection />
            <FAQSection />
            <Footer />
        </div>
    )
}

export default Splash;
