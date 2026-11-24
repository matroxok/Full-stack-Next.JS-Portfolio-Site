import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { routing } from '@/i18n/routing'
import { HTML_LANG, OG_LOCALE } from '@/lib/site'

// Metadata for a localized subpage; title/description come from PortfolioPages.<section>.
export async function subpageMetadata(locale: string, section: 'ui' | 'deployments'): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: `PortfolioPages.${section}` })
	const path = `/portfolio/${section}`

	const languages: Record<string, string> = Object.fromEntries(
		routing.locales.map(l => [HTML_LANG[l] ?? l, `/${l}${path}`]),
	)
	languages['x-default'] = `/${routing.defaultLocale}${path}`

	return {
		title: t('metaTitle'),
		description: t('metaDescription'),
		alternates: { canonical: `/${locale}${path}`, languages },
		openGraph: {
			url: `/${locale}${path}`,
			title: t('metaTitle'),
			description: t('metaDescription'),
			locale: OG_LOCALE[locale],
			images: [{ url: '/og.jpg', alt: t('metaTitle') }],
		},
	}
}
