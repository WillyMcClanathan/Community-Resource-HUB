import { NextResponse } from 'next/server';
import resourcesData from '@/data/resources.json';
import { searchResources } from '@/lib/search';
import { applyFilters, sortResources, type ResourceFilters } from '@/lib/filter';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get('q') || '';
    const sortBy = (searchParams.get('sort') as 'relevance' | 'name' | 'verified') || 'relevance';

    const filters: ResourceFilters = {
      categories: searchParams.get('categories')?.split(',').filter(Boolean),
      cities: searchParams.get('cities')?.split(',').filter(Boolean),
      serviceAreas: searchParams.get('serviceAreas')?.split(',').filter(Boolean),
      cost: searchParams.get('cost')?.split(',').filter(Boolean),
      languages: searchParams.get('languages')?.split(',').filter(Boolean),
      accessibility: searchParams.get('accessibility')?.split(',').filter(Boolean),
      openNow: searchParams.get('openNow') === 'true',
    };

    let results = [...resourcesData];

    if (query) {
      results = searchResources(results, query);
    }

    results = applyFilters(results, filters);

    results = sortResources(results, sortBy);

    return NextResponse.json({
      results,
      total: results.length,
      query,
      filters,
    });
  } catch (error) {
    console.error('Error in resources API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}
