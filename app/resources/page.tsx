'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowUpDown } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { Filters } from '@/components/Filters';
import { ResourceCard } from '@/components/ResourceCard';
import { EmptyState } from '@/components/EmptyState';
import { Pagination } from '@/components/Pagination';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { searchResources } from '@/lib/search';
import { applyFilters, sortResources, getUniqueValues, type ResourceFilters } from '@/lib/filter';
import resourcesData from '@/data/resources.json';

const ITEMS_PER_PAGE = 12;

export default function ResourcesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<ResourceFilters>({});
  const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'verified'>('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMounted(true);
    const q = searchParams.get('q') || '';
    const categories = searchParams.get('categories')?.split(',').filter(Boolean);

    setSearchQuery(q);
    if (categories && categories.length > 0) {
      setFilters({ categories });
    }
  }, [searchParams]);

  const availableOptions = useMemo(() => ({
    categories: getUniqueValues(resourcesData as any[], 'category'),
    cities: getUniqueValues(resourcesData as any[], 'city'),
    serviceAreas: resourcesData.flatMap(r => r.serviceArea).filter((v, i, a) => a.indexOf(v) === i).sort(),
    languages: resourcesData.flatMap(r => r.languages).filter((v, i, a) => a.indexOf(v) === i).sort(),
    accessibility: ['Wheelchair-accessible', 'Parking', 'Restrooms', 'Sign language'],
  }), []);

  const filteredResources = useMemo(() => {
    let results: any[] = [...resourcesData];

    if (searchQuery) {
      results = searchResources(results as any, searchQuery) as any;
    }

    results = applyFilters(results as any, filters) as any;
    results = sortResources(results as any, sortBy) as any;

    return results;
  }, [searchQuery, filters, sortBy]);

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, sortBy]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const params = new URLSearchParams();
    if (value) params.set('q', value);
    router.push(`/resources?${params.toString()}`, { scroll: false });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Community Resources</h1>
        <p className="text-muted-foreground mb-8">
          Browse and search {resourcesData.length} resources serving Mountlake Terrace and South
          Snohomish County (More coming soon)
        </p>

        <div className="space-y-4 mb-8">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            onClear={() => handleSearchChange('')}
            placeholder="Search by name, category, city, or service..."
          />

          <div className="flex flex-wrap gap-3 items-center">
            <Filters filters={filters} onChange={setFilters} availableOptions={availableOptions} />

            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="name">A-Z</SelectItem>
                  <SelectItem value="verified">Recently Verified</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground ml-auto">
              {filteredResources.length} {filteredResources.length === 1 ? 'result' : 'results'}
            </div>
          </div>
        </div>

        {paginatedResources.length === 0 ? (
          <EmptyState
            title="No resources found"
            description="Try adjusting your search or filters to find what you're looking for."
            actionLabel="Clear Filters"
            onAction={() => {
              setSearchQuery('');
              setFilters({});
              router.push('/resources');
            }}
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource as any} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
