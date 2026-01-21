import Link from 'next/link';
import { MapPin, DollarSign, Phone, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './Badge';
import categoriesData from '@/data/categories.json';

interface Resource {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  city: string;
  cost: string;
  contact: {
    phone: string;
    website: string;
  };
  featured?: boolean;
}

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const category = categoriesData.find((c) => c.id === resource.category);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-lg line-clamp-2">
            <Link
              href={`/resources/${resource.slug}`}
              className="hover:text-primary transition-colors"
            >
              {resource.name}
            </Link>
          </CardTitle>
          {resource.featured && (
            <Badge category="Featured" color="#f59e0b" className="shrink-0" />
          )}
        </div>
        {category && (
          <Badge category={category.name} color={category.color} className="w-fit" />
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <CardDescription className="line-clamp-3">
          {resource.description}
        </CardDescription>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{resource.city}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{resource.cost}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          {resource.contact.phone && (
            <a
              href={`tel:${resource.contact.phone}`}
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              aria-label={`Call ${resource.name}`}
            >
              <Phone className="h-3 w-3" />
              Call
            </a>
          )}
          {resource.contact.website && (
            <a
              href={resource.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              aria-label={`Visit ${resource.name} website`}
            >
              <ExternalLink className="h-3 w-3" />
              Website
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
