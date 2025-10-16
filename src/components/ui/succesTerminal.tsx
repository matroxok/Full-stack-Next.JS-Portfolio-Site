'use client'

import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal'

interface TerminalWindowProps {
	onClose: () => void
}

export default function TerminalWindow({ onClose }: TerminalWindowProps) {
	return (
		<div className="flex flex-col items-center gap-4">
			<Terminal>
				<TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
				<AnimatedSpan className="text-green-500">✔ Preflight checks.</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Verifying framework. Found Next.js.</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Validating Tailwind CSS.</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Validating import alias.</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Writing components.json.</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Checking registry.</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Updating tailwind.config.ts</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Updating app/globals.css</AnimatedSpan>
				<AnimatedSpan className="text-green-500">✔ Installing dependencies.</AnimatedSpan>
				<AnimatedSpan className="text-blue-500">
					<span>ℹ Updated 1 file:</span>
					<span className="pl-2">- lib/utils.ts</span>
				</AnimatedSpan>
				<TypingAnimation className="text-muted-foreground">Success! Project initialization completed.</TypingAnimation>
				<TypingAnimation className="text-muted-foreground">You may now add components.</TypingAnimation>
			</Terminal>

			<button
				onClick={onClose}
				className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200">
				Gotowe
			</button>
		</div>
	)
}
