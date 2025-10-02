import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
    heroImage: z.string().optional(),
    canonicalUrl: z.string().optional(),
    noIndex: z.boolean().optional(),
    cta: z.string().optional(),
  }),
});

const speaking = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    event: z.string(),
    date: z.date(),
    location: z.string(),
    type: z.enum(['keynote', 'workshop', 'panel', 'interview']),
    topics: z.array(z.string()),
    url: z.string().optional(),
  }),
});

const media = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    source: z.string(),
    date: z.date(),
    type: z.enum(['article', 'podcast', 'video', 'interview']),
    url: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  speaking,
  media,
};
