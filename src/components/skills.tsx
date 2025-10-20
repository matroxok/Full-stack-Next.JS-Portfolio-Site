import { skills } from '@/data/skills'
import { Martian_Mono } from 'next/font/google'
import Link from 'next/link'
import { Fragment } from 'react'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function Skills() {
	return (
		<div className="w-full h-auto bg-[#171717]">
			<div className="container mx-auto pb-16">
				<div className="relative flex items-baseline w-full">
					<div className="flex-1 h-[2px] bg-[radial-gradient(circle,white_1.2px,transparent_1.2px)] bg-[length:8px_2px] bg-repeat-x translate-y-[0.28em]"></div>
					<span className=" bg-[#171717] text-white font-extrabold tracking-widest text-3xl px-2">SKILLS</span>
				</div>
				<div aria-labelledby="skills-heading" className="w-full">
					<h2 id="skills-heading" className="sr-only">
						Skills
					</h2>
					<ul className="divide-y divide-neutral-700">
						{skills.map((row, i) => (
							<li key={`skill-row-${i}`} className="flex items-start py-4">
								<span
									className={`${martianMono.className} w-fit shrink-0 tabular-nums text-xs text-[#53C1DE] font-extralight`}>
									{String(i + 1).padStart(2, '0')}
								</span>

								<p className="ml-4 text-white font-semibold">
									{row.items.map((item: any, j: number) => {
										const name = typeof item === 'string' ? item : item.name
										const href = typeof item === 'string' ? undefined : item.href

										const node = href ? (
											<Link
												key={`it-${j}`}
												href={href}
												target="_blank"
												rel="noopener noreferrer"
												className=" hover:text-blue-400 transition-colors duration-200 underline-offset-4 hover:underline px-1">
												{name}
											</Link>
										) : (
											<span key={`it-${j}`} className="px-1">
												{name}
											</span>
										)

										return (
											<Fragment key={`frag-${j}`}>
												{node}
												{j < row.items.length - 1 && ', '}
											</Fragment>
										)
									})}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
