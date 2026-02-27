import { ContactButton } from './ui/moving-border'
import { Safari } from './ui/safari'
import './hero.css'
import { PointerHighlight } from '@/components/ui/pointer-highlight'
import Link from 'next/link'
import { AuroraText } from './ui/aurora-text'
import { useTranslations } from 'next-intl'

export const SafariButton = () => {
	return (
		<div className="relative w-2xl h-auto rounded-lg p-[2px] bg-gradient-to-b from-[#0F294E] to-[#53C1DE]/80 shadow-[0_0_54.078px_0_rgba(255,255,255,0.07)] hero">
			<Safari
				url="https://matrox.dev"
				className="size-full rounded-[9px] bg-[#0a0a0a] "
				src="/assets/hero_mk_photo.svg"
			/>
		</div>
	)
}

export default function Hero() {
	const t = useTranslations('Hero')

	const CvButton = () => {
		return (
			<ContactButton
				borderRadius="10px"
				showMovingBorder={false}
				className="text-lg bg-green-400 text-white border-none font-bold cursor-pointer">
				{t('buttonCV')}
			</ContactButton>
		)
	}

	return (
		<div className="container px-5 lg:px-0 lg:mx-auto flex justify-around items-start mt-24 w-full h-auto">
			<div className="flex flex-col items-center lg:items-start gap-6 w-full h-auto">
				<p className="font-semibold text-center lg:text-start text-sm lg:text-md">
					{t('hello')} <br />
					<span className="uppercase font-normal">
						<AuroraText>{t('subtitle')}</AuroraText>
					</span>
				</p>
				<h1 className="flex flex-col items-center lg:items-start gap-1 text-2xl lg:text-4xl font-semibold text-">
					{t('title')}
					<br />
					<div className="font-bold tracking-tight">
						<PointerHighlight>
							<span className="uppercase text-5xl px-2 py-6">{t('title2')}</span>
						</PointerHighlight>
					</div>
				</h1>
				<h2 className="text-center text-md text-neutral-300 lg:text-start max-w-2xl pt-2">{t('description')}</h2>
				<div className="w-full flex justify-around lg:justify-start lg:gap-10 pt-8 lg:mt-2">
					<CvButton />
					<ContactButton
						borderRadius="10px"
						className="text-lg bg-none text-white border-blue-500 font-regular cursor-pointer">
						<Link href="#contact-form">{t('buttonContact')}</Link>
					</ContactButton>
				</div>
			</div>

			<div className="hidden lg:block">
				<SafariButton />
			</div>
		</div>
	)
}
