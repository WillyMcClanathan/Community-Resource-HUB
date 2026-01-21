import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { validateSubmission, sanitizeInput, sanitizeUrl } from '@/lib/validate';
import { generateSlug, ensureUniqueSlug } from '@/lib/slug';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = validateSubmission(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const submissionsPath = join(process.cwd(), 'data', 'submissions.json');
    const existingData = await readFile(submissionsPath, 'utf-8');
    const submissions = JSON.parse(existingData);

    const existingSlugs = submissions.map((s: any) => s.slug);
    const baseSlug = generateSlug(body.organizationName);
    const slug = ensureUniqueSlug(baseSlug, existingSlugs);

    const submission = {
      id: `submission-${Date.now()}`,
      slug,
      organizationName: sanitizeInput(body.organizationName),
      category: sanitizeInput(body.category),
      description: sanitizeInput(body.description),
      address: sanitizeInput(body.address),
      city: sanitizeInput(body.city),
      serviceArea: body.serviceArea.map((area: string) => sanitizeInput(area)),
      contact: {
        phone: sanitizeInput(body.phone),
        email: sanitizeInput(body.email),
        website: body.website ? sanitizeUrl(body.website) : '',
      },
      cost: sanitizeInput(body.cost),
      eligibility: sanitizeInput(body.eligibility),
      languages: body.languages.map((lang: string) => sanitizeInput(lang)),
      accessibility: body.accessibility.map((feature: string) => sanitizeInput(feature)),
      notes: body.notes ? sanitizeInput(body.notes) : '',
      submitter: {
        name: sanitizeInput(body.submitterName),
        email: sanitizeInput(body.submitterEmail),
      },
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };

    submissions.push(submission);

    await writeFile(submissionsPath, JSON.stringify(submissions, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Submission received successfully',
      submissionId: submission.id,
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process submission. Please try again.',
      },
      { status: 500 }
    );
  }
}
