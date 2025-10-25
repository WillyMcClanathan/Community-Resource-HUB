export interface SearchableResource {
  id: string;
  name: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  city: string;
  serviceArea: string[];
  [key: string]: any;
}

export interface SearchWeights {
  name: number;
  tags: number;
  description: number;
  city: number;
  category: number;
}

const DEFAULT_WEIGHTS: SearchWeights = {
  name: 3,
  tags: 2,
  description: 1,
  city: 1.5,
  category: 1.5,
};

function normalizeString(str: string): string {
  return str.toLowerCase().trim();
}

function calculateFuzzyScore(search: string, target: string): number {
  const searchLower = normalizeString(search);
  const targetLower = normalizeString(target);

  if (targetLower === searchLower) return 1;
  if (targetLower.includes(searchLower)) return 0.8;

  let matches = 0;
  let searchPos = 0;

  for (let i = 0; i < targetLower.length && searchPos < searchLower.length; i++) {
    if (targetLower[i] === searchLower[searchPos]) {
      matches++;
      searchPos++;
    }
  }

  if (matches === searchLower.length) {
    return 0.5;
  }

  const wordMatch = targetLower.split(/\s+/).some(word =>
    word.startsWith(searchLower) || searchLower.startsWith(word)
  );

  if (wordMatch) return 0.6;

  return 0;
}

export function searchResources(
  resources: SearchableResource[],
  query: string,
  weights: SearchWeights = DEFAULT_WEIGHTS
): SearchableResource[] {
  if (!query || query.trim().length === 0) {
    return resources;
  }

  const searchTerms = normalizeString(query).split(/\s+/);

  const scored = resources.map(resource => {
    let score = 0;

    searchTerms.forEach(term => {
      score += calculateFuzzyScore(term, resource.name) * weights.name;

      resource.tags.forEach(tag => {
        score += calculateFuzzyScore(term, tag) * weights.tags;
      });

      score += calculateFuzzyScore(term, resource.description) * weights.description;
      score += calculateFuzzyScore(term, resource.city) * weights.city;
      score += calculateFuzzyScore(term, resource.category) * weights.category;

      resource.serviceArea.forEach(area => {
        score += calculateFuzzyScore(term, area) * weights.city;
      });
    });

    return { resource, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.resource);
}

export function highlightMatches(text: string, query: string): string {
  if (!query || query.trim().length === 0) return text;

  const searchTerms = normalizeString(query).split(/\s+/);
  let highlighted = text;

  searchTerms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    highlighted = highlighted.replace(regex, '<mark>$1</mark>');
  });

  return highlighted;
}
