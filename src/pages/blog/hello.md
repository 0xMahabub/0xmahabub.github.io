---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Author from '../../components/Author.astro'
title: Hello, world!
publishDate: 30 May 2022
name: 0xMahabub
description: Testing md blog in Astrojs
---

<Author name={frontmatter.name} href="https://twitter.com/mahabub__7" client:load />

This is cool!

```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}
```
