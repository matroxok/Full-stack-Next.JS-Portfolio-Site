import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import SubpageShell from '@/components/subpage-shell'
import Portfolio from '@/components/portfolio'
import { portfolio } from '@/data/portfolio'
import { subpageMetadata } from '@/lib/subpage-metadata'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	return subpageMetadata(locale, 'deployments')
}

export default async function DeploymentsPage({ params }: Props) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations({ locale, namespace: 'PortfolioPages.deployments' })

	return (
		<SubpageShell>
			<Portfolio
				data={portfolio}
				headingAs="h1"
				path="cd home/dev/matrox_dev/portfolio/deployments"
				title={t('title')}
				description={t('description')}
			/>
		</SubpageShell>
	)
}
