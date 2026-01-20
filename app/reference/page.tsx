import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, CheckCircle } from 'lucide-react';
import { generateMetadata as generateMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateMeta({
  title: 'Reference Page',
  description: 'Sources, citations, copyright information, and compliance documentation for the MTHS Community Resource Hub.',
  url: '/reference',
});

export default function ReferencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={[{ label: 'Reference Page' }]} />

        <h1 className="text-4xl font-bold mb-2">Reference Page</h1>
        <div className="bg-primary/5 border-l-4 border-primary p-4 mb-6">
          <p className="text-sm font-medium">
            This page contains required documentation and development references.
          </p>
        </div>
        <p className="text-muted-foreground mb-8">
          Complete documentation of sources, attributions, copyright information, and compliance materials for this project.
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Sources & Citations</CardTitle>
              <CardDescription>
                Information sources used to create the website content and resource directory
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Resource Data Sources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>211 Snohomish County</strong>
                    <br />
                    Snohomish County Information and Referral Service
                    <br />
                    <a href="https://www.snohomish.211counts.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.snohomish.211counts.org <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Accessed: September 2025
                    <br />
                    Purpose: Category structure, service area definitions, resource types
                  </li>
                  <li>
                    <strong>Verdant Health Commission</strong>
                    <br />
                    Public health services and community programs
                    <br />
                    <a href="https://www.verdanthealth.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.verdanthealth.org <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Accessed: September 2025
                    <br />
                    Purpose: Sample food bank and health service information
                  </li>
                  <li>
                    <strong>Community Transit</strong>
                    <br />
                    Snohomish County public transportation services
                    <br />
                    <a href="https://www.communitytransit.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.communitytransit.org <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Accessed: September 2025
                    <br />
                    Purpose: Transportation service structure and accessibility features
                  </li>
                  <li>
                    <strong>City of Mountlake Terrace Official Website</strong>
                    <br />
                    Municipal government services and programs
                    <br />
                    <a href="https://www.cityofmlt.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.cityofmlt.com <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Accessed: September 2025
                    <br />
                    Purpose: Local community resources and recreation programs
                  </li>
                  <li>
                    <strong>WCAG 2.1 Guidelines</strong>
                    <br />
                    Web Content Accessibility Guidelines, W3C
                    <br />
                    <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.w3.org/WAI/WCAG21/quickref/ <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Accessed: September 2025
                    <br />
                    Purpose: Accessibility standards implementation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technical Documentation</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Next.js Documentation</strong>
                    <br />
                    Vercel, Inc.
                    <br />
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://nextjs.org/docs <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Version: 13.5.1
                    <br />
                    Purpose: Framework implementation and best practices
                  </li>
                  <li>
                    <strong>TypeScript Handbook</strong>
                    <br />
                    Microsoft Corporation
                    <br />
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.typescriptlang.org/docs/ <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Version: 5.2.2
                    <br />
                    Purpose: Type safety and code quality
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media & Attributions</CardTitle>
              <CardDescription>
                Icons, fonts, libraries, and other media assets used in this project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Icon Library</h3>
                <p className="text-sm mb-2">
                  <strong>Lucide Icons</strong> - MIT License
                  <br />
                  <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    https://lucide.dev <ExternalLink className="h-3 w-3" />
                  </a>
                  <br />
                  Version: 0.446.0
                  <br />
                  License: MIT (free for commercial and personal use)
                  <br />
                  Purpose: All interface icons (Search, Phone, Mail, MapPin, etc.)
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Typography</h3>
                <p className="text-sm mb-2">
                  <strong>Inter Font Family</strong> - SIL Open Font License 1.1
                  <br />
                  Designer: Rasmus Andersson
                  <br />
                  <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    https://fonts.google.com/specimen/Inter <ExternalLink className="h-3 w-3" />
                  </a>
                  <br />
                  License: SIL OFL 1.1 (free for commercial and personal use)
                  <br />
                  Purpose: Primary typeface for all text content
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">UI Component Libraries</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Radix UI</strong> - MIT License
                    <br />
                    <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://www.radix-ui.com <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Purpose: Accessible unstyled component primitives (dialogs, dropdowns, checkboxes, etc.)
                  </li>
                  <li>
                    <strong>shadcn/ui</strong> - MIT License
                    <br />
                    <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://ui.shadcn.com <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Purpose: Re-usable components built on Radix UI (buttons, cards, forms, etc.)
                  </li>
                  <li>
                    <strong>TailwindCSS</strong> - MIT License
                    <br />
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      https://tailwindcss.com <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    Version: 3.3.3
                    <br />
                    Purpose: Utility-first CSS framework for styling
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">No External Images</h3>
                <p className="text-sm text-muted-foreground">
                  This website does not use any external images, photographs, or graphics. All visual elements
                  are created using CSS, SVG icons from Lucide (MIT licensed), and typography. No stock photos
                  or copyrighted imagery were used.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Copyright & Permissions</CardTitle>
              <CardDescription>
                Copyright notices and licensing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Original Work Statement</h3>
                <p className="text-sm mb-4">
                  All website content, page layouts, custom components, utility functions, and design elements
                  were created by the Mountlake Terrace High School TSA team specifically for this project.
                  No copyrighted text, images, audio, or video were used without proper licensing or attribution.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Open Source Licenses</h3>
                <p className="text-sm mb-2">
                  All third-party libraries and frameworks used in this project are open source with
                  permissive licenses (MIT, SIL OFL, Apache 2.0) that allow free use in educational and
                  commercial projects:
                </p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Next.js (MIT License)</li>
                  <li>React (MIT License)</li>
                  <li>TypeScript (Apache 2.0 License)</li>
                  <li>TailwindCSS (MIT License)</li>
                  <li>Radix UI (MIT License)</li>
                  <li>Lucide Icons (MIT License)</li>
                  <li>Inter Font (SIL Open Font License 1.1)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Sample Data Disclaimer</h3>
                <p className="text-sm mb-2">
                  The directory contains 12 sample community resource listings created for
                  demonstration purposes. While based on real organizations serving Mountlake Terrace and
                  South Snohomish County, the specific details (hours, contact information, services) are
                  approximations and should be verified independently before use.
                </p>
                <p className="text-sm text-muted-foreground">
                  Organization names and general service descriptions were researched from publicly available
                  information on official websites and 211 Snohomish County. No proprietary or confidential
                  information was used.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  The 12 sample resources include: Verdant Health Commission Food Bank, Community Transit
                  Access Program, Edmonds School District Family Resource Center, YWCA Domestic Violence
                  Services, Recreation Pavilion Senior Center, HealthPoint Community Health Center, Edmonds
                  Library MLT Branch, Northwest Immigration Rights Project, Boys & Girls Clubs, Hopelink
                  Emergency Services, Volunteers of America, and Snohomish County Crisis Line.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Educational Use</h3>
                <p className="text-sm">
                  This website was created as an educational project for the TSA Webmaster Event 2025-26.
                  It is not intended for commercial use. All content is provided for demonstration and
                  educational purposes only.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Required Forms
              </CardTitle>
              <CardDescription>
                TSA Webmaster Event compliance documentation (download PDFs)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Important:</strong> Replace placeholder PDFs with final signed forms before submission.
                Both forms must be completed, signed, and uploaded to fulfill TSA competition requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Student Copyright Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <a href="/pdfs/student-copyright-checklist.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Checklist (PDF)
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Required form documenting copyright compliance and proper attribution
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Work Log</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <a href="/pdfs/willy,_edgar_webmaster_worklog.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Work Log (PDF)
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Required form documenting development hours and team member contributions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template & Theme Statement</CardTitle>
              <CardDescription>
                Framework usage and original design confirmation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Framework Declaration</h3>
                <p className="text-sm mb-4">
                  This website was built using the Next.js framework (version 13.5.1) with TypeScript,
                  TailwindCSS for styling, and shadcn/ui for accessible UI components. These are open-source
                  tools and frameworks, not pre-built website templates or themes.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground pt-4">
            <p>
              This Reference Page was last updated: October 1, 2025
            </p>
            <p className="mt-2">
              For questions or corrections, contact:{' '}
              <a href="mailto:hello@entraidehub.org" className="text-primary hover:underline">
                hello@entraidehub.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
