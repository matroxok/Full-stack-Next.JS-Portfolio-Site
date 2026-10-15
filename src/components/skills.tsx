import { skills } from '@/data/skills'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { martianMono } from '@/lib/fonts'
import { Reveal } from './ui/reveal'

export default function Skills() {
	const t = useTranslations('Skills')

	return (
		<section id="skills" aria-labelledby="skills-heading" className="w-full h-auto bg-[#171717] px-5 lg:px-0 pt-10 lg:pt-0">
			<div className="container mx-auto pb-16">
				<div className="relative flex items-baseline w-full">
					<div className="flex-1 h-[2px] bg-[radial-gradient(circle,white_1.2px,transparent_1.2px)] bg-[length:8px_2px] bg-repeat-x translate-y-[0.28em]"></div>
					<h2
						id="skills-heading"
						className="bg-[#171717] text-white font-extrabold tracking-widest text-3xl px-2 uppercase">
						{t('title')}
					</h2>
				</div>
				<ul className="divide-y divide-neutral-800 pt-10 lg:pt-6">
					{skills.map((row, i) => {
						const learning = row.category === 'learning'
						return (
							<Reveal
								as="li"
								delay={i * 0.05}
								key={row.category}
								className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_14rem_1fr] gap-x-4 gap-y-3 items-start py-5">
								<span
									className={`${martianMono.className} pt-1.5 tabular-nums text-xs text-[#53C1DE] font-extralight`}>
									{String(i + 1).padStart(2, '0')}
								</span>
								<h3
									className={`${martianMono.className} pt-1 text-sm text-neutral-400 lowercase ${learning ? 'italic' : ''}`}>
									{t(row.category)}
								</h3>
								<ul className="col-span-2 md:col-span-1 flex flex-wrap gap-2">
									{row.items.map(item => {
										const chip = `inline-flex items-center rounded-full border px-3 py-1 text-sm text-white transition-all duration-200 ${
											learning ? 'border-dashed border-neutral-600' : 'border-neutral-700'
										}`
										return (
											<li key={item.name}>
												{item.href ? (
													<Link
														href={item.href}
														target="_blank"
														rel="noopener noreferrer"
														className={`${chip} hover:-translate-y-0.5 hover:border-[#53C1DE] hover:text-[#53C1DE] hover:shadow-[0_0_18px_0_rgba(83,193,222,0.25)]`}>
														{item.name}
													</Link>
												) : (
													<span className={chip}>{item.name}</span>
												)}
											</li>
										)
									})}
								</ul>
							</Reveal>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
