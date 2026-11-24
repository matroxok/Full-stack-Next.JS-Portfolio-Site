import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import SubpageShell from '@/components/subpage-shell'
import DesignGallery from '@/components/design-gallery'
import { TerminalHeading } from '@/components/ui/terminal-heading'
import { designs, type LocalizedDesignItem } from '@/data/designs'
import { subpageMetadata } from '@/lib/subpage-metadata'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	return subpageMetadata(locale, 'ui')
}

export default async function UIPage({ params }: Props) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations({ locale, namespace: 'PortfolioPages.ui' })

	// Texts live in messages/*.json under PortfolioPages.ui.items.<id>; a missing key falls back to the title.
	const localized: LocalizedDesignItem[] = designs.map(design => {
		const base = `items.${design.id}`
		return {
			...design,
			description: t.has(`${base}.description`) ? t(`${base}.description`) : undefined,
			screens: design.screens.map(screen => ({
				...screen,
				alt: t.has(`${base}.screens.${screen.key}`) ? t(`${base}.screens.${screen.key}`) : design.title,
			})),
		}
	})

	return (
		<SubpageShell>
			<section aria-labelledby="ui-heading" className="px-5 lg:px-0">
				<div className="container mx-auto py-16">
					<TerminalHeading
						as="h1"
						id="ui-heading"
						path="cd home/dev/matrox_dev/portfolio/ui"
						title={t('title')}
						description={t('description')}
					/>
					<DesignGallery designs={localized} />
				</div>
			</section>
		</SubpageShell>
	)
}
