import type { MetadataRoute } from 'next'

const baseUrl = 'https://raihan-lail-ramadhan.vercel.app'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'yearly' as const },
    { path: 'about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'projects', priority: 0.5, changeFrequency: 'weekly' as const },
    { path: 'skills', priority: 0.5, changeFrequency: 'weekly' as const }
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))}