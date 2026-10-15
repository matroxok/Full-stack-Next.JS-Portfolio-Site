import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { IconArrowUpRight } from '@tabler/icons-react'

import { martianMono } from '@/lib/fonts'
import type { PortfolioItem } from '@/data/portfolio'

type Item = PortfolioItem['items'][number]

export default function PortfolioCard({ item }: { item: Item }) {
	const t = useTranslations('Portfolio')
	const tech = (item.tech || '').split(/[,\s]+/).filter(Boolean)
	const description = item.id && t.has(item.id) ? t(item.id) : item.description

	const CardInner = (
		<article className="h-full rounded-2xl p-px bg-linear-to-b from-[#0F294E] to-[#53C1DE]/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_54px_0_rgba(83,193,222,0.18)]">
			<div className="flex h-full flex-col rounded-[15px] bg-[#171717] p-4 lg:p-5">
				<div className="aspect-video relative mb-5 overflow-hidden rounded-xl bg-[#0a0a0a]">
					<Image
						src={item.image || '/assets/projects/matrox_dev_in_progress.png'}
						alt={`${item.title}: ${item.description ?? ''}`}
						fill
						className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
						sizes="(max-width:768px) 100vw, 50vw"
					/>
				</div>

				<header className="mb-3 flex items-start justify-between gap-4">
					<h3 className={`${martianMono.className} text-xl font-semibold leading-tight`}>{item.title}</h3>
					{item.href && (
						<IconArrowUpRight
							aria-hidden="true"
							stroke={1.5}
							className="size-6 shrink-0 text-neutral-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green-400"
						/>
					)}
				</header>

				<p className="text-sm text-neutral-300 leading-relaxed mb-5">{description}</p>

				<ul className="mt-auto flex flex-wrap gap-2" aria-label="Tech stack">
					{tech.map(name => (
						<li
							key={name}
							className={`${martianMono.className} text-[11px] border border-blue-500/60 uppercase rounded-full px-2 py-1`}>
							{name}
						</li>
					))}
				</ul>

				<div className="w-full flex justify-center lg:justify-start">
					{item.href ? (
						<span
							className={`${martianMono.className} mt-6 inline-flex items-center gap-2 text-sm font-medium px-3 py-2 border border-green-400 transition-all duration-200 group-hover:bg-green-500 group-hover:text-black uppercase`}>
							{t('check')}
						</span>
					) : (
						<span className={`${martianMono.className} mt-6 inline-flex items-center gap-2 text-sm text-neutral-400`}>
							{t('soon')}
						</span>
					)}
				</div>
			</div>
		</article>
	)

	return item.href ? (
		<Link className="group block h-full cursor-pointer" href={item.href} target="_blank" rel="noopener noreferrer">
			{CardInner}
		</Link>
	) : (
		<div className="group h-full">{CardInner}</div>
	)
}
