import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'FAQ',
  description: 'Frequently asked questions about using the MTHS Community Resource Hub.',
  url: '/faq',
});

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-8">
          Find answers to common questions about using the Community Resource Hub.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="what-is">
            <AccordionTrigger className="text-left">
              What is the Community Resource Hub?
            </AccordionTrigger>
            <AccordionContent>
              The Community Resource Hub is a searchable directory of services available to residents of
              Mountlake Terrace and South Snohomish County. It includes resources for food assistance,
              housing, healthcare, education, legal services, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-to-search">
            <AccordionTrigger className="text-left">How do I search for resources?</AccordionTrigger>
            <AccordionContent>
              Use the search bar on the homepage or resources page to search by keyword. You can also
              browse by category, filter by city or service area, and sort results by name or recent
              verification. Advanced filters include cost, languages offered, and accessibility features.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accurate">
            <AccordionTrigger className="text-left">
              How accurate is the information?
            </AccordionTrigger>
            <AccordionContent>
              All resources in this demonstration project are sample data based on real community
              organizations but should be verified before use. Each entry shows a Last Verified date.
              For actual community resources, please contact organizations directly to confirm hours,
              eligibility, and services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="submit">
            <AccordionTrigger className="text-left">How do I submit a resource?</AccordionTrigger>
            <AccordionContent>
              Click the Submit Resource button on the homepage or navigation menu. Fill out the
              submission form with details about the organization, services, contact information, and
              eligibility. Our team reviews all submissions before adding them to the directory.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="update">
            <AccordionTrigger className="text-left">
              What if I notice incorrect information?
            </AccordionTrigger>
            <AccordionContent>
              On each resource detail page, click the Report an Update button to submit corrections.
              You can also use the general submission form to suggest updates to existing resources.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="free">
            <AccordionTrigger className="text-left">Is this service free?</AccordionTrigger>
            <AccordionContent>
              Yes, the Community Resource Hub is completely free to use. There are no fees to search,
              view, or submit resources. Individual organizations listed may have their own costs for
              services, which are indicated in their listings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="who-runs">
            <AccordionTrigger className="text-left">Who maintains this directory?</AccordionTrigger>
            <AccordionContent>
              This directory was created by Mountlake Terrace High School TSA as a competition project
              for the WTSA 2025-26 Webmaster Event. It demonstrates web development skills and
              community-focused design but is not an official government or organizational resource.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="privacy">
            <AccordionTrigger className="text-left">How is my data protected?</AccordionTrigger>
            <AccordionContent>
              We collect minimal data and do not use tracking cookies. When you submit a resource, we
              only collect the information you provide in the form. See our Privacy Policy for full
              details on data handling practices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accessibility">
            <AccordionTrigger className="text-left">
              Is this site accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes! This site is designed with accessibility as a priority. It includes semantic HTML,
              ARIA labels, keyboard navigation, visible focus indicators, and screen reader support. For
              details, see our Accessibility Statement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mobile">
            <AccordionTrigger className="text-left">Can I use this on my phone?</AccordionTrigger>
            <AccordionContent>
              Absolutely. The site is mobile-first and responsive, working seamlessly on phones,
              tablets, and desktop computers. All features including search, filters, and submission
              forms are fully functional on mobile devices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
