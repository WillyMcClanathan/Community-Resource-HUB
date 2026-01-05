import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Code } from 'lucide-react';
import siteData from '@/data/site.json';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'About',
  description: 'Learn about Entraide, a community resource platform serving South Snohomish County.',
  url: '/about',
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'About' }]} />

        <h1 className="text-4xl font-bold mb-4">About Entraide</h1>

        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Entraide is a community resource platform designed to help South Snohomish County residents
            quickly find reliable local support services. From food banks to health clinics, housing assistance
            to educational programs, we organize and present trusted community resources in one accessible place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                To provide accessible, centralized information about community resources that serve
                residents in need. We believe finding help should be simple, clear, and available
                to everyone regardless of background, technology access, or familiarity with social services.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Who We Serve</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Residents of South Snohomish County, including Mountlake Terrace, Lynnwood, Edmonds,
                Everett, and surrounding communities. Our resources serve individuals and families
                seeking assistance with food, housing, health care, transportation, education, and more.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Built for Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Designed with accessibility at its core, featuring instant search, mobile-first
                responsive design, full keyboard navigation, and screen reader support. Works on
                any device, from smartphones to desktop computers.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Verified Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All listed resources are researched and verified through official sources, including
                211 Snohomish County, organizational websites, and community partnerships. We prioritize
                accuracy and regularly update resource information.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Important Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All resources listed in this directory are provided for informational purposes. While we
              strive for accuracy and regularly verify information with service providers, we recommend
              contacting organizations directly to confirm current hours, eligibility requirements, and
              availability of services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              For questions or to report outdated information, please contact {siteData.publicContactEmail}.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
