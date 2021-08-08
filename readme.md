# React Meta Tags for SEO optimization

# 1. Introduction

The package introduces a simple way to create and maintain meta tags in React-based application(s).

# 2. Twitter Cards

Usage:

```tsx
import { SummaryCard } from './twitter';

<SummaryCard title={} site={} />
```

Example output:

```html

<meta name='twitter:card' content='summary' />
<meta name='twitter:site' content='@flickr' />
<meta name='twitter:title' content='Small Island Developing States Photo Submission' />
<meta name='twitter:description' content='View the album on Flickr.' />
<meta name='twitter:image' content='https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg' />
```

# 3. References

1. [URL Regex](https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url)
2. [NPM Project Preparation Tutorial](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)