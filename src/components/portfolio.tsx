import { useTranslations } from 'next-intl'
import PortfolioCard from './ui/portfolioCard'
import type { PortfolioItem } from '@/data/portfolio'
import { martianMono } from '@/lib/fonts'
import { Reveal } from './ui/reveal'

export default function Portfolio({ data }: { data: PortfolioItem[] }) {
	const t = useTranslations('Portfolio')
	const items = data.flatMap(group => group.items)

	return (
		<section id="portfolio" aria-labelledby="portfolio-heading" className="w-full h-auto scroll-mt-24 bg-[#171717] px-5 lg:px-0">
			<div className="container mx-auto py-16">
				<div className="flex justify-center">
					<div className={`${martianMono.className} flex flex-col items-center`}>
						<p className="font-extralight text-xs lg:text-sm italic">cd home/dev/matrox_dev</p>
						<div className="font-regular text-md lg:text-2xl">
							<span aria-hidden="true">return (</span>
							<h2 id="portfolio-heading" className="inline text-green-400">
								{t('title')}
							</h2>
							<span aria-hidden="true">)</span>
						</div>
					</div>
				</div>
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
