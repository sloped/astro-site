import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().refine((img) => img.width >= 1080, {
				message: "Cover image must be at least 1080 pixels wide!",
			  }).optional(),
			tags: z.array(z.string()).optional(),
			is_draft: z.boolean().default(false)
		}),
	
});

// const diary = defineCollection({
// 	type: 'content',
// 	// Type-check frontmatter using a schema
// 	schema: ({image}) => z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			// Transform string to Date object
// 			pubDate: z.coerce.date(),
// 			updatedDate: z.coerce.date().optional(),
// 			heroImage: image().refine((img) => img.width >= 1080, {
// 				message: "Cover image must be at least 1080 pixels wide!",
// 			  }).optional(),
// 			tags: z.array(z.string()).optional(),
// 			is_draft: z.boolean().default(false)
// 		}),
	
// });

const pages = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().refine((img) => img.width >= 1080, {
			message: "Cover image must be at least 1080 pixels wide!",
		  }).optional(),
	}),
});
export const collections = { blog, pages };
