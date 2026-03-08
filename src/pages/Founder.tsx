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
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 block">
              Founder
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              From Architectural Practice to Construction Technology
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base font-light">
              <p>
                The founder of <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> is an architect with over a decade of professional experience in the architecture and construction industry, having worked extensively on both residential and commercial projects from concept development to final execution and handover.
              </p>
              <p>
                From 2016 to 2026, he was associated with <span className="font-bold text-foreground">Samar Ramachandra Associates</span>, where he progressed to the role of <span className="font-bold text-foreground">Senior Associate Architect</span>. During his time at the firm, he played a key role in leading multiple projects and managing project teams, eventually heading projects as a <span className="font-bold text-foreground">Studio Head</span>.
              </p>
              <p>
                His work involved overseeing the complete lifecycle of projects — from initial design vision and planning to on-site coordination and project delivery, ensuring that design intent translated seamlessly into built reality.
              </p>
              <p>
                Alongside professional practice, he has also been actively involved in mentoring architecture students, guiding interns who joined the studio each year and helping them gain practical exposure to the profession.
              </p>
              <p>
                With years of experience navigating the complexities of construction projects, he founded <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> with the goal of bringing greater transparency, structure, and technological efficiency to project management within the built environment.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8">
            <div className="border-l-2 border-accent pl-6 space-y-4">
              <p className="text-lg font-display font-semibold text-foreground">
                <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> is not just a tool.
              </p>
              <p className="text-lg font-display font-semibold text-foreground">
                It is a step towards modernizing the construction experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-10">
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                Mirza Naseer Ahmed Baig
              </h3>
              <p className="text-sm font-medium" style={{ color: '#f97415' }}>
                Founder, <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span>.
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
