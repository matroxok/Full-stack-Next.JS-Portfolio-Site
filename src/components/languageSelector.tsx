'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const languages = [
	{ code: 'pl', label: 'Polski', flag: '/languages/pl.svg' },
	{ code: 'en', label: 'English', flag: '/languages/uk.svg' },
	{ code: 'de', label: 'Deutsch', flag: '/languages/de.svg' },
	{ code: 'be', label: 'Nederlands', flag: '/languages/nl.svg' },
]

export default function LanguageSelector({ onSelect }: { onSelect?: () => void }) {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	const handleChange = (newLocale: string) => {
		if (newLocale === locale) return

		const segments = pathname.split('/')
		segments[1] = newLocale

		router.push(segments.join('/'))
		onSelect?.()
	}

	return (
		<div className="flex flex-col gap-2 min-w-40'">
			{languages.map(lang => (
				<button
					key={lang.code}
					onClick={() => handleChange(lang.code)}
					className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
						locale === lang.code
							? 'bg-sky-300/70 text-black/80 font-semibold dark:bg-neutral-800'
							: 'hover:bg-gray-100/10 dark:hover:bg-neutral-900 cursor-pointer'
					}`}>
					<Image src={lang.flag} alt={lang.label} width={20} height={20} />
					{lang.label}
				</button>
			))}
		</div>
	)
}
