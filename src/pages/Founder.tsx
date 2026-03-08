import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { useState } from "react";
import { SignupModal } from "@/components/landing/SignupModal";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Founder = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />

      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </AnimatedSection>

          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              From Architectural Practice to Construction Technology
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base font-light">
              <p>
                The founder of <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> is an architect with over a decade of experience in the architecture and construction industry, working on both residential and commercial projects from concept development to final execution.
              </p>
              <p>
                From 2016 to 2026, he worked at <span className="font-bold text-foreground">Samar Ramachandra Associates</span>, where he rose to the position of <span className="font-bold text-foreground">Senior Associate Architect</span> and later led projects as a <span className="font-bold text-foreground">Studio Head</span>. During this time, he managed the full lifecycle of multiple projects, from initial design vision to overseeing design development, on-site coordination, and project delivery.
              </p>
              <p>
                He also mentored intern architects, helping bridge the gap between academic learning and professional practice.
              </p>
              <p>
                Drawing from years of real-world project experience, he founded <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> to bring greater transparency, structure, and technology-driven efficiency to construction storage documentation and tracking.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8">
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                Mirza Naseer Ahmed Baig
              </h3>
              <p className="text-sm font-medium" style={{ color: '#f97415' }}>
                Founder, <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span>.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Architect | Industry Experience: 10+ Years
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Founder;
