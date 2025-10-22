import { ContactButton } from './ui/moving-border'
import { Safari } from './ui/safari'
import './hero.css'
import { PointerHighlight } from '@/components/ui/pointer-highlight'
import Link from 'next/link'

export const CvButton = () => {
	return (
		<ContactButton
			borderRadius="10px"
			showMovingBorder={false}
			className="text-lg bg-green-400 text-white border-none font-bold cursor-pointer">
			My CV
		</ContactButton>
	)
}

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
	return (
		<div className="container px-5 lg:mx-auto flex justify-around items-start mt-24 w-full h-auto">
			<div className="flex flex-col items-center lg:items-start gap-6 w-full h-auto">
				<p className="font-semibold text-center lg:text-start text-sm lg:text-md">
					Hi, I&apos;m Mateusz <br /> <span className="uppercase font-normal">web developer & ui/ux designer</span>
				</p>
				<h1 className="flex flex-col items-center lg:items-start gap-1 text-2xl lg:text-4xl font-semibold text-">
					Your idea, My execution, <br />
					<div className="font-bold tracking-tight">
						<PointerHighlight>
							<span className="uppercase text-5xl px-2 py-6">our succes.</span>
						</PointerHighlight>
					</div>
				</h1>
				<h2 className="text-center text-md lg:text-start max-w-2xl pt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi numquam quam laudantium reprehenderit
					tempora soluta, nulla distinctio ratione animi officiis eveniet et earum, saepe vero dolore reiciendis
					laboriosam placeat explicabo sint?
				</h2>
				<div className="w-full flex justify-around lg:justify-start lg:gap-10 pt-8 lg:mt-2">
					<CvButton />
					<ContactButton
						borderRadius="10px"
						className="text-lg bg-none text-white border-blue-500 font-regular cursor-pointer">
						<Link href="#contact-form">Contact</Link>
					</ContactButton>
				</div>
			</div>

			<div className="hidden lg:block">
				<SafariButton />
			</div>
		</div>
	)
}
