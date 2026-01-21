'use client';

import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ResourceFilters } from '@/lib/filter';
import categoriesData from '@/data/categories.json';

interface FiltersProps {
  filters: ResourceFilters;
  onChange: (filters: ResourceFilters) => void;
  availableOptions: {
    categories: string[];
    cities: string[];
    serviceAreas?: string[];
    languages?: string[];
    accessibility?: string[];
  };
}

export function Filters({ filters, onChange, availableOptions }: FiltersProps) {
  const handleMultiSelect = (field: keyof ResourceFilters, value: string) => {
    const currentValues = (filters[field] as string[]) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    onChange({ ...filters, [field]: newValues.length > 0 ? newValues : undefined });
  };

  const handleToggle = (field: keyof ResourceFilters) => {
    onChange({ ...filters, [field]: !filters[field] });
  };

  const clearFilters = () => {
    onChange({});
  };

  const activeFilterCount =
    (filters.categories?.length || 0) +
    (filters.cities?.length || 0) +
    (filters.serviceAreas?.length || 0) +
    (filters.openNow ? 1 : 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2" data-filter-button>
          <Filter className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filter Resources</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-120px)] pr-4 mt-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Categories</h3>
                {filters.categories && filters.categories.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onChange({ ...filters, categories: undefined })}
                    className="h-auto py-1 px-2"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                {categoriesData.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={filters.categories?.includes(category.id)}
                      onCheckedChange={() => handleMultiSelect('categories', category.id)}
                    />
                    <Label
                      htmlFor={`category-${category.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Cities</h3>
                {filters.cities && filters.cities.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onChange({ ...filters, cities: undefined })}
                    className="h-auto py-1 px-2"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableOptions.cities.map((city) => (
                  <div key={city} className="flex items-center space-x-2">
                    <Checkbox
                      id={`city-${city}`}
                      checked={filters.cities?.includes(city)}
                      onCheckedChange={() => handleMultiSelect('cities', city)}
                    />
                    <Label htmlFor={`city-${city}`} className="text-sm font-normal cursor-pointer">
                      {city}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Cost</h3>
                {filters.cost && filters.cost.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onChange({ ...filters, cost: undefined })}
                    className="h-auto py-1 px-2"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                {['Free', 'Sliding scale', 'Paid'].map((cost) => (
                  <div key={cost} className="flex items-center space-x-2">
                    <Checkbox
                      id={`cost-${cost}`}
                      checked={filters.cost?.includes(cost)}
                      onCheckedChange={() => handleMultiSelect('cost', cost)}
                    />
                    <Label htmlFor={`cost-${cost}`} className="text-sm font-normal cursor-pointer">
                      {cost}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* TODO: Languages filter temporarily disabled; re-enable after verification pass */}
            {/* <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Languages</h3>
                {filters.languages && filters.languages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onChange({ ...filters, languages: undefined })}
                    className="h-auto py-1 px-2"
                  >
                    Clear
                  </Button>
                )}
              </div>
              <div className="space-y-2">
                {availableOptions.languages?.slice(0, 10).map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language}`}
                      checked={filters.languages?.includes(language)}
                      onCheckedChange={() => handleMultiSelect('languages', language)}
                    />
                    <Label
                      htmlFor={`language-${language}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {language}
                    </Label>
                  </div>
                ))}
              </div>
            </div> */}

            <Separator />

            <div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="open-now"
                  checked={filters.openNow || false}
                  onCheckedChange={() => handleToggle('openNow')}
                />
                <Label htmlFor="open-now" className="text-sm font-semibold cursor-pointer">
                  Open Now
                </Label>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background flex gap-2">
          <SheetClose asChild>
            <Button variant="outline" className="flex-1" onClick={clearFilters}>
              Clear All
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="flex-1">Apply Filters</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
