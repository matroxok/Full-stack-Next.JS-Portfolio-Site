import { Martian_Mono } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type contactInput } from '@/app/contact/schema'
import { useTransition, useState } from 'react'

interface ContactFormProps {
	onSuccess: () => void
	onError?: (error: string) => void
}

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
	const [pending, startTransition] = useTransition()
	const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<contactInput>({
		resolver: zodResolver(contactSchema),
		defaultValues: { name: '', email: '', message: '' },
		mode: 'onTouched',
	})

	const onSubmit = (data: contactInput) => {
		setStatus(null)
		startTransition(async () => {
			try {
				const res = await fetch('/api/send', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				})

				if (!res.ok) {
					const body = await res.json().catch(() => ({}))
					throw new Error(body?.error ?? `HTTP ${res.status}`)
				}
				reset()
				// setStatus({ ok: true, msg: 'Wiadomość wysłana. Dzięki! ✉️' })
				onSuccess()
			} catch (err: unknown) {
				// setStatus({ ok: false, msg: err?.message ?? 'Nie udało się wysłać.' })
				if (err instanceof Error) {
					onError?.(err.message)
				} else {
					onError?.('Nie udało się wysłać.')
				}
			}
		})
	}

	return (
		<div
			id="contact-form"
			className="w-full h-auto bg-[linear-gradient(180deg,#0A0A0A_0%,rgba(255,255,255,0.01)_2411.5%)] px-5 lg:px-0">
			<div className="container mx-auto py-16">
				<div className="flex justify-center pb-8 ">
					<div className={`${martianMono.className} flex flex-col items-center`}>
						<p className="font-extralight text-xs lg:text-sm italic">
							<span className="text-[#53C1DE]">export</span> function <span className="text-[#F5BD4F]">Contact</span>(){' '}
							{'{'}
						</p>
						<h3 className="font-regular text-md lg:text-2xl">
							return (<span className="text-green-400">Contact Form</span>){'}'}
						</h3>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-10 w-auto h-auto lg:p-10 border-dashed border-3 border-[#161616]">
					<p className="uppercase font-bold text-xl lg:text-4xl">stay in touch</p>

					<div className="w-auto h-auto flex justify-between lg:justify-center items-center lg:gap-6">
						<Avatar>
							<AvatarImage src="/assets/contact_avatar.svg" className="w-16 lg:w-20 h-auto" />
							<AvatarFallback>matrox.dev</AvatarFallback>
						</Avatar>
						<p className="lg:text-center font-light text-xs lg:text-md lg:border-2 rounded-lg border-[#5A5A5A] p-4">
							Need help?{' '}
							<span className="lg:hidden">
								<br />
							</span>{' '}
							Use the form below or email me at <br />
							<span className="font-semibold block lg:inline-block mt-2 lg:mt-0">mateusz.kozera@matrox.dev</span>
						</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-8 items-center w-full lg:max-w-2xl"
						noValidate>
						<input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
						<div className="w-full flex flex-col">
							<div className="flex flex-col gap-1">
								<label className="font-light text-sm text-[#CCC6C6]" htmlFor="name">
									Name
								</label>
								<input
									id="name"
									type="text"
									placeholder="Your name"
									{...register('name')}
									aria-invalid={!!errors.name}
									className="font-light text-sm border-[0.5px] border-[#8D8D8D] rounded-sm py-4 px-4 bg-[#343333] outline-none focus:border-blue-400/40 transition-colors duration-200"
								/>
								{errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
							</div>
						</div>
						<div className="w-full flex flex-col">
							<div className="flex flex-col gap-1">
								<label className="font-light text-sm text-[#CCC6C6]" htmlFor="email">
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="you@domain.com"
									{...register('email')}
									aria-invalid={!!errors.email}
									className="font-light text-sm border-[0.5px] border-[#8D8D8D] rounded-sm py-4 px-4 bg-[#343333] outline-none focus:border-blue-400/40 transition-colors duration-200"
								/>
								{errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
							</div>
						</div>
						<div className="w-full flex flex-col">
							<div className="flex flex-col gap-1">
								<label className="font-light text-sm text-[#CCC6C6]" htmlFor="message">
									Message
								</label>
								<textarea
									id="message"
									placeholder="Your message..."
									{...register('message')}
									aria-invalid={!!errors.message}
									className="w-full min-h-44 resize-none text-start font-light text-sm border-[0.5px] border-[#8D8D8D] rounded-sm py-3 px-4 bg-[#343333] outline-none focus:border-blue-400/40 transition-colors duration-200 leading-relaxed placeholder:text-[#8D8D8D]"
								/>
								{errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
							</div>
						</div>
						<button
							type="submit"
							disabled={pending}
							className="bg-green-400 text-black py-4 px-8 rounded-2xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
							{pending ? 'Sending…' : 'Send message'}
						</button>
						{status && <p className={`text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</p>}
					</form>
				</div>
			</div>
		</div>
	)
}
