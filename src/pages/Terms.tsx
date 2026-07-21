import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/common/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Terms and Conditions"
        description="Official Terms and Conditions governing the use of the Apexis platform and website for architects, contractors, and site teams."
        canonicalUrl="/terms"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Terms and Conditions – <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span></h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-8 font-light">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">1. Introduction</h2>
            <p>Welcome to Apexis.</p>
            <p>These Terms and Conditions govern your use of the Apexis website and platform. By accessing or using the Apexis platform, you agree to comply with and be bound by these terms.</p>
            <p>If you do not agree with these terms, please do not use the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">2. About Apexis</h2>
            <p>Apexis provides a digital platform designed to help construction professionals record, structure, and report project activities. The platform enables users to document site updates, generate project reports, and share project information with stakeholders.</p>
            <p>Apexis is intended for professional use by construction teams, including but not limited to architects, contractors, builders, engineers, and project managers.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">3. User Accounts</h2>
            <p>To access certain features of the platform, users may be required to create an account.</p>
            <p>By creating an account, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Notify Apexis immediately if you suspect unauthorized access</li>
            </ul>
            <p>Apexis reserves the right to suspend or terminate accounts that violate these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">4. Acceptable Use</h2>
            <p>Users agree to use the platform only for lawful and professional purposes.</p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Upload or share unlawful, harmful, or misleading content</li>
              <li>Attempt to gain unauthorized access to the platform or other user accounts</li>
              <li>Disrupt, damage, or interfere with the operation of the platform</li>
              <li>Use the platform to distribute spam or malicious software</li>
              <li>Misrepresent project information in a way that could cause harm to other parties</li>
            </ul>
            <p>Apexis reserves the right to remove content or restrict access if misuse is detected.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">5. User Content and Project Data</h2>
            <p>Users retain ownership of the project data, documents, and information they upload or generate on the platform.</p>
            <p>Apexis does not claim ownership of user-generated project content.</p>
            <p>However, by using the platform, users grant Apexis the limited technical rights necessary to store, process, and display project data solely for the purpose of operating the service.</p>
            <p>Apexis does not access or review private project data unless required for technical support, legal obligations, or security purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">6. Data Privacy</h2>
            <p>Apexis respects user privacy and is committed to protecting user data.</p>
            <p>Project information recorded on the platform remains private to the project team and authorized stakeholders.</p>
            <p>Apexis will not sell or share user data with third parties for marketing purposes.</p>
            <p>For more details, please review our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">7. Platform Availability</h2>
            <p>While Apexis strives to provide reliable and continuous service, we do not guarantee that the platform will always be available without interruption.</p>
            <p>Service may occasionally be suspended for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintenance</li>
              <li>System upgrades</li>
              <li>Security improvements</li>
              <li>Technical issues beyond our control</li>
            </ul>
            <p>Apexis will make reasonable efforts to minimize disruptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">8. Intellectual Property</h2>
            <p>All platform design, software, branding, and related materials associated with Apexis are the intellectual property of Apexis.</p>
            <p>Users may not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Copy or reproduce the platform design</li>
              <li>Reverse engineer the software</li>
              <li>Use the Apexis brand without permission</li>
              <li>Distribute or resell the platform</li>
            </ul>
            <p>All rights not explicitly granted remain reserved by Apexis.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">9. Limitation of Liability</h2>
            <p>Apexis provides tools to assist with project reporting and documentation. However, Apexis does not guarantee the accuracy, completeness, or reliability of information entered by users.</p>
            <p>Apexis shall not be held responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Decisions made based on platform data</li>
              <li>Losses resulting from incorrect or incomplete project updates</li>
              <li>Project delays, disputes, or contractual disagreements between parties</li>
            </ul>
            <p>Users remain responsible for verifying project information before acting upon it.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">10. Third-Party Services</h2>
            <p>The platform may integrate with or reference third-party services or platforms.</p>
            <p>Apexis is not responsible for the policies, functionality, or availability of third-party services.</p>
            <p>Use of such services may be subject to their own terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">11. Termination</h2>
            <p>Apexis reserves the right to suspend or terminate user access if:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>These Terms and Conditions are violated</li>
              <li>The platform is used for unlawful purposes</li>
              <li>Activities pose security or operational risks</li>
            </ul>
            <p>Users may also stop using the platform at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">12. Changes to These Terms</h2>
            <p>Apexis may update these Terms and Conditions periodically to reflect platform improvements, legal requirements, or operational changes.</p>
            <p>Users will be notified of significant updates through the website or platform.</p>
            <p>Continued use of the platform after updates constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">13. Governing Law</h2>
            <p>These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of the jurisdiction in which Apexis operates.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">14. Contact Information</h2>
            <p>For questions regarding these Terms and Conditions, please contact:</p>
            <p className="font-semibold text-foreground">Apexis Team</p>
            <p>Email: <a href="mailto:support@apexis.in" className="text-[#f97415] hover:underline">support@apexis.in</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
