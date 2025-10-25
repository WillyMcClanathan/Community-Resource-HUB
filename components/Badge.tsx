import { Badge as ShadcnBadge } from '@/components/ui/badge';

interface CategoryBadgeProps {
  category: string;
  color?: string;
  className?: string;
}

export function Badge({ category, color, className = '' }: CategoryBadgeProps) {
  const style = color ? { backgroundColor: color, color: '#ffffff' } : undefined;

  return (
    <ShadcnBadge
      variant="secondary"
      style={style}
      className={`${className}`}
    >
      {category}
    </ShadcnBadge>
  );
}
