import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import apexisLogo from "@/assets/apexis-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onOpenSignup: () => void;
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Problem", href: "#problem" },
  { label: "Origin", href: "#origin" },
  { label: "Product", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#demo" },
  { label: "Founder", href: "/founder" },
  { label: "Login", href: "/login" },
];

export function Navbar({ onOpenSignup }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href === "#") {
      if (window.location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (window.location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <img src={apexisLogo} alt="APEXIS logo" className="h-10 w-10 object-contain" />
          <span className="font-brand text-2xl tracking-wide">APEXIS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button variant="default" size="sm" onClick={onOpenSignup}>
            Book Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground text-left"
                  >
                    {link.label}
                  </button>
                ))}
              <Button variant="default" size="sm" onClick={() => { setMobileOpen(false); onOpenSignup(); }}>
                Book Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
