export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

export function setupKeyboardShortcuts() {
  if (typeof window === 'undefined') return;

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    if (e.key === '/' || (e.key === 's' && (e.metaKey || e.ctrlKey))) {
      e.preventDefault();
      const searchInput = document.querySelector<HTMLInputElement>('[data-search-input]');
      if (searchInput) {
        searchInput.focus();
        announceToScreenReader('Search focused');
      }
    }

    if (e.key === 'f' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      const filterButton = document.querySelector<HTMLButtonElement>('[data-filter-button]');
      if (filterButton) {
        filterButton.click();
        announceToScreenReader('Filters opened');
      }
    }

    if (e.key === 'Escape') {
      const activeDialog = document.querySelector('[role="dialog"][open]');
      if (activeDialog) {
        const closeButton = activeDialog.querySelector<HTMLButtonElement>('[data-close]');
        if (closeButton) {
          closeButton.click();
        }
      }
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
}

export function getAriaLabel(context: string, value?: string): string {
  const labels: Record<string, string> = {
    search: 'Search community resources',
    filter: 'Open filters',
    close: 'Close',
    menu: 'Main menu',
    skipToMain: 'Skip to main content',
    phone: `Call ${value || 'phone number'}`,
    email: `Email ${value || 'organization'}`,
    website: `Visit ${value || 'website'}`,
  };

  return labels[context] || context;
}
