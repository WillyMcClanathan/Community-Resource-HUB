export interface PageView {
  path: string;
  timestamp: number;
}

const STORAGE_KEY = 'mths_pageviews';
const MAX_STORED_VIEWS = 1000;

export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;

  try {
    const views = getStoredViews();
    views.push({
      path,
      timestamp: Date.now(),
    });

    if (views.length > MAX_STORED_VIEWS) {
      views.splice(0, views.length - MAX_STORED_VIEWS);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}

export function getStoredViews(): PageView[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function getPageViewCount(path?: string): number {
  const views = getStoredViews();

  if (path) {
    return views.filter(v => v.path === path).length;
  }

  return views.length;
}

export function getTopPages(limit: number = 10): { path: string; count: number }[] {
  const views = getStoredViews();
  const counts = new Map<string, number>();

  views.forEach(view => {
    counts.set(view.path, (counts.get(view.path) || 0) + 1);
  });

  return Array.from(counts.entries())
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function clearAnalytics() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
