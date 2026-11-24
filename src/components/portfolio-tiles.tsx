'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { ArrowUpRight, PenTool, Rocket, Sparkles, type LucideIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import { martianMono } from '@/lib/fonts'
import { TerminalHeading } from './ui/terminal-heading'
import { Reveal } from './ui/reveal'

type Tile = {
	href: '/portfolio/ui' | '/portfolio/deployments'
	path: string
	title: string
	description: string
	count: number
	Icon: LucideIcon
	accent: string
	// What the icon does while the tile is hovered.
	iconHover: Variants['hover']
}

const iconVariants = (hover: Variants['hover']): Variants => ({
	rest: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
	hover,
})

const arrowVariants: Variants = {
	rest: { x: 0, y: 0 },
	hover: { x: 3, y: -3, transition: { type: 'spring', stiffness: 400, damping: 15 } },
}

export default function PortfolioTiles({ uiCount, deploymentsCount }: { uiCount: number; deploymentsCount: number }) {
	const t = useTranslations('PortfolioPages')

	const tiles: Tile[] = [
		{
			href: '/portfolio/ui',
			path: './ui',
			title: t('ui.tileTitle'),
			description: t('ui.tileDescription'),
			count: uiCount,
			Icon: PenTool,
			accent: '#c084fc',
			iconHover: {
				rotate: [0, -18, 14, -8, 0],
				scale: [1, 1.15, 1.15, 1.1, 1.1],
				transition: { duration: 0.7, ease: 'easeInOut' },
			},
		},
		{
			href: '/portfolio/deployments',
			path: './deployments',
			title: t('deployments.tileTitle'),
			description: t('deployments.tileDescription'),
			count: deploymentsCount,
			Icon: Rocket,
			accent: '#4ade80',
			// Launch out of the top-right corner and come back in from the bottom-left.
			iconHover: {
				x: [0, 36, -36, 0],
				y: [0, -36, 36, 0],
				opacity: [1, 0, 0, 1],
				transition: { duration: 0.8, times: [0, 0.4, 0.41, 1], ease: 'easeInOut' },
			},
		},
	]

	return (
		<section id="portfolio" aria-labelledby="portfolio-heading" className="w-full h-auto scroll-mt-24 bg-[#171717] px-5 lg:px-0">
			<div className="container mx-auto py-16">
				<TerminalHeading id="portfolio-heading" path="cd home/dev/matrox_dev/portfolio" title={t('title')} />
				<ul className="grid gap-6 lg:gap-8 md:grid-cols-2 py-16">
					{tiles.map((tile, i) => (
						<Reveal as="li" key={tile.href} delay={i * 0.12} className="h-full">
							<PortfolioTile tile={tile} countLabel={t('projects', { count: tile.count })} cta={t('cta')} />
						</Reveal>
					))}
				</ul>
			</div>
		</section>
	)
}

function PortfolioTile({ tile, countLabel, cta }: { tile: Tile; countLabel: string; cta: string }) {
	const reduce = useReducedMotion()
	const ref = useRef<HTMLDivElement>(null)
	const { Icon, accent } = tile

	// Feeds the cursor position to the spotlight gradient without re-rendering.
	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const el = ref.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		el.style.setProperty('--x', `${e.clientX - rect.left}px`)
		el.style.setProperty('--y', `${e.clientY - rect.top}px`)
	}

	return (
		<Link href={tile.href} className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400">
			<motion.div
				ref={ref}
				onPointerMove={handleMove}
				initial="rest"
				animate="rest"
				whileHover="hover"
				style={{ '--accent': accent } as React.CSSProperties}
				className="relative h-full overflow-hidden rounded-2xl p-px transition-shadow duration-500 group-hover:shadow-[0_0_60px_-10px_var(--accent)]">
				{/* Rotating gradient border */}
				<motion.div
					aria-hidden="true"
					className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
					style={{
						background: `conic-gradient(from 0deg, transparent 0deg, ${accent} 70deg, transparent 140deg, #53C1DE 250deg, transparent 320deg)`,
					}}
					animate={reduce ? undefined : { rotate: 360 }}
					transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
				/>

				<div className="relative flex h-full min-h-72 flex-col overflow-hidden rounded-[15px] bg-[#0f0f0f] p-6 lg:p-8">
					{/* Cursor spotlight */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						style={{
							background: `radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, ${accent} 16%, transparent), transparent 70%)`,
						}}
					/>
					{/* Dotted grid backdrop */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[18px_18px]"
					/>

					<div className="relative flex items-start justify-between gap-4">
						<motion.div
							className="relative flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/3"
							animate={reduce ? undefined : { y: [0, -6, 0] }}
							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
							<span
								aria-hidden="true"
								className="absolute inset-0 rounded-2xl blur-xl opacity-40 transition-opacity duration-500 group-hover:opacity-80"
								style={{ backgroundColor: accent }}
							/>
							<motion.span className="relative" variants={reduce ? undefined : iconVariants(tile.iconHover)}>
								<Icon aria-hidden="true" className="size-8" style={{ color: accent }} strokeWidth={1.6} />
							</motion.span>
							{!reduce && (
								<motion.span
									aria-hidden="true"
									className="absolute -right-2 -top-2"
									animate={{ scale: [0.6, 1, 0.6], opacity: [0.3, 1, 0.3], rotate: [0, 20, 0] }}
									transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
									<Sparkles className="size-4 text-white/80" strokeWidth={1.6} />
								</motion.span>
							)}
						</motion.div>

						<span className={`${martianMono.className} rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase text-neutral-400`}>
							{countLabel}
						</span>
					</div>

					<p className={`${martianMono.className} relative mt-8 text-xs text-neutral-500`}>{tile.path}</p>
					<h3 className={`${martianMono.className} relative mt-1 text-2xl lg:text-3xl font-semibold`}>{tile.title}</h3>
					<p className="relative mt-3 text-sm lg:text-base leading-relaxed text-neutral-300">{tile.description}</p>

					<div className="relative mt-auto pt-8">
					<span
						className={`${martianMono.className} relative inline-flex w-fit items-center gap-2 border px-3 py-2 text-sm font-medium uppercase transition-colors duration-200 group-hover:text-black`}
						style={{ borderColor: accent }}>
						<span
							aria-hidden="true"
							className="absolute inset-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
							style={{ backgroundColor: accent }}
						/>
						<span className="relative">{cta}</span>
						<motion.span className="relative" variants={arrowVariants}>
							<ArrowUpRight aria-hidden="true" className="size-4" />
						</motion.span>
					</span>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}
