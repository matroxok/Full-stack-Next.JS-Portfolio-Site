import { Martian_Mono } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type contactInput } from '@/app/contact/schema'
import { useTransition, useState } from 'react'

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
				<div className="flex flex-col justify-center items-center gap-10 w-auto h-auto p-10 border-dashed border-3 border-[#161616]">
					<p className="uppercase font-bold text-4xl">stay in touch</p>
					<div className="w-auto h-auto flex justify-center items-center gap-6">
						<Avatar>
							<AvatarImage src="/assets/contact_avatar.svg" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<p className="text-center font-light border-2 rounded-lg border-[#5A5A5A] p-4">
							Need help? Use the form below or email me at <br />
							<span className="font-semibold">mateusz@matrox.dev</span>
						</p>
					</div>
					<form action="" className="flex flex-col gap-8 items-center w-full max-w-1/2">
						<div className="w-full flex flex-col">
							<div className="flex flex-col gap-1">
								<label className="font-light text-sm text-[#CCC6C6]">Name</label>
								<input
									type="text"
									placeholder="Your Name"
									className="font-light text-sm border-[0.5px] border-[#8D8D8D] rounded-sm py-4 px-4 bg-[#343333]"
								/>
							</div>
						</div>
						<button type="submit" className="bg-green-400 text-black py-4 px-8 rounded-2xl cursor-pointer">
							Send my message
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
