'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  const maxVisible = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {startPage > 1 && (
        <>
          <Button
            variant={currentPage === 1 ? 'default' : 'outline'}
            onClick={() => onPageChange(1)}
            aria-label="Go to page 1"
            aria-current={currentPage === 1 ? 'page' : undefined}
          >
            1
          </Button>
          {startPage > 2 && <span className="px-2 text-muted-foreground">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'default' : 'outline'}
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-muted-foreground">...</span>}
          <Button
            variant={currentPage === totalPages ? 'default' : 'outline'}
            onClick={() => onPageChange(totalPages)}
            aria-label={`Go to page ${totalPages}`}
            aria-current={currentPage === totalPages ? 'page' : undefined}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
