'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CircleCheck as CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { validateSubmission, type SubmissionData } from '@/lib/validate';
import { toast } from 'sonner';
import categoriesData from '@/data/categories.json';

export default function SubmitPage() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<SubmissionData>({
    organizationName: '',
    category: '',
    description: '',
    address: '',
    city: '',
    serviceArea: [],
    phone: '',
    email: '',
    website: '',
    cost: '',
    eligibility: '',
    languages: [],
    accessibility: [],
    notes: '',
    consent: false,
    submitterName: '',
    submitterEmail: '',
  });

  useEffect(() => {
    setMounted(true);
    const prefill = searchParams.get('prefill');
    if (prefill) {
      try {
        const data = JSON.parse(decodeURIComponent(prefill));
        setFormData((prev) => ({ ...prev, ...data }));
      } catch (e) {
        console.error('Failed to parse prefill data');
      }
    }
  }, [searchParams]);

  const handleChange = (field: keyof SubmissionData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleMultiSelect = (field: 'serviceArea' | 'languages' | 'accessibility', value: string) => {
    setFormData((prev) => {
      const current = prev[field] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateSubmission(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast.success('Submission received! Thank you for contributing.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setErrors(data.errors || {});
        toast.error('Failed to submit. Please check the form.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto" />
          <h1 className="text-3xl font-bold">Submission Received!</h1>
          <p className="text-muted-foreground">
            Thank you for submitting a community resource. Our team will review your submission and
            add it to the directory after verification.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href="/">Return Home</a>
            </Button>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Submit Another
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: 'Submit Resource' }]} />

        <h1 className="text-4xl font-bold mb-2">Submit a Resource</h1>
        <p className="text-muted-foreground mb-8">
          Help others by adding a community resource to our directory. All submissions are reviewed
          before being published.
        </p>

        <Alert className="mb-8">
          <AlertDescription>
            Please provide accurate information. Our team will verify all details before adding the
            resource to the public directory.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Organization Information</CardTitle>
              <CardDescription>Basic details about the resource</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="organizationName">
                  Organization Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={(e) => handleChange('organizationName', e.target.value)}
                  aria-invalid={!!errors.organizationName}
                  aria-describedby={errors.organizationName ? 'organizationName-error' : undefined}
                />
                {errors.organizationName && (
                  <p id="organizationName-error" className="text-sm text-red-500 mt-1" role="alert">
                    {errors.organizationName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="category">
                  Category <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                  <SelectTrigger id="category" aria-invalid={!!errors.category}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoriesData.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  rows={4}
                  placeholder="Describe the services provided and how they help the community..."
                  aria-invalid={!!errors.description}
                />
                {errors.description && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.description}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">
                  Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="123 Main St, Suite 100"
                />
                {errors.address && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.address}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                />
                {errors.city && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <Label>
                  Service Area <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {['Mountlake Terrace', 'Lynnwood', 'Edmonds', 'Brier', 'Woodway', 'All of Snohomish County'].map(
                    (area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox
                          id={`serviceArea-${area}`}
                          checked={formData.serviceArea.includes(area)}
                          onCheckedChange={() => handleMultiSelect('serviceArea', area)}
                        />
                        <Label htmlFor={`serviceArea-${area}`} className="font-normal cursor-pointer">
                          {area}
                        </Label>
                      </div>
                    )
                  )}
                </div>
                {errors.serviceArea && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.serviceArea}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="(425) 555-0000"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="info@example.org"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                  placeholder="https://example.org"
                />
                {errors.website && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.website}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cost">
                  Cost <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="cost"
                  value={formData.cost}
                  onChange={(e) => handleChange('cost', e.target.value)}
                  placeholder="Free, Sliding scale, $50 per visit..."
                />
                {errors.cost && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.cost}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="eligibility">
                  Eligibility <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="eligibility"
                  value={formData.eligibility}
                  onChange={(e) => handleChange('eligibility', e.target.value)}
                  rows={3}
                  placeholder="Open to all, Income guidelines apply, Age 18+..."
                />
                {errors.eligibility && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.eligibility}
                  </p>
                )}
              </div>

              <div>
                <Label>
                  Languages Offered <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {['English', 'Spanish', 'Russian', 'Korean', 'Vietnamese', 'Chinese'].map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Checkbox
                        id={`language-${lang}`}
                        checked={formData.languages.includes(lang)}
                        onCheckedChange={() => handleMultiSelect('languages', lang)}
                      />
                      <Label htmlFor={`language-${lang}`} className="font-normal cursor-pointer">
                        {lang}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.languages && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.languages}
                  </p>
                )}
              </div>

              <div>
                <Label>Accessibility Features</Label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {[
                    'Wheelchair-accessible entrance',
                    'Accessible parking',
                    'Accessible restrooms',
                    'Sign language interpreter available',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={`accessibility-${feature}`}
                        checked={formData.accessibility.includes(feature)}
                        onCheckedChange={() => handleMultiSelect('accessibility', feature)}
                      />
                      <Label htmlFor={`accessibility-${feature}`} className="font-normal cursor-pointer">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  rows={3}
                  placeholder="Any other information that would be helpful..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>We need this to verify the submission</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="submitterName">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="submitterName"
                  value={formData.submitterName}
                  onChange={(e) => handleChange('submitterName', e.target.value)}
                />
                {errors.submitterName && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.submitterName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="submitterEmail">
                  Your Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="submitterEmail"
                  type="email"
                  value={formData.submitterEmail}
                  onChange={(e) => handleChange('submitterEmail', e.target.value)}
                />
                {errors.submitterEmail && (
                  <p className="text-sm text-red-500 mt-1" role="alert">
                    {errors.submitterEmail}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2 pt-4">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange('consent', checked)}
                  aria-invalid={!!errors.consent}
                />
                <Label htmlFor="consent" className="font-normal cursor-pointer leading-tight">
                  I consent to the verification of this information and understand that submissions
                  are reviewed before being published. <span className="text-red-500">*</span>
                </Label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-500 mt-1" role="alert">
                  {errors.consent}
                </p>
              )}
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" size="lg" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Resource
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
