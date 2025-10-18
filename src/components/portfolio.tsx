import { Martian_Mono } from 'next/font/google'
import PortfolioCard from './ui/portfolioCard'
import type { PortfolioItem } from '@/lib/portfolio'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['200', '300', '400', '700'],
})

export default function Portfolio({ data }: { data: PortfolioItem[] }) {
	return (
		<div id="portfolio" className="w-full h-auto bg-[#171717]">
			<div className="container mx-auto py-16">
				<div className="flex justify-center">
					<div className={`${martianMono.className} flex flex-col items-center`}>
						<p className="font-extralight text-sm italic">cd home/dev/matrox_dev</p>
						<h3 className="font-regular text-2xl">
							return (<span className="text-green-400">Portfolio</span>)
						</h3>
					</div>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{data.map((group, gi) =>
						group.items.map((item, ii) => {
							// KLUCZ: staramy się, by był stabilny
							const key = `${item.title}-${item.href ?? ii}-${gi}`
							return <PortfolioCard key={key} item={item} />
						})
					)}
				</div>
			</div>
		</div>
	)
}
