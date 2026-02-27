import { Martian_Mono } from 'next/font/google'
import { SparklesText } from './ui/sparkles-text'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function Expirience() {
	const date = new Date().getUTCFullYear()
	const expirienceYears = date - 2023
	const t = useTranslations('Experience')

	const LinkedinButton = () => {
		return (
			<Link
				href="https://www.linkedin.com/in/mateusz-kozera-a30566313/"
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center justify-center gap-2 border-2 border-blue-300 lg:border-none rounded-4xl hover:scale-105 transition-all duration-300 lg:border lg:border-transparent hover:border-neutral-400 lg:rounded-md px-4 py-2">
				<p className="hidden lg:inline-block font-semibold text-lg">~</p>
				<Image
					src="/assets/linkedin_logo.svg"
					alt="LinkedIn icon"
					width={40}
					height={40}
					className="transition-colors duration-300 group-hover:bg-blue-500/50 rounded-md p-1"
				/>
				<div className="flex flex-col text-xs lg:text-md font-normal items-center">
					<p>{t('LinkedinButton')}</p>
					<p className="text-blue-300 text-sm lg:text-md font-semibold group-hover:text-blue-500 transition-colors duration-300">
						LinkedIn.
					</p>
				</div>
			</Link>
		)
	}

	return (
		<div id="experience" className="w-full h-auto px-5 lg:px-0 bg-[#171717]">
			<div className="container mx-auto pt-16">
				<div className="flex flex-col">
					<div className="flex justify-end">
						<div className={`${martianMono.className} flex flex-col items-end`}>
							<p className="font-extralight text-xs lg:text-sm italic">cd home/dev/matrox_dev</p>
							<h3 className="font-regular text-md lg:text-2xl text-wrap">
								return (<span className="text-green-400">Skills & Expirience</span>)
							</h3>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start max-w-4xl gap-4 py-16">
						<SparklesText>Expirience</SparklesText>
						<p className="font-light text-sm lg:text-lg text-justify leading-relaxed">
							{t.rich('1', {
								years: expirienceYears,
								highlight: chunks => <span className="text-yellow-500">{chunks}</span>,
							})}
							{/* I&apos;ve been working in the IT industry for over
							<span className="text-yellow-500"> {expirienceYears + ' years'}</span>, constantly developing my skills
							and gaining new experience. */}
							<span className="block my-4"></span>
							{t.rich('2', {
								highlight: chunks => <span className="text-red-300">{chunks}</span>,
							})}
							{/* I&apos;m currently studying at{' '}
							<span className="text-red-300">Wrocław University of Science and Technology</span>, where I continue to
							expand my knowledge in computer science and modern technologies. You can find more details about my
							professional background on my LinkedIn profile. */}
						</p>
						<div className="w-full flex lg:justify-center itens-center mt-5 lg:mt-10">
							<LinkedinButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
