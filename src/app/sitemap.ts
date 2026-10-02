import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindsplash.in';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/programs',
    '/programs/ib-myp',
    '/programs/ib-dp',
    '/programs/igcse',
    '/programs/olympiads',
    '/programs/exam-prep',
    '/branches/khajaguda',
    '/branches/kokapet',
    '/branches/financialdistrict',
    '/blog',
    '/blog/ib-myp-eassessment-guide-hyderabad',
    '/blog/igcse-math-physics-study-plan',
    '/blog/ib-dp-aa-vs-ai-math-guide',
    '/blog/olympiad-preparation-strategy-ioqm-amc',
    '/blog/sat-psat-prep-tips-hyderabad',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/programs/') || route.startsWith('/branches/') ? 0.9 : 0.8,
  }));
}
