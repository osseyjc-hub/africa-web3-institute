import React from "react";
import AWPIIHero from "@/components/awpii/AWPIIHero";
import AWPIIOverview from "@/components/awpii/AWPIIOverview";
import AWPIIWhyItMatters from "@/components/awpii/AWPIIWhyItMatters";
import AWPIIPillars from "@/components/awpii/AWPIIPillars";
import AWPIIDeliverables from "@/components/awpii/AWPIIDeliverables";
import AWPIIMarketInMotion from "@/components/awpii/AWPIIMarketInMotion";
import AWPIIInstitutional from "@/components/awpii/AWPIIInstitutional";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AWPII() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AWPIIHero />
      <AWPIIOverview />
      <AWPIIWhyItMatters />
      <AWPIIPillars />
      <AWPIIDeliverables />
      <AWPIIMarketInMotion />
      <AWPIIInstitutional />
      <Footer />
    </div>
  );
}