import { useTranslations } from 'next-intl'
import PortfolioCard from './ui/portfolioCard'
import type { PortfolioItem } from '@/data/portfolio'
import { TerminalHeading } from './ui/terminal-heading'
import { Reveal } from './ui/reveal'

type Props = {
	data: PortfolioItem[]
	title?: string
	path?: string
	description?: string
	headingAs?: 'h1' | 'h2'
}

export default function Portfolio({ data, title, path = 'cd home/dev/matrox_dev', description, headingAs }: Props) {
	const t = useTranslations('Portfolio')
	const items = data.flatMap(group => group.items)

	return (
		<section id="portfolio" aria-labelledby="portfolio-heading" className="w-full h-auto scroll-mt-24 bg-[#171717] px-5 lg:px-0">
			<div className="container mx-auto py-16">
				<TerminalHeading
					id="portfolio-heading"
					as={headingAs}
					path={path}
					title={title ?? t('title')}
					description={description}
				/>
				<ul className="grid gap-6 lg:gap-8 md:grid-cols-2 py-16">
					{items.map((item, i) => (
						<Reveal as="li" key={item.id ?? item.title} delay={(i % 2) * 0.1} className="h-full">
							<PortfolioCard item={item} />
						</Reveal>
					))}
				</ul>
			</div>
		</section>
	)
}
