import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';

import redirects from './redirects.mjs';

const disallowBots = [
  'GPTBot', "Bytespider", "Sogou inst spider", "Sogou web spider", "Baiduspider", 'IonCrawl',
].map((item) => ({
  userAgent: item,
  disallow: "/",
  crawlDelay: 2,

}))
const robotsPolicy = [
  {
    userAgent: 'Googlebot',
    allow: '/',
    disallow: ['/search', '/admin', '/login'],
    crawlDelay: 600,
  },
  {
    userAgent: "barkrowler",
    allow: '/',
    disallow: ['/2012/*', "/archive.html", "/projectsclode"],
    crawDelay: "10080",
  },
  {
    userAgent: '*',
    allow: '/',
    disallow: '/search',
    crawlDelay: 10
  },

].concat(disallowBots);
const robotsConfig = robotsTxt({
  policy: robotsPolicy,
});
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  redirects,
  integrations: [mdx(), sitemap(), tailwind({
    nesting: true,
  }), robotsConfig]
});