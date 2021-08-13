# React Meta Tags for SEO optimization

# 1. Introduction

The package introduces a simple way to create and maintain meta tags in React-based application(s).

# 2. Twitter Cards

## 2.1 Summary Card

The Summary Card can be used for many kinds of web content, 
from blog posts and news articles, to products and restaurants.
It is designed to give the reader a preview of the content before
clicking through to your website.

Fields:

* **title**(required): A concise title for the related content.
* **site**: The Twitter @username the card should be attributed to.
* **description**: A description that concisely summarizes the content as appropriate for presentation within a Tweet. 
* **image**: A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card support an aspect ratio of 1:1 with minimum dimensions of 144x144 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. The image will be cropped to a square on all platforms. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
* **imageAlt**: A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.

Usage:

```tsx
import { SummaryCard } from '@peuconomia/react-meta-tags/lib/twitter';

<
  SummaryCard
  title={ 'Small Island Developing States Photo Submission' }
  site={ '@flickr' }
  description={ 'View the album on Flickr.' }
  image = { new URL('https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg') }
  imageALt = {'This is the alt for the image. Max. 420 characters.' }
/>
```
or,

```js
import TwitterMeta from './twitter';
  
  <TwitterMeta.SummaryCard
    title={ 'Small Island Developing States Photo Submission' }
    site={ '@flickr' }
    description={ 'View the album on Flickr.' }
    image = { new URL('https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg') }
    imageALt = {'This is the alt for the image. Max. 420 characters.' }
  />
```

Example output:

```html
<meta name='twitter:card' content='summary' />
<meta name='twitter:site' content='@flickr' />
<meta name='twitter:title' content='Small Island Developing States Photo Submission' />
<meta name='twitter:description' content='View the album on Flickr.' />
<meta name='twitter:image' content='https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg' />
<meta name="twitter:image:alt" content='This is the alt for the image. Max. 420 characters.' />
```

# 3. References

1. [URL Regex](https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url)
2. [NPM Project Preparation Tutorial](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)
3. [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
