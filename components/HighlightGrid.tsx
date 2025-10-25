import Link from 'next/link';
import { ArrowRight, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './Badge';
import categoriesData from '@/data/categories.json';

interface Resource {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  city: string;
  contact: {
    phone: string;
    website: string;
  };
  eligibility: string;
  [key: string]: any;
}

interface HighlightGridProps {
  resources: Resource[];
}

export function HighlightGrid({ resources }: HighlightGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => {
        const category = categoriesData.find((c) => c.id === resource.category);

        return (
          <Card key={resource.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl mb-2">{resource.name}</CardTitle>
              {category && (
                <Badge category={category.name} color={category.color} className="w-fit" />
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <MapPin className="h-4 w-4" />
                <span>{resource.city}</span>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              <CardDescription className="mb-4 flex-1">
                {resource.description}
              </CardDescription>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold mb-1">How to Access:</h4>
                  <p className="text-sm text-muted-foreground">{resource.eligibility}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {resource.contact.phone && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={`tel:${resource.contact.phone}`}>
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </a>
                    </Button>
                  )}
                  {resource.contact.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={resource.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Website
                      </a>
                    </Button>
                  )}
                </div>

                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href={`/resources/${resource.slug}`}>
                    View Full Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
