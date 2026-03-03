import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { DifferentiationSection } from "@/components/landing/DifferentiationSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { MarqueeSection } from "@/components/landing/MarqueeSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SignupModal } from "@/components/landing/SignupModal";

const Index = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />
      <HeroSection onOpenSignup={() => setSignupOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <AboutSection />
      <DifferentiationSection />
      <TestimonialsSection />
      <MarqueeSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA onOpenSignup={() => setSignupOpen(true)} />
      <Footer />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Index;
