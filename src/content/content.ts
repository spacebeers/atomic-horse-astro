import { z, defineCollection } from 'astro:content';

const workCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    imageAlt: z.string(),
    pubDate: z.string(),
    description: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    imageAlt: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
  }),
});

const serviceCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    imageAlt: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'work': workCollection,
  'blog': blogCollection,
  'service': serviceCollection,
};