import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import PartnerSection from "../components/HomePage/PartnerSection";
import ValueSection from "../components/HomePage/ValueSection";
import TrailBanner from "../components/HomePage/TrailBanner";
import SolutionSection from "../components/HomePage/SolutionSection";
import PricingSection from "../components/HomePage/PricingSection";
import FaqSection from "../components/HomePage/FaqSexction";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import SalesSection from "../components/HomePage/SalesSection";
import ToolsSection from "../components/HomePage/ToolsSection";
import ProductInsightsSection from "../components/HomePage/ProductInsightsSection";
import LandingLayout from "../layouts/LandingLayout";

const HomePage = () => {
  return (
    <LandingLayout>
      <HeroSection />
      {/* <PartnerSection /> */}
      <TestimonialSection />
      <ValueSection />
      <TrailBanner />
      <SalesSection />
      <ToolsSection />
      <ProductInsightsSection />
      <SolutionSection />
      <PricingSection />
      <FaqSection />
    </LandingLayout>
  );
};

export default HomePage;
