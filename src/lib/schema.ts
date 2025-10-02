import type { CollectionEntry } from 'astro:content';

export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  readingTime: number;
  heroImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  cta?: string;
}

export interface SpeakingEngagement {
  title: string;
  slug: string;
  summary: string;
  event: string;
  date: Date;
  location: string;
  type: 'keynote' | 'workshop' | 'panel' | 'interview';
  topics: string[];
  url?: string;
}

export interface MediaMention {
  title: string;
  slug: string;
  summary: string;
  source: string;
  date: Date;
  type: 'article' | 'podcast' | 'video' | 'interview';
  url?: string;
  featured?: boolean;
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(date);
}

export function sortByDate<T extends { publishedAt?: Date; date?: Date }>(
  items: T[]
): T[] {
  return items.sort((a, b) => {
    const dateA = a.publishedAt || a.date;
    const dateB = b.publishedAt || b.date;
    if (!dateA || !dateB) return 0;
    return dateB.getTime() - dateA.getTime();
  });
}

export function getRelatedPosts(
  currentPost: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[],
  limit = 3
): CollectionEntry<'blog'>[] {
  return allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      score: calculateRelevanceScore(currentPost.data.tags || [], post.data.tags || [])
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

function calculateRelevanceScore(tags1: string[], tags2: string[]): number {
  if (tags1.length === 0 || tags2.length === 0) return 0;
  
  const intersection = tags1.filter(tag => tags2.includes(tag));
  return intersection.length / Math.max(tags1.length, tags2.length);
}

export const NEWSLETTER_URL = 'https://dradrianlaurence.substack.com/';

export const CONTACT_EMAIL = 'hello@dradrianlaurence.com';

export const SOCIAL_LINKS = {
  substack: NEWSLETTER_URL,
  twitter: 'https://twitter.com/dradrianlaurence',
  linkedin: 'https://linkedin.com/in/dradrianlaurence',
  youtube: 'https://youtube.com/@dradrianlaurence',
} as const;
