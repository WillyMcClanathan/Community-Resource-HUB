import Link from 'next/link';
import { Mail } from 'lucide-react';
import siteData from '@/data/site.json';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About Neighborly</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Community Resource Hub
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              Created by
            </p>
            <p className="text-sm font-medium">
              {siteData.chapterName}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Directory
                </Link>
              </li>
              <li>
                <Link href="/highlights" className="text-muted-foreground hover:text-primary transition-colors">
                  Featured Resources
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-muted-foreground hover:text-primary transition-colors">
                  Submit a Resource
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About This Project
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/reference" className="text-muted-foreground hover:text-primary transition-colors">
                  Reference Page
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${siteData.contactEmail}`}
                className="hover:text-primary transition-colors"
              >
                {siteData.contactEmail}
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              TSA Webmaster Event {siteData.year}
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p className="font-medium mb-2">
            Neighborly is a community resource platform created by the {siteData.chapterName} Webmaster Team.
          </p>
          <p className="mb-2">
            &copy; {currentYear} {siteData.chapterName}. Built for WTSA {siteData.year} Webmaster Event.
          </p>
          <p className="text-xs">
            All resource information is provided as-is. Please verify details before visiting.
          </p>
        </div>
      </div>
    </footer>
  );
}
