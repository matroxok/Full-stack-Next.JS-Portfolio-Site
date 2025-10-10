import { Martian_Mono } from 'next/font/google'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function ContactForm() {
	return (
		<div className="w-full h-auto bg-[linear-gradient(180deg,#0A0A0A_0%,rgba(255,255,255,0.01)_2411.5%)]">
			<div className="container mx-auto py-16">
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
				<div className="flex flex-col justify-center items-center w-auto h-auto p-10 border-dashed border-3 border-[#161616]">
					<p className="uppercase font-bold text-4xl">be in contact</p>
				</div>
			</div>
		</div>
	)
}
