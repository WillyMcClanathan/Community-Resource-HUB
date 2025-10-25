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
  hours: string;
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

    if (filters.openNow === true) {
      if (!isOpenNow(resource.hours)) {
        return false;
      }
    }

    return true;
  });
}

export function isOpenNow(hoursString: string): boolean {
  if (!hoursString || hoursString.toLowerCase().includes('24/7')) {
    return true;
  }

  const now = new Date();
  const timeZone = 'America/Los_Angeles';
  const localTime = new Date(now.toLocaleString('en-US', { timeZone }));

  const dayOfWeek = localTime.getDay();
  const currentHour = localTime.getHours();
  const currentMinute = localTime.getMinutes();
  const currentTimeMinutes = currentHour * 60 + currentMinute;

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = dayNames[dayOfWeek];

  const dayPattern = new RegExp(`${currentDay}[^\\d]*(\\d{1,2})(?::(\\d{2}))?(am|pm)?\\s*[-–—]\\s*(\\d{1,2})(?::(\\d{2}))?(am|pm)?`, 'i');
  const rangePattern = /([A-Za-z]{3})\s*[-–—]\s*([A-Za-z]{3})[^\d]*(\\d{1,2})(?::(\\d{2}))?(am|pm)?\\s*[-–—]\\s*(\\d{1,2})(?::(\\d{2}))?(am|pm)?/gi;

  let match = dayPattern.exec(hoursString);
  if (match) {
    const openTime = parseTime(match[1], match[2] || '0', match[3]);
    const closeTime = parseTime(match[4], match[5] || '0', match[6]);
    return currentTimeMinutes >= openTime && currentTimeMinutes <= closeTime;
  }

  let rangeMatch;
  while ((rangeMatch = rangePattern.exec(hoursString)) !== null) {
    const startDay = rangeMatch[1];
    const endDay = rangeMatch[2];
    const startDayIndex = dayNames.indexOf(startDay);
    const endDayIndex = dayNames.indexOf(endDay);

    if (startDayIndex !== -1 && endDayIndex !== -1) {
      const isInRange = startDayIndex <= endDayIndex
        ? dayOfWeek >= startDayIndex && dayOfWeek <= endDayIndex
        : dayOfWeek >= startDayIndex || dayOfWeek <= endDayIndex;

      if (isInRange) {
        const openTime = parseTime(rangeMatch[3], rangeMatch[4] || '0', rangeMatch[5]);
        const closeTime = parseTime(rangeMatch[6], rangeMatch[7] || '0', rangeMatch[8]);
        return currentTimeMinutes >= openTime && currentTimeMinutes <= closeTime;
      }
    }
  }

  return false;
}

function parseTime(hour: string, minute: string, period?: string): number {
  let h = parseInt(hour, 10);
  const m = parseInt(minute, 10);

  if (period) {
    const isPM = period.toLowerCase() === 'pm';
    if (isPM && h !== 12) h += 12;
    if (!isPM && h === 12) h = 0;
  }

  return h * 60 + m;
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
