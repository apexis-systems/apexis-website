import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { WhatApexisDoesSection } from "@/components/landing/WhatApexisDoesSection";
import { TheShiftSection } from "@/components/landing/TheShiftSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { LearningCurveSection } from "@/components/landing/LearningCurveSection";
import { WorkflowFitSection } from "@/components/landing/WorkflowFitSection";
import { PriorityNotificationsSection } from "@/components/landing/PriorityNotificationsSection";
import { DifferentiationSection } from "@/components/landing/DifferentiationSection";
import { AccountabilitySection } from "@/components/landing/AccountabilitySection";
import { ClientHandoverSection } from "@/components/landing/ClientHandoverSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { MarqueeSection } from "@/components/landing/MarqueeSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { DataPrivacySection } from "@/components/landing/DataPrivacySection";
import { DemoBookingSection } from "@/components/landing/DemoBookingSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { SocialIconsSection } from "@/components/landing/SocialIconsSection";
import { Footer } from "@/components/landing/Footer";
import { SignupModal } from "@/components/landing/SignupModal";
import { SectionDivider } from "@/components/landing/SectionDivider";

const Index = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />
      
      {/* 1. Hero */}
      <HeroSection onOpenSignup={() => setSignupOpen(true)} />
      <SectionDivider />
      
      {/* 2. About APEXIS */}
      <AboutSection />
      <SectionDivider />
      
      {/* 3. The Problem */}
      <ProblemSection />
      <SectionDivider />
      
      {/* 4. What APEXIS Actually Does */}
      <WhatApexisDoesSection />
      <SectionDivider />
      
      {/* 5. The Shift */}
      <TheShiftSection />
      <SectionDivider />
      
      {/* 6. How APEXIS Works */}
      <SolutionSection />
      <SectionDivider />
      
      {/* 7. Zero Learning Curve */}
      <LearningCurveSection />
      <SectionDivider />
      
      {/* 8. Fits Seamlessly */}
      <WorkflowFitSection />
      <SectionDivider />
      
      {/* 9. Notifications Intelligence */}
      <PriorityNotificationsSection />
      <SectionDivider />
      
      {/* 10. Built for the Field */}
      <DifferentiationSection />
      <SectionDivider />
      
      {/* 11. Export & Handover */}
      <ClientHandoverSection />
      
      {/* 12. Before vs After */}
      <BeforeAfterSection />
      <SectionDivider />
      
      {/* 13. Enterprise Credibility */}
      <AccountabilitySection />
      <MarqueeSection />
      <SectionDivider />
      
      {/* 14. Social Proof */}
      <TestimonialsSection />
      
      {/* 15. Metrics + Pricing */}
      <MetricsSection />
      <PricingSection />
      <SectionDivider />
      
      {/* 16. Data Privacy */}
      <DataPrivacySection />
      <SectionDivider />
      
      {/* 17. Demo Booking */}
      <DemoBookingSection />
      <SectionDivider />
      
      {/* 18. Final Conversion */}
      <FinalCTA onOpenSignup={() => setSignupOpen(true)} />
      
      {/* 19. Social Media Icons */}
      <SocialIconsSection />
      
      {/* 20. Footer */}
      <Footer />
      
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Index;
