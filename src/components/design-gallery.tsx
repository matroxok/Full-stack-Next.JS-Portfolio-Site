'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, PenTool, X } from 'lucide-react'

import type { LocalizedDesignItem as DesignItem } from '@/data/designs'
import { martianMono } from '@/lib/fonts'
import { Reveal } from './ui/reveal'

export default function DesignGallery({ designs }: { designs: DesignItem[] }) {
	const t = useTranslations('PortfolioPages.ui')
	const [active, setActive] = useState<DesignItem | null>(null)
	const close = useCallback(() => setActive(null), [])

	if (designs.length === 0) {
		return (
			<div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-4 rounded-2xl border border-dashed border-white/15 p-10 text-center">
				<PenTool aria-hidden="true" className="size-8 text-purple-400" strokeWidth={1.5} />
				<p className={`${martianMono.className} text-sm text-neutral-400`}>{t('empty')}</p>
			</div>
		)
	}

	return (
		<>
			<ul className="grid gap-6 lg:gap-8 md:grid-cols-2 py-16">
				{designs.map((design, i) => {
					const cover = design.cover ?? design.screens[0]?.src
					return (
						<Reveal as="li" key={design.id} delay={(i % 2) * 0.1} className="h-full">
							<button
								type="button"
								onClick={() => setActive(design)}
								disabled={design.screens.length === 0}
								className="group block h-full w-full cursor-pointer rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 disabled:cursor-default">
								<article className="h-full rounded-2xl p-px bg-linear-to-b from-[#2a1650] to-[#c084fc]/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_54px_0_rgba(192,132,252,0.2)]">
									<div className="flex h-full flex-col rounded-[15px] bg-[#0f0f0f] p-4 lg:p-5">
										<div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-[#0a0a0a]">
											{cover ? (
												<Image
													src={cover}
													alt={design.title}
													fill
													className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
													sizes="(max-width:768px) 100vw, 50vw"
												/>
											) : (
												<div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#c084fc33,transparent_60%),radial-gradient(circle_at_80%_80%,#53C1DE33,transparent_60%)]">
													<PenTool aria-hidden="true" className="size-10 text-purple-300/70" strokeWidth={1.3} />
												</div>
											)}
											<span className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
												<span
													className={`${martianMono.className} inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs uppercase text-black`}>
													<Maximize2 aria-hidden="true" className="size-4" />
													{t('open')}
												</span>
											</span>
											{design.screens.length > 1 && (
												<span
													className={`${martianMono.className} absolute right-3 bottom-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] text-neutral-200`}>
													{t('screens', { count: design.screens.length })}
												</span>
											)}
										</div>
										<h3 className={`${martianMono.className} text-xl font-semibold leading-tight`}>{design.title}</h3>
										{design.description && (
											<p className="mt-3 text-sm leading-relaxed text-neutral-300">{design.description}</p>
										)}
										{design.tags && design.tags.length > 0 && (
											<ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Tags">
												{design.tags.map(tag => (
													<li
														key={tag}
														className={`${martianMono.className} rounded-full border border-purple-400/60 px-2 py-1 text-[11px] uppercase`}>
														{tag}
													</li>
												))}
											</ul>
										)}
									</div>
								</article>
							</button>
						</Reveal>
					)
				})}
			</ul>

			<AnimatePresence>{active && <ScreenViewer design={active} onClose={close} />}</AnimatePresence>
		</>
	)
}

function ScreenViewer({ design, onClose }: { design: DesignItem; onClose: () => void }) {
	const t = useTranslations('PortfolioPages.ui')
	const [index, setIndex] = useState(0)
	const scrollRef = useRef<HTMLDivElement>(null)
	const total = design.screens.length
	const screen = design.screens[index]

	const go = useCallback((step: number) => setIndex(i => (i + step + total) % total), [total])

	// Keyboard: Escape closes, arrows switch screens. The page behind the viewer stays locked.
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
			else if (e.key === 'ArrowRight' && total > 1) go(1)
			else if (e.key === 'ArrowLeft' && total > 1) go(-1)
		}
		const { overflow } = document.body.style
		document.body.style.overflow = 'hidden'
		window.addEventListener('keydown', onKey)
		return () => {
			document.body.style.overflow = overflow
			window.removeEventListener('keydown', onKey)
		}
	}, [onClose, go, total])

	// Each new screen starts from the top (matters for tall landing-page exports).
	useEffect(() => {
		scrollRef.current?.scrollTo({ top: 0 })
	}, [index])

	return (
		<motion.div
			role="dialog"
			aria-modal="true"
			aria-label={design.title}
			className="fixed inset-0 z-200 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm lg:p-8"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}>
			<motion.div
				className="flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f]"
				initial={{ scale: 0.96, y: 16 }}
				animate={{ scale: 1, y: 0 }}
				exit={{ scale: 0.96, y: 16 }}
				transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
				onClick={e => e.stopPropagation()}>
				<div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
					<div className="flex min-w-0 items-baseline gap-3">
						<h2 className={`${martianMono.className} truncate text-sm lg:text-base`}>{design.title}</h2>
						{total > 1 && (
							<span className={`${martianMono.className} shrink-0 text-xs text-neutral-500`} aria-live="polite">
								{index + 1} / {total}
							</span>
						)}
					</div>
					<div className="flex items-center gap-2">
						{design.externalUrl && (
							<a
								href={design.externalUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={`${martianMono.className} inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs uppercase text-neutral-300 transition-colors hover:bg-white/10 hover:text-white`}>
								{t('openExternal')}
								<ArrowUpRight aria-hidden="true" className="size-4" />
							</a>
						)}
						<button
							type="button"
							onClick={onClose}
							autoFocus
							aria-label={t('close')}
							className="cursor-pointer rounded-md p-2 text-neutral-300 transition-colors hover:bg-white/10 hover:text-white">
							<X aria-hidden="true" className="size-5" />
						</button>
					</div>
				</div>

				<div className="relative min-h-0 flex-1">
					{/* Scrollable area: wide screens fit the width, tall exports scroll vertically. */}
					<div ref={scrollRef} className="absolute inset-0 overflow-y-auto overscroll-contain">
						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={screen.src}
								className="flex min-h-full items-start justify-center p-3 lg:p-6"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}>
								<Image
									src={screen.src}
									alt={screen.alt}
									width={screen.width}
									height={screen.height}
									sizes="(max-width:1280px) 100vw, 1280px"
									quality={90}
									priority
									className="h-auto w-full max-w-full rounded-lg"
								/>
							</motion.div>
						</AnimatePresence>
					</div>

					{total > 1 && (
						<>
							<NavButton side="left" label={t('prev')} onClick={() => go(-1)} />
							<NavButton side="right" label={t('next')} onClick={() => go(1)} />
						</>
					)}
				</div>

				{total > 1 && (
					<div className="flex gap-2 overflow-x-auto border-t border-white/10 p-3">
						{design.screens.map((s, i) => (
							<button
								key={s.src}
								type="button"
								onClick={() => setIndex(i)}
								aria-label={s.alt}
								aria-current={i === index}
								className={`relative aspect-video w-24 shrink-0 cursor-pointer overflow-hidden rounded-md border transition-all lg:w-28 ${
									i === index ? 'border-purple-400 opacity-100' : 'border-white/10 opacity-50 hover:opacity-90'
								}`}>
								<Image src={s.src} alt="" fill sizes="112px" className="object-cover object-top" />
							</button>
						))}
					</div>
				)}
			</motion.div>
		</motion.div>
	)
}

function NavButton({ side, label, onClick }: { side: 'left' | 'right'; label: string; onClick: () => void }) {
	const Icon = side === 'left' ? ChevronLeft : ChevronRight
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={label}
			className={`absolute top-1/2 -translate-y-1/2 ${side === 'left' ? 'left-3' : 'right-3'} cursor-pointer rounded-full border border-white/10 bg-black/70 p-2 text-neutral-200 backdrop-blur transition-colors hover:bg-black hover:text-white`}>
			<Icon aria-hidden="true" className="size-5" />
		</button>
	)
}
