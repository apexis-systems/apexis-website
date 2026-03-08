import apexisLogoFooter from "@/assets/apexis-logo-footer.png";

export function Footer() {
  return (
    <footer>
      {/* Logo section above footer bar */}
      <div className="flex justify-center py-10">
        <img src={apexisLogoFooter} alt="APEXIS logo" className="h-64 sm:h-72 lg:h-80 w-auto object-contain" />
      </div>

      {/* Footer bar */}
      <div className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Product */}
            <div>
              <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-4 text-foreground/60">Product</h4>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground font-light">
                <a href="#solution" className="hover:text-foreground transition-colors">How It Works</a>
                <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
                <a href="#" className="hover:text-foreground transition-colors">Security</a>
                <a href="#about" className="hover:text-foreground transition-colors">About <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span></a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-4 text-foreground/60">Company</h4>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground font-light">
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                <a href="#" className="hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-foreground transition-colors">Terms and Conditions</a>
              </div>
            </div>

            {/* Statement */}
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Structured reporting for serious construction teams.
              </p>
              <p className="mt-4 font-display font-bold text-gradient-gold">
                Record. Report. Release.
              </p>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground/60 text-center font-light">
              © {new Date().getFullYear()} <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
