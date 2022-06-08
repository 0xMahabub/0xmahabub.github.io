---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Author from '../../components/Author.astro'
title: More HTML, less JavaScript. Static Site Generation with Astro!
publishDate: 31 May 2022
name: 0xMahabub
heroImage: https://www.datocms-assets.com/48401/1638296498-astro-banner.jpeg?fit=max&w=900
description: Astro is a new JavaScript based framework and builder tool! It helps you to bring your own framework with shipless JavaScript.
---

<Author name={frontmatter.name} href="https://twitter.com/mahabub__7" client:load />

### Static Site Generator that makes more Html and less JavaScript.

Astro is a new JavaScript based framework and builder tool! It helps you to bring your own framework with shipless JavaScript.

<br />

```
# create a new project with npm
npm create astro@latest

# or yarn

yarn create astro

# or npm

pnpm create astro@latest

```
