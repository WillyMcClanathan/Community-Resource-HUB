import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ResourceDetail } from '@/components/ResourceDetail';
import { ResourceCard } from '@/components/ResourceCard';
import resourcesData from '@/data/resources.json';
import categoriesData from '@/data/categories.json';
import { generateMetadata as generateMeta, generateResourceSchema, generateBreadcrumbSchema } from '@/lib/seo';

export async function generateStaticParams() {
  return resourcesData.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const resource = resourcesData.find((r) => r.slug === params.slug);

  if (!resource) {
    return {};
  }

  return generateMeta({
    title: resource.name,
    description: resource.description,
    url: `/resources/${resource.slug}`,
    type: 'article',
    keywords: [resource.category, resource.city, ...resource.tags],
  });
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = resourcesData.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  const category = categoriesData.find((c) => c.id === resource.category);

  const relatedResources = resourcesData
    .filter(
      (r) =>
        r.id !== resource.id &&
        (r.category === resource.category || r.city === resource.city)
    )
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Resources', url: '/resources' },
    { name: resource.name, url: `/resources/${resource.slug}` },
  ]);

  const resourceSchema = generateResourceSchema(resource);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/resources">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
        </Button>

        <Breadcrumbs
          items={[
            { label: 'Resources', href: '/resources' },
            { label: category?.name || 'Resource' },
            { label: resource.name },
          ]}
        />

        <ResourceDetail resource={resource as any} />

        {relatedResources.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedResources.map((related) => (
                <ResourceCard key={related.id} resource={related as any} />
              ))}
            </div>
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceSchema) }}
        />
      </div>
    </div>
  );
}
