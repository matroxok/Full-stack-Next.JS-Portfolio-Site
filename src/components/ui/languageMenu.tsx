'use client'

import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LanguageSelector from '../languageSelector'
import { motion, AnimatePresence } from 'motion/react'

const dropdownVariants = {
	hidden: {
		opacity: 0,
		y: -10,
		scale: 0.95,
		transition: { duration: 0.15 },
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.2 },
	},
	exit: {
		opacity: 0,
		y: -10,
		scale: 0.95,
		transition: { duration: 0.15 },
	},
}

export function LanguageMenu() {
	const locale = useLocale()
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!open) return

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpen(false)
			}
		}

		window.addEventListener('keydown', handleEscape)

		return () => {
			window.removeEventListener('keydown', handleEscape)
		}
	}, [open])

	const flagByLocale: Record<string, string> = {
		pl: '/languages/pl.svg',
		en: '/languages/uk.svg',
		de: '/languages/de.svg',
		be: '/languages/nl.svg',
	}

	const flagSrc = flagByLocale[locale] ?? '/languages/en.svg'

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (!ref.current?.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [])

	return (
		<div ref={ref} className="relative">
			<button
				onClick={() => setOpen(v => !v)}
				className="h-10 w-10 flex items-center justify-center rounded-md hover:bg-[#374151] transition-colors cursor-pointer">
				<Image src={flagSrc} alt={locale} width={22} height={22} />
			</button>

			<AnimatePresence>
				{open && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="absolute top-full right-0 mt-2 w-40 p-2 
				bg-[#171717] shadow-sky-300/50 
				dark:bg-neutral-950 rounded-lg shadow-sm z-50">
						<LanguageSelector onSelect={() => setOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
