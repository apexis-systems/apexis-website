import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { OriginSection } from "@/components/landing/OriginSection";
import { WhatApexisDoesSection } from "@/components/landing/WhatApexisDoesSection";
import { TheShiftSection } from "@/components/landing/TheShiftSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { LearningCurveSection } from "@/components/landing/LearningCurveSection";
import { WorkflowFitSection } from "@/components/landing/WorkflowFitSection";
import { ProjectChatSection } from "@/components/landing/ProjectChatSection";
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
import { DataSecuritySection } from "@/components/landing/DataSecuritySection";
import { BrandStatementSection } from "@/components/landing/BrandStatementSection";

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
      
      {/* 2. The Problem */}
      <ProblemSection />
      <SectionDivider />

      {/* 2b. The Origin of APEXIS */}
      <OriginSection />
      <SectionDivider />

      {/* 3. What APEXIS Actually Does */}
      <WhatApexisDoesSection />
      <SectionDivider />
      
      {/* 4. The Shift */}
      <TheShiftSection />
      <SectionDivider />
      
      {/* 5. How APEXIS Works */}
      <SolutionSection />
      <SectionDivider />
      
      {/* 6. Zero Learning Curve */}
      <LearningCurveSection />
      <SectionDivider />
      
      {/* 7. Fits Seamlessly */}
      <WorkflowFitSection />
      <SectionDivider />
      
      {/* 7b. Project Chat */}
      <ProjectChatSection />
      <SectionDivider />

      {/* 8. Notifications Intelligence */}
      <PriorityNotificationsSection />
      <SectionDivider />
      
      {/* 9. Built for the Field */}
      <DifferentiationSection />
      <SectionDivider />
      
      {/* 10. Export & Handover */}
      <ClientHandoverSection />
      
      {/* 11. Before vs After */}
      <BeforeAfterSection />
      <SectionDivider />
      
      {/* 12. Enterprise Credibility */}
      <AccountabilitySection />
      <MarqueeSection />
      <SectionDivider />
      
      {/* 13. Social Proof */}
      <TestimonialsSection />
      
      {/* 14. Metrics + Pricing */}
      <MetricsSection />
      <PricingSection />
      <SectionDivider />
      
      {/* 15. Data Privacy */}
      <DataPrivacySection />
      <SectionDivider />

      {/* 15b. Data Security */}
      <DataSecuritySection />
      <SectionDivider />
      
      
      {/* 17. Final Conversion */}
      <FinalCTA onOpenSignup={() => setSignupOpen(true)} />
      
      {/* 18. Social Media Icons */}
      <SocialIconsSection />
      
      
      {/* 19. Footer */}
      <Footer />
      
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Index;
