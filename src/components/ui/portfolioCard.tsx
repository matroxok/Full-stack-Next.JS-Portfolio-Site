import Image from 'next/image'
import Link from 'next/link'

import { Martian_Mono } from 'next/font/google'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

type Item = {
	tech?: string
	title: string
	secondtitle?: string
	description?: string
	image?: string
	href?: string
}

export default function PortfolioCard({ item }: { item: Item }) {
	const tech = (item.tech || '').split(/[,\s]+/).filter(Boolean)

	const CardInner = (
		<article className={`rounded-2xl border p-4 hover:shadow-lg transition hover:scale-105 hover:shadow-white/20`}>
			<div className="aspect-video relative mb-4 overflow-hidden rounded-xl">
				<Image
					src={item.image || ''}
					alt={item.title}
					fill
					className="object-cover"
					sizes="(max-width:768px) 100vw, 33vw"
					priority={false}
				/>
			</div>

			<header className="mb-2">
				<h3 className={`${martianMono.className} text-xl font-semibold leading-tight`}>{item.title}</h3>
				{item.secondtitle && <p className="text-sm text-muted-foreground">{item.secondtitle}</p>}
			</header>

			<p className={`${martianMono.className} text-sm mb-5`}>{item.description}</p>

			<ul className="flex flex-wrap gap-2 mb-4">
				{tech.map(t => (
					<li
						key={t}
						className="text-xs border border-blue-500/60 uppercase rounded-full px-2 py-1 hover:scale-105 transition-all duration-300"
						aria-label={`tech ${t}`}>
						{t}
					</li>
				))}
			</ul>

			{item.href ? (
				<span
					className={`${martianMono.className} mt-5 inline-flex items-center gap-2 text-sm font-medium px-3 py-2 border border-green-400 hover:scale-110 duration-200 transition-all hover:bg-green-500 hover:text-black uppercase`}>
					check
				</span>
			) : (
				<span className={`${martianMono.className} inline-flex items-center gap-2 text-sm text-muted-foreground`}>
					soon
				</span>
			)}
		</article>
	)
	return item.href ? (
		<Link className="cursor-pointer" href={item.href} target="_blank" rel="noopener noreferrer">
			{CardInner}
		</Link>
	) : (
		CardInner
	)
}
