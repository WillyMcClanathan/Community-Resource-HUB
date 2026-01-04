import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your information.',
  url: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: October 1, 2025</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              Neighborly respects your privacy. This policy explains what information we collect,
              how we use it, and your rights regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">Browsing Data</h3>
            <p>
              When you browse our site, we collect minimal anonymous data using local storage for
              analytics purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pages visited and timestamps</li>
              <li>No cookies or tracking identifiers</li>
              <li>No personally identifiable information</li>
              <li>No IP address logging</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Submission Data</h3>
            <p>When you submit a resource to our directory, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Organization details (name, category, description, location, hours)</li>
              <li>Contact information (phone, email, website)</li>
              <li>Service details (cost, eligibility, languages, accessibility)</li>
              <li>Your name and email address (for verification purposes only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Analytics:</strong> Understanding which resources are most accessed (anonymous,
                no personal data)
              </li>
              <li>
                <strong>Verification:</strong> Reviewing and confirming submitted resources before
                publication
              </li>
              <li>
                <strong>Communication:</strong> Contacting you about your submission if clarification
                is needed
              </li>
              <li>
                <strong>Directory Maintenance:</strong> Keeping resource information current and
                accurate
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Storage & Security</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submissions are stored in a secure JSON file with limited access</li>
              <li>We do not sell, rent, or share your data with third parties</li>
              <li>Your email is used only for verification and never publicly displayed</li>
              <li>
                Data is retained only as long as necessary to fulfill the stated purposes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies & Tracking</h2>
            <p>
              <strong>We do not use cookies for tracking.</strong> The only data stored locally is
              anonymous page view counts in your browser's local storage. You can clear this at any
              time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p>
              This site does not integrate third-party tracking or analytics services (e.g., Google
              Analytics). External links to resources may have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to any data we have collected about you</li>
              <li>Request correction or deletion of your submitted information</li>
              <li>Withdraw consent for us to use your submission</li>
              <li>Clear your browser's local storage at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at mths.tsa@example.edu with your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              This site is not directed at children under 13. We do not knowingly collect personal
              information from children. If you believe we have inadvertently collected data from a
              child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this privacy policy periodically. Changes will be posted on this page with
              an updated Last Updated date. Continued use of the site after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For questions or concerns about this privacy policy or our data practices, please contact:
            </p>
            <p className="mt-2">
              Email: hello@neighborlyhub.org
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
