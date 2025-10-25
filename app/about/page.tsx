import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Code } from 'lucide-react';
import siteData from '@/data/site.json';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'About',
  description: 'Learn about the MTHS Community Resource Hub project and our mission.',
  url: '/about',
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'About' }]} />

        <h1 className="text-4xl font-bold mb-4">About This Project</h1>

        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            The MTHS Community Resource Hub is a comprehensive directory created to connect residents
            of Mountlake Terrace and South Snohomish County with essential community services.
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
                To provide accessible, searchable information about community resources that serve our
                neighbors in need. We believe everyone deserves easy access to the support services
                available in our community.
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
              <CardTitle>TSA Webmaster Project</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                This project was developed by {siteData.chapterName} for the WTSA {siteData.year}{' '}
                Webmaster Event, demonstrating web development skills, accessibility best practices,
                and community-focused design.
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
