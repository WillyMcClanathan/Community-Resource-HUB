import siteData from '@/data/site.json';

export interface PageMetadata {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}

export function generateMetadata(page: PageMetadata) {
  const fullTitle = page.title
    ? `${page.title} | ${siteData.siteTitle}`
    : siteData.siteTitle;

  const description = page.description || siteData.siteDescription;
  const url = page.url ? `${siteData.siteUrl}${page.url}` : siteData.siteUrl;
  const image = page.image
    ? `${siteData.siteUrl}${page.image}`
    : `${siteData.siteUrl}${siteData.ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: page.keywords?.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url,
      images: [{ url: image }],
      type: page.type || 'website',
      siteName: siteData.siteTitle,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateResourceSchema(resource: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: resource.name,
    description: resource.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: resource.address,
      addressLocality: resource.city,
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    telephone: resource.contact.phone,
    email: resource.contact.email,
    url: resource.contact.website,
    priceRange: resource.cost,
    areaServed: resource.serviceArea.map((area: string) => ({
      '@type': 'City',
      name: area,
    })),
    openingHours: resource.hours,
    accessibilityAPI: resource.accessibility,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteData.siteUrl}${item.url}`,
    })),
  };
}
