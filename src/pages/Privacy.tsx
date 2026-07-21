import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/common/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy"
        description="Official Privacy Policy of Apexis. Learn how we collect, use, and protect personal and project data for construction teams."
        canonicalUrl="/privacy"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Privacy Policy – <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span></h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-8 font-light">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">1. Introduction</h2>
            <p>Apexis respects your privacy and is committed to protecting the personal and project information of our users.</p>
            <p>This Privacy Policy explains how Apexis collects, uses, and protects information when you use the Apexis website and platform.</p>
            <p>By accessing or using Apexis, you agree to the practices described in this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">2. Information We Collect</h2>
            <p>Apexis may collect the following types of information.</p>

            <h3 className="text-lg font-display font-semibold text-foreground mt-6">Personal Information</h3>
            <p>When users create an account or interact with the platform, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Job role or designation</li>
              <li>Contact information</li>
            </ul>
            <p>This information helps us provide and manage user accounts.</p>

            <h3 className="text-lg font-display font-semibold text-foreground mt-6">Project Information</h3>
            <p>When using the platform, users may record or upload project-related data including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Construction site updates</li>
              <li>Project logs</li>
              <li>Reports and documentation</li>
              <li>Media files such as photos or attachments</li>
              <li>Stakeholder communications</li>
            </ul>
            <p>This information is used solely for project reporting and collaboration within the platform.</p>

            <h3 className="text-lg font-display font-semibold text-foreground mt-6">Technical Information</h3>
            <p>To improve performance and security, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device type</li>
              <li>Browser type</li>
              <li>IP address</li>
              <li>Log data</li>
              <li>Platform usage information</li>
            </ul>
            <p>This helps us maintain system reliability and improve the user experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">3. How We Use Information</h2>
            <p>Apexis uses collected information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and operate the platform</li>
              <li>Enable users to record and manage project updates</li>
              <li>Generate structured project reports</li>
              <li>Improve platform functionality and reliability</li>
              <li>Provide technical support when required</li>
              <li>Communicate important platform updates</li>
            </ul>
            <p>Apexis does <strong className="text-foreground">not sell user data</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">4. Data Ownership</h2>
            <p>Users retain full ownership of the project data they upload or create on the platform.</p>
            <p>Apexis does not claim ownership of user-generated project content.</p>
            <p>Project data remains accessible only to authorized users and invited stakeholders within a project workspace.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">5. Data Security</h2>
            <p>Apexis takes reasonable technical and organizational measures to protect user data.</p>
            <p>Security practices may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Secure cloud infrastructure</li>
              <li>Access controls</li>
              <li>Encrypted data transmission</li>
              <li>System monitoring</li>
            </ul>
            <p>While we work to protect user information, no digital platform can guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">6. Data Sharing</h2>
            <p>Apexis does not share user data with third parties except in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>When required to operate the platform infrastructure</li>
              <li>When required by law or legal obligations</li>
              <li>When necessary to investigate misuse or security incidents</li>
            </ul>
            <p>Apexis will never sell project data or personal information to advertisers.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">7. Data Retention</h2>
            <p>User data is retained only as long as necessary to provide the platform services.</p>
            <p>Users may request deletion of their account and associated data at any time, subject to applicable legal or operational requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">8. Cookies and Website Analytics</h2>
            <p>The Apexis website may use cookies or analytics tools to understand how visitors interact with the site.</p>
            <p>These technologies help improve:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website performance</li>
              <li>Navigation experience</li>
              <li>Platform usability</li>
            </ul>
            <p>Users may adjust browser settings to manage or disable cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">9. User Rights</h2>
            <p>Depending on applicable laws, users may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access their personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of personal data</li>
              <li>Withdraw consent for certain data processing activities</li>
            </ul>
            <p>Requests can be submitted through the contact information provided below.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">10. Changes to This Privacy Policy</h2>
            <p>Apexis may update this Privacy Policy periodically to reflect improvements to the platform or legal requirements.</p>
            <p>Updated versions will be published on the website.</p>
            <p>Continued use of the platform indicates acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">11. Contact Information</h2>
            <p>If you have questions about this Privacy Policy or your data, please contact:</p>
            <p className="font-semibold text-foreground">Apexis Team</p>
            <p>Email: <a href="mailto:support@apexis.in" className="text-[#f97415] hover:underline">support@apexis.in</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
