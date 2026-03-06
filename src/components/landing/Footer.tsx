import apexisLogoFooter from "@/assets/apexis-logo-footer.png";

export function Footer() {
  return (
    <footer>
      {/* Logo section above footer bar */}
      <div className="flex justify-center py-16">
        <img src={apexisLogoFooter} alt="Apexis logo" className="h-48 sm:h-56 lg:h-64 w-auto object-contain" />
      </div>

      {/* Footer bar */}
      <div className="py-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Product</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="#solution" className="hover:text-foreground transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
              <a href="#about" className="hover:text-foreground transition-colors">About Apexis</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>

          {/* Statement */}
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Structured reporting for serious construction teams.
            </p>
            <p className="mt-4 font-display font-bold text-gradient-gold">
              Record. Report. Release.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Apexis. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
