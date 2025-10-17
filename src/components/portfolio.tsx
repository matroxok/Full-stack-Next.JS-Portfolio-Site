import { Martian_Mono } from 'next/font/google'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function Portfolio() {
	return (
		<div>
			<div className="container mx-auto">
				<div className="flex justify-center">
					<div className={`${martianMono.className} flex flex-col items-center`}>
						<p className="font-extralight text-sm italic">
							<span className="text-[#53C1DE]">export</span> function <span className="text-[#F5BD4F]">Contact</span>(){' '}
							{'{'}
						</p>
						<h3 className="font-regular text-2xl">
							return (<span className="text-green-400">Contact Form</span>){'}'}
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}
