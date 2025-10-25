import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HighlightGrid } from '@/components/HighlightGrid';
import resourcesData from '@/data/resources.json';
import { generateMetadata as generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Featured Resources',
  description:
    'Explore highlighted community resources making a significant impact in Mountlake Terrace and South Snohomish County.',
  url: '/highlights',
});

export default function HighlightsPage() {
  const featuredResources = resourcesData.filter((r) => r.featured);

  const recentlyVerified = resourcesData
    .filter((r) => !r.featured)
    .sort((a, b) => new Date(b.lastVerified).getTime() - new Date(a.lastVerified).getTime())
    .slice(0, 6);

  const diverseCategories = resourcesData
    .filter((r) => !r.featured)
    .reduce((acc, resource) => {
      if (!acc.some((r) => r.category === resource.category)) {
        acc.push(resource);
      }
      return acc;
    }, [] as typeof resourcesData)
    .slice(0, 3);

  const highlights = [
    ...featuredResources,
    ...recentlyVerified.filter((r) => !featuredResources.some((f) => f.id === r.id)),
  ].slice(0, 9);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs items={[{ label: 'Highlights' }]} />

        <h1 className="text-4xl font-bold mb-2">Featured Resources</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          These resources have been highlighted for their exceptional service to the Mountlake
          Terrace community and surrounding areas. Each provides critical support to residents in
          need.
        </p>

        <HighlightGrid resources={highlights as any} />

        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">About These Highlights</h2>
          <p className="text-muted-foreground">
            Featured resources are selected based on community impact, accessibility, comprehensive
            services, and recent verification. All information is provided as sample data for
            demonstration purposes. Please verify details before visiting any resource.
          </p>
        </div>
      </div>
    </div>
  );
}
