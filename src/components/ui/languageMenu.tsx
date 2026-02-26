'use client'

import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LanguageSelector from '../languageSelector'

export function LanguageMenu() {
	const locale = useLocale()
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

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

			{open && (
				<div className="absolute top-full right-0 mt-2 w-40 p-2 bg-gray-500 dark:bg-neutral-950 rounded-lg shadow-lg z-50">
					<LanguageSelector onSelect={() => setOpen(false)} />
				</div>
			)}
		</div>
	)
}
