import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { HTML_LANG, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
	const languages: Record<string, string> = Object.fromEntries(
		routing.locales.map(l => [HTML_LANG[l] ?? l, `${SITE_URL}/${l}`]),
	)
	languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}`

	return routing.locales.map(locale => ({
		url: `${SITE_URL}/${locale}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: locale === routing.defaultLocale ? 1 : 0.9,
		alternates: { languages },
	}))
}
