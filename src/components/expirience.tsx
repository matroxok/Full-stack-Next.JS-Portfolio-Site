import { Martian_Mono } from 'next/font/google'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function Expirience() {
	return (
		<div className="w-full h-auto bg-[#171717]">
			<div className="container mx-auto py-16">
				<div className="flex flex-col">
					<div className="flex justify-end">
						<div className={`${martianMono.className} flex flex-col`}>
							<p className="font-extralight text-sm italic">cd home/dev/matrox_dev</p>
							<h3 className="font-regular text-2xl">
								return (<span className="text-green-400">AboutMe</span>)
							</h3>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start max-w-4xl gap-4">
						<h3 className="text-2xl font-bold text-center mb-10">Expirience</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptate nostrum perspiciatis
							voluptatem, voluptatum eos sed vitae illo eligendi ut, exercitationem consequatur ex iure repudiandae,
							magnam dolor eum minima a ipsum aut molestias. Necessitatibus cumque sed soluta, id animi et mollitia
							commodi eveniet exercitationem rerum nihil quod libero autem dignissimos, explicabo inventore aperiam
							laudantium natus? Quod veniam magni nemo error. Facere voluptate suscipit quia!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
