import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
        loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image(),
			img_alt: z.string().optional(),
		}),
	}),

    article: defineCollection({
        loader: glob({ base: './src/content/article', pattern: '**/*.{md,mdx}' }),
        schema: z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.coerce.date(),
            tags: z.array(z.string()).default([]),
        }),
    }),
    mention: defineCollection({
        loader: glob({ base: './src/content/mention', pattern: '**/*.{md,mdx}' }),
        schema: z.object({
            title: z.string().optional(),
            publishDate: z.coerce.date().optional(),
        }),
    }),
};
