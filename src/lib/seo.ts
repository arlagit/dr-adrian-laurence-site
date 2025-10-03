export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

const siteConfig = {
  site: 'https://dradrianlaurence.com',
  title: 'Dr Adrian Laurence',
  description: 'I help decode the latest science into evidence based blueprints to feel better, live longer and perform today.',
  author: 'Dr Adrian Laurence',
  twitter: '@dradrianlaurence',
};

export function generateSEO({
  title,
  description,
  canonical,
  noIndex = false,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = siteConfig.author,
  tags = [],
}: SEOProps) {
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.title}`;
  const canonicalURL = canonical ? `${siteConfig.site}${canonical}` : undefined;
  const ogImageURL = ogImage.startsWith('http') ? ogImage : `${siteConfig.site}${ogImage}`;

  return {
    title: fullTitle,
    description,
    canonical: canonicalURL,
    noindex: noIndex,
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalURL,
      siteName: siteConfig.title,
      images: [
        {
          url: ogImageURL,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType,
      publishedTime,
      modifiedTime,
      authors: [author],
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: ogImageURL,
      creator: siteConfig.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr Adrian Laurence',
    jobTitle: 'Family Medical and Lifestyle Medicine Doctor',
    description: 'Family Medical and Lifestyle Medicine Doctor helping people with evidence-based lifestyle medicine.',
    url: siteConfig.site,
    sameAs: [
      'https://dradrianlaurence.substack.com/welcome',
      'https://twitter.com/dradrianlaurence',
    ],
    knowsAbout: [
      'Lifestyle Medicine',
      'Men\'s Health',
      'Weight Management',
      'Sleep Medicine',
      'Exercise Medicine',
      'Nutrition',
    ],
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Independent Practice',
    },
  };
}

export function generateBlogPostSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  author = siteConfig.author,
  tags = [],
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${siteConfig.site}${url}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      url: siteConfig.site,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.title,
      url: siteConfig.site,
    },
    keywords: tags.join(', '),
    inLanguage: 'en',
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.site,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.site}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

