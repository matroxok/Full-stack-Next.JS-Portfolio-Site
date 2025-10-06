import { Martian_Mono } from 'next/font/google'
import { SparklesText } from './ui/sparkles-text'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export const LinkedinButton = () => {
	return (
		<a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
			<button className="bg-blue-500 text-white py-2 px-4 rounded">LinkedIn</button>
		</a>
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
