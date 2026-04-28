import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "../components/home/WhoWeAre";
import WhatWeDo from "../components/home/WhatWeDo";
import WhyAfrica from "../components/home/WhyAfrica";
import Programs from "../components/home/Programs";
import Publications from "../components/home/Publications";
import Events from "../components/home/Events";
import Community from "../components/home/Community";
import ContactSection from "../components/home/ContactSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <WhyAfrica />
      <Programs />
      <Publications />
      <Events />
      <Community />
      <ContactSection />
      <FinalCTA />
    </>
  );
}