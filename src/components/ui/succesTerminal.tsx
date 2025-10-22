'use client'

import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal'

interface TerminalWindowProps {
	onClose: () => void
}

export default function TerminalWindow({ onClose }: TerminalWindowProps) {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
			<div
				className="w-full max-w-[56rem] md:w-[min(92vw,56rem)] 
                   rounded-2xl border border-white/10 bg-neutral-900/40
                   shadow-2xl ring-1 ring-white/10 flex flex-col gap-6 
                   p-4 sm:p-6 max-h-[80svh] md:max-h-[80vh]">
				{/* MOBILE */}
				<div className="block md:hidden">
					<div className="flex flex-col items-center text-center gap-3 px-1">
						<div className="text-4xl">✉️</div>
						<h2 className="text-lg text-white font-semibold">Success!</h2>
						<p className="text-xs text-neutral-300 leading-relaxed">
							Thanks! Your message has been delivered. You’ll receive a confirmation in your inbox shortly.
						</p>
					</div>

					<div className="mt-6 flex items-center justify-center">
						<button
							onClick={onClose}
							className=" bg-green-400 hover:bg-green-800 text-black
                         font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer text-sm">
							Close
						</button>
					</div>
				</div>

				{/* DESKTOP */}
				<div className="hidden md:block">
					<div className="relative mb-4 w-fit h-fit">
						{/* <div className="absolute top-0 right-0 w-[6px] h-[6px] rounded-full bg-red-400 animate-pulse"></div> */}
						<p className="text-white text-lg">Notification</p>
					</div>
					<div
						className="max-h-[60svh] md:max-h-[65vh] overflow-y-auto
                       [scrollbar-width:thin] [scrollbar-color:theme(colors.neutral.600)_transparent]">
						<Terminal className="w-full text-[clamp(0.9rem,1.1vw,1rem)] leading-relaxed bg-neutral-700">
							<TypingAnimation className="text-white pb-2">
								root@matrox.dev &gt; contact-form execute --send-message
							</TypingAnimation>
							<AnimatedSpan className="text-green-500">✔ Checking form integrity...</AnimatedSpan>
							<AnimatedSpan className="text-green-500">✔ Validating input fields.</AnimatedSpan>
							<AnimatedSpan className="text-green-500">✔ No validation errors detected.</AnimatedSpan>
							<AnimatedSpan className="text-green-500">✔ Preparing payload for API request.</AnimatedSpan>
							<AnimatedSpan className="text-blue-500">ℹ Connecting to /api/send endpoint...</AnimatedSpan>
							<AnimatedSpan className="text-green-500">✔ Sending message data securely via HTTPS.</AnimatedSpan>
							<AnimatedSpan className="text-green-500">✔ Mail server acknowledged the request.</AnimatedSpan>
							<AnimatedSpan className="text-green-500">✔ Message successfully dispatched.</AnimatedSpan>
							<TypingAnimation className="text-white pt-4 text-lg">
								Success! Your message has been sent 🧐.
							</TypingAnimation>
							<TypingAnimation className="text-white italic">
								You’ll receive a confirmation in your inbox shortly.
							</TypingAnimation>
						</Terminal>
					</div>

					<div className="mt-6 flex items-center justify-end">
						<button
							onClick={onClose}
							className="bg-green-500 hover:bg-green-700 text-black  
                         py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer hover:text-white">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
