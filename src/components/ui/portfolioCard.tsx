import Image from 'next/image'
import Link from 'next/link'

type Item = {
	tech: string
	title: string
	secondtitle?: string
	description: string
	image: string
	href?: string
}

export default function PortfolioCard({ item }: { item: Item }) {
	const tech = item.tech.split(/[,\s]+/).filter(Boolean)

	const CardInner = (
		<article className="rounded-2xl border p-4 hover:shadow-lg transition">
			<div className="aspect-[16/9] relative mb-4 overflow-hidden rounded-xl">
				<Image
					src={item.image}
					alt={item.title}
					fill
					className="object-cover"
					sizes="(max-width:768px) 100vw, 33vw"
					priority={false}
				/>
			</div>

			<header className="mb-2">
				<h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
				{item.secondtitle && <p className="text-sm text-muted-foreground">{item.secondtitle}</p>}
			</header>

			<p className="text-sm mb-3">{item.description}</p>

			<ul className="flex flex-wrap gap-2 mb-4">
				{tech.map(t => (
					<li key={t} className="text-xs border rounded-full px-2 py-1" aria-label={`tech ${t}`}>
						{t}
					</li>
				))}
			</ul>

			{item.href ? (
				<span className="inline-flex items-center gap-2 text-sm font-medium underline">Sprawdź</span>
			) : (
				<span className="inline-flex items-center gap-2 text-sm text-muted-foreground">Wkrótce</span>
			)}
		</article>
	)
	return item.href ? (
		<Link href={item.href} target="_blank" rel="noopener noreferrer">
			{CardInner}
		</Link>
	) : (
		CardInner
	)
}
