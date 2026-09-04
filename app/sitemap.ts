import {MetadataRoute} from 'next'


export default function sitemap(): MetadataRoute.Sitemap{
    const baseUrl = process?.env.PROJECT_URL || ""

    const publicRoutes = ["/home"]

    const routes: MetadataRoute.Sitemap = publicRoutes.map((route) =>({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily', // Pode ajustar a frequência conforme necessário
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...routes,
    ]
}