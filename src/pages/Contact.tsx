import { ContactSection } from "@/components/landing/ContactSection";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useState } from "react";
import { SignupModal } from "@/components/landing/SignupModal";

const Contact = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
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
