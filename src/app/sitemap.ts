import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { HTML_LANG, SITE_URL } from '@/lib/site'

const PAGES = [
	{ path: '', priority: 1 },
	{ path: '/portfolio/ui', priority: 0.8 },
	{ path: '/portfolio/deployments', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
	return PAGES.flatMap(({ path, priority }) => {
		const languages: Record<string, string> = Object.fromEntries(
			routing.locales.map(l => [HTML_LANG[l] ?? l, `${SITE_URL}/${l}${path}`]),
		)
		languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}${path}`

		return routing.locales.map(locale => ({
			url: `${SITE_URL}/${locale}${path}`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: locale === routing.defaultLocale ? priority : priority - 0.1,
			alternates: { languages },
		}))
	})
}
