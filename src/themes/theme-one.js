import React, { Component } from "react";

import Header from "../components/HeaderSection/Header";
import HeroSection from "../components/HomeSection/Home";
import Counter from "../components/CounterSection/Counter";
import FeatureSection from "../components/Features/FeatureOne";
import ServiceSection from "../components/ServiceSection/ServiceOne";
import DiscoverSection from "../components/DiscoverSection/DiscoverOne";
import Work from "../components/WorkSection/Work";
import ScreenshotSection from "../components/ScreenshotSection/ScreenshotsOne";
import ReviewSection from "../components/ReviewSection/ReviewOne";
import PricingSection from "../components/PricingSection/PricingOne";
import AboutSection from "../components/AboutSection/AboutUs";
import FaqSection from "../components/FaqSection/FaqOne";
import Download from "../components/DownloadSection/Download";
import Subscribe from "../components/SubscribeSection/Subscribe";
import Team from "../components/TeamSection/Team";
import ContactSection from "../components/ContactSection/Contact"; // for businesses to register
import FooterSection from "../components/FooterSection/Footer";

class ThemeOne extends Component {
  render() {
    return (
      <div>
        {/*====== Scroll To Top Area Start ======*/}
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up" />
        </div>
        {/*====== Scroll To Top Area End ======*/}
        <div className="main">
          {/* pass hayda logo here */}
          <Header imageData={"/img/logo.svg"} />
          <HeroSection />
          {/* <Counter /> */}
          <FeatureSection />
          <ServiceSection />
          <DiscoverSection />
          {/* <Work /> */}
          {/* <ScreenshotSection /> */}
          {/* what customers are saying */}
          {/* <ReviewSection /> */}
          {/* pricing is about us */}
          {/* <PricingSection /> */}
          {/* <AboutSection /> */}
          <FaqSection />
          {/* <Team /> */}
          {/* <Download /> */}
          {/* <Subscribe /> */}
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    );
  }
}

export default ThemeOne;
