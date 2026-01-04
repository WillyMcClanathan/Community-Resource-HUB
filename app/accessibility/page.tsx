import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck as CheckCircle2 } from 'lucide-react';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Accessibility Statement',
  description: 'Our commitment to web accessibility and inclusive design.',
  url: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Accessibility' }]} />

        <h1 className="text-4xl font-bold mb-2">Accessibility Statement</h1>
        <p className="text-muted-foreground mb-8">
          We are committed to ensuring digital accessibility for all users.
        </p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p>
              Neighborly is designed to be accessible to everyone, including people with disabilities.
              We strive to meet WCAG 2.1 Level AA standards and continuously work to improve the
              accessibility of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Semantic HTML5 elements',
                'ARIA labels and landmarks',
                'Keyboard-only navigation',
                'Visible focus indicators',
                'Skip to main content link',
                'Screen reader compatibility',
                'Alternative text for images',
                'Sufficient color contrast',
                'Responsive text sizing',
                'Form field labels and validation',
                'Error announcements with aria-live',
                'No time-limited actions',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Keyboard Shortcuts</h2>
            <Card>
              <CardHeader>
                <CardTitle>Navigation Shortcuts</CardTitle>
                <CardDescription>Use these keyboard shortcuts for faster navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div className="flex gap-4">
                    <dt className="font-mono bg-muted px-2 py-1 rounded">Tab</dt>
                    <dd>Navigate forward through interactive elements</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-mono bg-muted px-2 py-1 rounded">Shift + Tab</dt>
                    <dd>Navigate backward through interactive elements</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-mono bg-muted px-2 py-1 rounded">/</dt>
                    <dd>Focus the search bar</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-mono bg-muted px-2 py-1 rounded">f</dt>
                    <dd>Open filters panel</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-mono bg-muted px-2 py-1 rounded">Esc</dt>
                    <dd>Close modals and dialogs</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-mono bg-muted px-2 py-1 rounded">Enter</dt>
                    <dd>Activate buttons and links</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Testing & Compliance</h2>
            <p>This site has been tested with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>NVDA screen reader (Windows)</li>
              <li>VoiceOver (macOS and iOS)</li>
              <li>Keyboard-only navigation</li>
              <li>Chrome DevTools Lighthouse (Accessibility score 100)</li>
              <li>WAVE accessibility evaluation tool</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Browser & Assistive Technology Support</h2>
            <p>This website is compatible with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
              <li>JAWS, NVDA, and VoiceOver screen readers</li>
              <li>Speech recognition software</li>
              <li>Screen magnification tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Accessibility Issues</h2>
            <p>
              We welcome feedback on the accessibility of this site. If you encounter any barriers or
              have suggestions for improvement, please contact us at hello@neighborlyhub.org with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A description of the problem</li>
              <li>The page URL where you encountered the issue</li>
              <li>Your browser and assistive technology (if applicable)</li>
            </ul>
            <p className="mt-4">
              We aim to respond to accessibility feedback within 2 business days and resolve issues
              within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ongoing Improvements</h2>
            <p>
              Accessibility is an ongoing effort. We regularly review and update our site to ensure it
              remains accessible as standards evolve. This includes periodic testing with users of
              assistive technologies and keeping up with WCAG guidelines.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
