import React from 'react';
import Header from './splashComponents/Header';
import IntroSection from './splashComponents/IntroSection';
import AboutSection from './splashComponents/AboutSection';
import FeaturesSection from './splashComponents/FeaturesSection';
import PlaybookPartnersSection from './splashComponents/PlaybookPartnersSection';
import PricingSection from './splashComponents/PricingSection';
import ContactUsSection from './splashComponents/ContactUsSection';
import FAQSection from './splashComponents/FAQSection';
import Footer from './splashComponents/Footer';

import "semantic-ui-css/semantic.min.css";
import "../../styles/base.css";
import "../../styles/main.css";
import "../../styles/vendor.css";




export default class Splash extends React.Component {
    //FIXME: lol we need to get this jquery out of react
    componentDidMount() {
        // eslint-disable-next-line
        var toggleButton = $('.menu-toggle'),
            // eslint-disable-next-line
            nav = $('.main-navigation');

        toggleButton.on('click', function (event) {
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');
        // eslint-disable-next-line
        $(window).resize(function () {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });
        // eslint-disable-next-line
        $('#main-nav-wrap li a').on("click", function () {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.fadeOut();
            }
        });
        // eslint-disable-next-line
        var sections = $("section"),
            // eslint-disable-next-line
            navigation_links = $("#main-nav-wrap li a");

        sections.waypoint({
            handler: function (direction) {
                var active_section;
                // eslint-disable-next-line
                active_section = $('section#' + this.element.id);

                if (direction === "up") active_section = active_section.prev();
                // eslint-disable-next-line
                var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            },
            offset: '25%'
        });
        // eslint-disable-next-line
        $('.smoothscroll').on('click', function (e) {

            e.preventDefault();

            var target = this.hash,
            // eslint-disable-next-line
                $target = $(target);
            // eslint-disable-next-line
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });

        });

    }

    render() {
        return (
            <div className="splash">
                <Header />
                <IntroSection />
                <AboutSection />
                <FeaturesSection />
                <PlaybookPartnersSection />
                <PricingSection />
                <ContactUsSection />
                <Footer />
            </div>
        )
    }
}
