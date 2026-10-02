import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://roservicecentre24x7.in'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}