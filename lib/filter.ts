export interface ResourceFilters {
  categories?: string[];
  cities?: string[];
  serviceAreas?: string[];
  cost?: string[];
  languages?: string[];
  accessibility?: string[];
  openNow?: boolean;
}

export interface Resource {
  id: string;
  name: string;
  category: string;
  city: string;
  serviceArea: string[];
  cost: string;
  languages: string[];
  accessibility: string[];
  [key: string]: any;
}

export function applyFilters(
  resources: Resource[],
  filters: ResourceFilters
): Resource[] {
  return resources.filter(resource => {
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(resource.category)) {
        return false;
      }
    }

    if (filters.cities && filters.cities.length > 0) {
      if (!filters.cities.includes(resource.city)) {
        return false;
      }
    }

    if (filters.serviceAreas && filters.serviceAreas.length > 0) {
      const hasMatchingArea = filters.serviceAreas.some(area =>
        resource.serviceArea.includes(area)
      );
      if (!hasMatchingArea) {
        return false;
      }
    }

    if (filters.cost && filters.cost.length > 0) {
      const costLower = resource.cost.toLowerCase();
      const matchesCost = filters.cost.some(filterCost => {
        const filterLower = filterCost.toLowerCase();
        if (filterLower === 'free') {
          return costLower.includes('free');
        }
        if (filterLower === 'sliding scale') {
          return costLower.includes('sliding');
        }
        if (filterLower === 'paid') {
          return !costLower.includes('free') && !costLower.includes('sliding');
        }
        return costLower.includes(filterLower);
      });
      if (!matchesCost) {
        return false;
      }
    }

    if (filters.languages && filters.languages.length > 0) {
      const hasMatchingLanguage = filters.languages.every(lang =>
        resource.languages.includes(lang)
      );
      if (!hasMatchingLanguage) {
        return false;
      }
    }

    if (filters.accessibility && filters.accessibility.length > 0) {
      const hasMatchingAccessibility = filters.accessibility.every(feature =>
        resource.accessibility.some(a => a.toLowerCase().includes(feature.toLowerCase()))
      );
      if (!hasMatchingAccessibility) {
        return false;
      }
    }

    return true;
  });
}

export function sortResources(
  resources: Resource[],
  sortBy: 'relevance' | 'name' | 'verified'
): Resource[] {
  const sorted = [...resources];

  switch (sortBy) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'verified':
      sorted.sort((a, b) => {
        const dateA = new Date(a.lastVerified || 0).getTime();
        const dateB = new Date(b.lastVerified || 0).getTime();
        return dateB - dateA;
      });
      break;
    case 'relevance':
    default:
      break;
  }

  return sorted;
}

export function getUniqueValues(
  resources: Resource[],
  field: keyof Resource
): string[] {
  const values = new Set<string>();

  resources.forEach(resource => {
    const value = resource[field];
    if (Array.isArray(value)) {
      value.forEach(v => values.add(v));
    } else if (typeof value === 'string') {
      values.add(value);
    }
  });

  return Array.from(values).sort();
}
