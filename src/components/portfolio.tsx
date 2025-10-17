import { Martian_Mono } from 'next/font/google'
import { EvervaultCard, Icon } from './ui/evervault-card'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['200', '300', '400', '700'],
})

export default function Portfolio() {
	return (
		<div id="portfolio" className="w-full h-auto bg-[#171717]">
			<div className="container mx-auto py-16">
				<div className="flex justify-center">
					<div className={`${martianMono.className} flex flex-col items-center`}>
						<p className="font-extralight text-sm italic">cd home/dev/matrox_dev</p>
						<h3 className="font-regular text-2xl">
							return (<span className="text-green-400">Portfolio</span>)
						</h3>
					</div>
				</div>
				<div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
					<Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
					<Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
					<Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
					<Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
				</div>
			</div>
		</div>
	)
}
