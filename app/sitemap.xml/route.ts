import { NextResponse } from 'next/server';
import resourcesData from '@/data/resources.json';
import siteData from '@/data/site.json';

export async function GET() {
  const baseUrl = siteData.siteUrl;

  const staticPages = [
    '',
    '/resources',
    '/highlights',
    '/submit',
    '/about',
    '/faq',
    '/accessibility',
    '/privacy',
  ];

  const resourcePages = resourcesData.map((resource) => `/resources/${resource.slug}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${resourcePages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
