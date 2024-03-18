import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const parser = new MarkdownIt();
export async function GET(context) {
	const posts = (await getCollection('blog')).sort(
		(b, a) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
	).filter((post) => {
		return post.data.is_draft !== true
	})

	return rss({
		version: "2.0",
		xmlns : {
			atom: "http://www.w3.org/2005/Atom",
			content: "http://purl.org/rss/1.0/modules/content/"
		},
		stylesheet: '/rss/styles.xsl',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		customData: '<atom:link href="https:///rss.xml" rel="self" type="application/rss+xml" /><language>en-us</language>',
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			content: sanitizeHtml(parser.render(post.body)),
		})),
	});
}