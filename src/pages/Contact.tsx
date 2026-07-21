import { ContactSection } from "@/components/landing/ContactSection";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useState } from "react";
import { SignupModal } from "@/components/landing/SignupModal";
import { SEO } from "@/components/common/SEO";

const Contact = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact & Book Demo"
        description="Get in touch with the Apexis team to request a demo, inquire about site reporting solutions, or get technical support for your construction projects."
        canonicalUrl="/contact"
      />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Contact;
