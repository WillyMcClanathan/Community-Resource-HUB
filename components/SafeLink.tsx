import Link from 'next/link';

interface SafeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export function SafeLink({ href, children, className, external, ariaLabel }: SafeLinkProps) {
  const isExternal = external || href.startsWith('http://') || href.startsWith('https://');

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
