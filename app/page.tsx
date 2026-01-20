'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Plus, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchBar } from '@/components/SearchBar';
import { ResourceCard } from '@/components/ResourceCard';
import { Badge } from '@/components/Badge';
import resourcesData from '@/data/resources.json';
import categoriesData from '@/data/categories.json';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredResources = resourcesData.filter((r) => r.featured).slice(0, 3);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/resources?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/resources');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/resources?categories=${categoryId}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-16 py-8">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Find trusted community resources in South Snohomish County
          </h1>
          <p className="text-xl text-muted-foreground">
            Food, housing, health, education, and local support — all in one place.
          </p>
          <p className="text-sm text-muted-foreground">
            Serving Mountlake Terrace, Lynnwood, Edmonds, Everett, and surrounding communities.
          </p>

          <div className="max-w-2xl mx-auto" onKeyPress={handleKeyPress}>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Search for food banks, health clinics, housing..."
              className="text-lg"
            />
            <Button size="lg" className="mt-4 w-full sm:w-auto" onClick={handleSearch}>
              <Search className="h-5 w-5 mr-2" />
              Search Resources
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categoriesData.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="transition-transform hover:scale-105"
            >
              <Badge category={category.name} color={category.color} className="text-base py-2 px-4 cursor-pointer" />
            </button>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource as any} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <List className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Browse All Resources</CardTitle>
              <CardDescription>
                Explore our complete directory of {resourcesData.length}+ community resources with
                advanced search and filters.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/resources">View Directory</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Submit a Resource</CardTitle>
              <CardDescription>
                Know a community resource that should be listed? Help others by submitting it to
                our directory.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/submit">Submit Resource</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
