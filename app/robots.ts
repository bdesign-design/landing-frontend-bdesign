import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.bdesign.agency/sitemap.xml',
    host: 'https://www.bdesign.agency',
  };
}
