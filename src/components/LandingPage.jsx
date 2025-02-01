import React from "react";
import NavbarHead from "./NavbarHead/NavbarHead";
import NavMenu from "./NavMenu/NavMenu";
import Banner from "./BannerSection/Banner";
import FeatureSection from "./featurePart/FeatureSection";
import WhatWeDo from "./WhyWeDo/WhatWeDo";
import HowItWorks from "./HowItWork/HowItWork";
import OurProgram from "./OurProgram/OurProgram";
import OurCommunity from "./OurCommunity/OurCommunity";
import OurPartners from "./OurPartners/OurPartners";
import Testimonials from "./Testimonials/Testimonials";
import LatestNews from "./LatestNews/LatestNews";
import CTASection from "./CTASection/CTASection";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarHead />

      {/* Navigation */}
      <NavMenu />

      {/* Hero Section */}
      <Banner />

      {/* Feature Cards */}
      <FeatureSection />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* How it work Section */}
      <HowItWorks />

      {/* Ourprogram  Section */}
      <OurProgram />

      {/* Our Community */}
      <OurCommunity />

      {/* Our partners */}
      <OurPartners />

      {/* Testimonials */}
      <Testimonials />

      {/* LatestNews */}
      <LatestNews />

      {/* CtaSection */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
