import { getTranslations, setRequestLocale } from 'next-intl/server'

import Home from '@/components/home'
import { AUTHOR, HTML_LANG, SITE_NAME, SITE_URL } from '@/lib/site'

type Props = {
	params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations({ locale, namespace: 'Metadata' })

	const pageUrl = `${SITE_URL}/${locale}`

	const pwr = {
		'@type': 'CollegeOrUniversity',
		name: 'Politechnika Wrocławska',
		alternateName: ['Wrocław University of Science and Technology', 'PWr'],
		url: 'https://pwr.edu.pl',
	}

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${SITE_URL}/#person`,
				name: AUTHOR.name,
				alternateName: AUTHOR.alternateName,
				url: SITE_URL,
				image: `${SITE_URL}/assets/mk_photo.jpeg`,
				email: `mailto:${AUTHOR.email}`,
				jobTitle: 'Full Stack Web Developer & UI/UX Designer',
				description: t('description'),
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Wrocław',
					addressCountry: 'PL',
				},
				alumniOf: pwr,
				knowsAbout: [
					'Web Development',
					'Next.js',
					'React',
					'TypeScript',
					'UI/UX Design',
					'High Performance Computing',
					'HPC',
					'Docker',
					'WCSS',
					'Wrocławskie Centrum Sieciowo-Superkomputerowe',
				],
				sameAs: [AUTHOR.linkedin, AUTHOR.github],
			},
			{
				'@type': 'WebSite',
				'@id': `${SITE_URL}/#website`,
				name: SITE_NAME,
				url: SITE_URL,
				inLanguage: Object.values(HTML_LANG),
				publisher: { '@id': `${SITE_URL}/#person` },
			},
			{
				'@type': 'ProfilePage',
				'@id': `${pageUrl}#profile`,
				url: pageUrl,
				name: t('title'),
				description: t('description'),
				inLanguage: HTML_LANG[locale] ?? locale,
				isPartOf: { '@id': `${SITE_URL}/#website` },
				mainEntity: { '@id': `${SITE_URL}/#person` },
			},
		],
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
			/>
			<Home />
		</>
	)
}
