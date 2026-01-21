import Link from 'next/link';
import { Phone, Mail, ExternalLink, MapPin, Clock, DollarSign, Users, Languages, Accessibility, CircleAlert as AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './Badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import categoriesData from '@/data/categories.json';

interface Resource {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  address: string;
  city: string;
  hours?: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  cost: string;
  eligibility?: string;
  languages?: string[];
  accessibility?: string[];
  serviceArea?: string[];
  [key: string]: any;
}

interface ResourceDetailProps {
  resource: Resource;
}

export function ResourceDetail({ resource }: ResourceDetailProps) {
  const category = categoriesData.find((c) => c.id === resource.category);

  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Sample resource for demonstration purposes. Please verify all information before use.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-2">
            <CardTitle className="text-3xl">{resource.name}</CardTitle>
            {category && <Badge category={category.name} color={category.color} />}
          </div>
          <p className="text-muted-foreground text-lg">{resource.description}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {resource.contact.phone && (
              <Button size="lg" asChild>
                <a href={`tel:${resource.contact.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            )}
            {resource.contact.website && (
              <Button size="lg" variant="outline" asChild>
                <a
                  href={resource.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </h3>
                <p className="text-sm">{resource.address}</p>
                <p className="text-sm text-muted-foreground">{resource.city}</p>
              </div>

              {resource.hours && (
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Hours
                  </h3>
                  <p className="text-sm">{resource.hours}</p>
                </div>
              )}

              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Cost
                </h3>
                <p className="text-sm">{resource.cost}</p>
              </div>
            </div>

            <div className="space-y-4">
              {resource.contact.phone && (
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </h3>
                  <a
                    href={`tel:${resource.contact.phone}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {resource.contact.phone}
                  </a>
                </div>
              )}

              {resource.contact.email && (
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </h3>
                  <a
                    href={`mailto:${resource.contact.email}`}
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {resource.contact.email}
                  </a>
                </div>
              )}

              {resource.contact.website && (
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    Website
                  </h3>
                  <a
                    href={resource.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {resource.contact.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            {/* TODO: Eligibility temporarily disabled; re-enable after verification pass */}
            {/* <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                Eligibility
              </h3>
              <p className="text-sm">{resource.eligibility}</p>
            </div> */}

            {/* TODO: Service Area temporarily disabled; re-enable after verification pass */}
            {/* <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                Service Area
              </h3>
              <div className="flex flex-wrap gap-2">
                {resource.serviceArea?.map((area) => (
                  <Badge key={area} category={area} />
                ))}
              </div>
            </div> */}

            {/* TODO: Languages temporarily disabled; re-enable after verification pass */}
            {/* <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Languages className="h-5 w-5 text-primary" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {resource.languages?.map((language) => (
                  <Badge key={language} category={language} />
                ))}
              </div>
            </div> */}

            {/* TODO: Accessibility temporarily disabled; re-enable after verification pass */}
            {/* {resource.accessibility && resource.accessibility.length > 0 && (
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <Accessibility className="h-5 w-5 text-primary" />
                  Accessibility
                </h3>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {resource.accessibility.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>

          <div className="border-t pt-6">
            <Button variant="outline" asChild>
              <Link
                href={`/submit?prefill=${encodeURIComponent(
                  JSON.stringify({
                    organizationName: resource.name,
                    type: 'update',
                  })
                )}`}
              >
                Report an Update
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
