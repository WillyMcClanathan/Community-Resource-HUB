import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Code } from 'lucide-react';
import siteData from '@/data/site.json';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'About',
  description: 'Learn about Neighborly, a community resource platform created by the MTHS TSA Webmaster Team.',
  url: '/about',
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'About' }]} />

        <h1 className="text-4xl font-bold mb-4">About Neighborly</h1>

        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            Neighborly is a community resource platform that connects residents of Mountlake Terrace
            and South Snohomish County with essential local services. This searchable directory was
            created by the {siteData.chapterName} for the WTSA {siteData.year} Webmaster Event.
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
                Neighborly connects residents with essential community services through accessible,
                searchable information. We believe everyone deserves easy access to food assistance,
                housing support, health services, and other local resources — all in one place.
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
                Residents of Mountlake Terrace, Lynnwood, Edmonds, and surrounding South Snohomish
                County areas seeking food assistance, housing support, health services, education,
                and more.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Technology & Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built with Next.js 14, TypeScript, and TailwindCSS for optimal performance and
                accessibility. Features include instant search, advanced filtering, mobile-first
                responsive design, and full keyboard navigation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Created by MTHS TSA</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Neighborly was designed and developed by the {siteData.chapterName} Webmaster Team
                for the WTSA {siteData.year} Webmaster Event. This project demonstrates web development
                skills, accessibility best practices, and community-focused design.
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
              All resources listed in this directory are provided as sample data for demonstration
              purposes. While based on real community organizations, the information should be verified
              before use. This project is a student competition entry and not an official government or
              organizational resource.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              For questions about this project, please contact {siteData.contactEmail}.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
