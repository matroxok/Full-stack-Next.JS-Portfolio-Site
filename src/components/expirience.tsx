import { Martian_Mono } from 'next/font/google'
import { SparklesText } from './ui/sparkles-text'
import Image from 'next/image'
import Link from 'next/link'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export const LinkedinButton = () => {
	return (
		<Link
			href="https://www.linkedin.com/in/mateusz-kozera-a30566313/"
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 border border-transparent hover:border-neutral-400 rounded-md px-4 py-2">
			<p className="font-semibold text-lg">~</p>
			<Image
				src="/assets/linkedin_logo.svg"
				alt="LinkedIn icon"
				width={40}
				height={40}
				className="transition-colors duration-300 group-hover:bg-blue-500/50 rounded-md p-1"
			/>
			<div className="flex flex-col font-normal items-center">
				<p>Detailed information on my</p>
				<p className="text-blue-300 font-semibold group-hover:text-blue-500 transition-colors duration-300">
					LinkedIn.
				</p>
			</div>
		</Link>
	)
}

export default function Expirience() {
	return (
		<div className="w-full h-auto bg-[#171717]">
			<div className="container mx-auto py-16">
				<div className="flex flex-col">
					<div className="flex justify-end">
						<div className={`${martianMono.className} flex flex-col items-end`}>
							<p className="font-extralight text-sm italic">cd home/dev/matrox_dev</p>
							<h3 className="font-regular text-2xl">
								return (<span className="text-green-400">Skills & Expirience</span>)
							</h3>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start max-w-4xl gap-4 py-16">
						<SparklesText>Expirience</SparklesText>
						{/* <h3 className="text-3xl font-bold text-center">Expirience</h3> */}
						<p className="font-light">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptate nostrum perspiciatis
							voluptatem, voluptatum eos sed vitae illo eligendi ut, exercitationem consequatur ex iure repudiandae,
							magnam dolor eum minima a ipsum aut molestias. Necessitatibus cumque sed soluta, id animi et mollitia
							commodi eveniet exercitationem rerum nihil quod libero autem dignissimos, explicabo inventore aperiam
							laudantium natus? Quod veniam magni nemo error. Facere voluptate suscipit quia!
						</p>
						<div className="w-full flex justify-center itens-center mt-10">
							<LinkedinButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
