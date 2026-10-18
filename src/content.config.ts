import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional(),
    ogImage: z.string().optional(),
    /** Towns this job was in, e.g. ["Wakefield"]. Drives the
        "Recent work in <town>" section on the matching area page.
        Optional — posts without it simply never appear in one. */
    areas: z.array(z.string()).optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
