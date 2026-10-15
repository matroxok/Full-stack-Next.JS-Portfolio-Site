import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { HTML_LANG, KEYWORDS, OG_LOCALE, SITE_NAME, SITE_URL, AUTHOR } from '@/lib/site'

import './globals.css'

type Props = {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

const poppins = Poppins({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '700', '500', '300'],
})

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export const viewport: Viewport = {
	themeColor: '#0a0a0a',
	colorScheme: 'dark',
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'Metadata' })

	const languages: Record<string, string> = Object.fromEntries(
		routing.locales.map(l => [HTML_LANG[l] ?? l, `/${l}`]),
	)
	languages['x-default'] = `/${routing.defaultLocale}`

	return {
		metadataBase: new URL(SITE_URL),
		title: {
			default: t('title'),
			template: `%s | ${SITE_NAME}`,
		},
		description: t('description'),
		keywords: KEYWORDS,
		authors: [{ name: AUTHOR.name, url: SITE_URL }],
		creator: AUTHOR.name,
		applicationName: SITE_NAME,
		alternates: {
			canonical: `/${locale}`,
			languages,
		},
		openGraph: {
			type: 'profile',
			url: `/${locale}`,
			siteName: SITE_NAME,
			title: t('ogTitle'),
			description: t('ogDescription'),
			locale: OG_LOCALE[locale],
			alternateLocale: routing.locales.filter(l => l !== locale).map(l => OG_LOCALE[l]),
			images: [{ url: '/og.jpg', alt: t('ogTitle') }],
			firstName: 'Mateusz',
			lastName: 'Kozera',
			username: 'matroxok',
		},
		twitter: {
			card: 'summary_large_image',
			title: t('ogTitle'),
			description: t('ogDescription'),
			images: ['/og.jpg'],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-image-preview': 'large',
				'max-snippet': -1,
				'max-video-preview': -1,
			},
		},
		icons: {
			icon: '/favicon.ico',
		},
		category: 'technology',
	}
}

export default async function RootLayout({ children, params }: Props) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	setRequestLocale(locale)

	return (
		<html lang={HTML_LANG[locale] ?? locale}>
			<body className={`${poppins.className} bg-[#0a0a0a]`}>
				<NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
