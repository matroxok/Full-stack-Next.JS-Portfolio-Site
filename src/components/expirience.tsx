import { SparklesText } from './ui/sparkles-text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { martianMono } from '@/lib/fonts'
import { AUTHOR } from '@/lib/site'
import { Reveal } from './ui/reveal'

export default function Expirience() {
	const date = new Date().getUTCFullYear()
	const expirienceYears = date - 2023
	const t = useTranslations('Experience')

	const LinkedinButton = () => {
		return (
			<Link
				href={AUTHOR.linkedin}
				target="_blank"
				rel="noopener noreferrer me"
				className="group flex items-center justify-center gap-2 border-2 border-blue-300 lg:border-none rounded-4xl hover:scale-105 transition-all duration-300 lg:border lg:border-transparent hover:border-neutral-400 lg:rounded-md px-4 py-2">
				<p className="hidden lg:inline-block font-semibold text-lg">~</p>
				<Image
					src="/assets/linkedin_logo.svg"
					alt="LinkedIn"
					width={40}
					height={40}
					className="transition-colors duration-300 group-hover:bg-blue-500/50 rounded-md p-1"
				/>
				<div className="flex flex-col text-xs lg:text-base font-normal items-center">
					<p>{t('LinkedinButton')}</p>
					<p className="text-blue-300 text-sm lg:text-base font-semibold group-hover:text-blue-500 transition-colors duration-300">
						LinkedIn.
					</p>
				</div>
			</Link>
		)
	}

	return (
		<section id="experience" className="w-full h-auto scroll-mt-24 px-5 lg:px-0 bg-[#171717]">
			<div className="container mx-auto pt-16">
				<div className="flex flex-col">
					<div className="flex justify-end">
						<div className={`${martianMono.className} flex flex-col items-end`}>
							<p className="font-extralight text-xs lg:text-sm italic">cd home/dev/matrox_dev</p>
							<p aria-hidden="true" className="font-regular text-md lg:text-2xl text-wrap">
								return (<span className="text-green-400">Skills & Experience</span>)
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,56rem)_1fr] gap-10 lg:gap-16 items-center py-16">
						<Reveal className="flex flex-col justify-start items-start gap-4">
							<h2 className="sr-only">{t('title')}</h2>
							<SparklesText aria-hidden="true">{t('title')}</SparklesText>
							<p className="font-light text-sm lg:text-lg lg:text-justify leading-relaxed">
								{t.rich('1', {
									years: expirienceYears,
									highlight: chunks => <span className="text-yellow-500">{chunks}</span>,
								})}
								<span className="block my-4"></span>
								{t.rich('2', {
									highlight: chunks => <span className="text-red-300">{chunks}</span>,
								})}
							</p>
							<div className="w-full flex lg:justify-center items-center mt-5 lg:mt-10">
								<LinkedinButton />
							</div>
						</Reveal>
						<Reveal delay={0.15} className="hidden lg:flex flex-col items-center justify-self-center">
							<p
								className={`${martianMono.className} text-[7rem] leading-none font-bold tracking-tighter text-yellow-500 tabular-nums`}>
								{expirienceYears}+
							</p>
							<p className={`${martianMono.className} mt-3 text-sm text-neutral-400 lowercase`}>
								{t('yearsLabel')}
							</p>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}
