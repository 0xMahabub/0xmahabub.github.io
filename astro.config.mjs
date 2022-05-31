import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import preact from "@astrojs/preact";


// import astroSocialImages from "astro-social-images";
// https://astro.build/config

export default defineConfig({
  site: 'https://0xmahabub.github.io',
  experimental: {
    integrations: true
  },
  integrations: [preact(), tailwind(), svelte(), robotsTxt({
    host: 'https://0xmahabub.github.io',
    sitemap: ['https://0xmahabub.github.io/sitemap.xml' // 'https://0xmahabub.github.io/images-sitemap.xml'
    ],
    policy: [{
      userAgent: 'Googlebot',
      allow: '/',
      disallow: ['/search'],
      crawlDelay: 2
    }, {
      userAgent: 'OtherBot',
      allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
      disallow: [],
      crawlDelay: 2
    }, {
      userAgent: '*',
      allow: '/',
      disallow: '/search',
      crawlDelay: 10,
      cleanParam: ['ref /blog/', 'ref /work/']
    }]
  })]

});