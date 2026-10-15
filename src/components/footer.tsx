import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { IconArrowUp, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'

import { martianMono } from '@/lib/fonts'
import { AUTHOR } from '@/lib/site'

export default function Footer() {
	const t = useTranslations('Footer')
	const year = new Date().getFullYear()

	const links = [
		{ href: AUTHOR.github, label: 'GitHub', Icon: IconBrandGithub },
		{ href: AUTHOR.linkedin, label: 'LinkedIn', Icon: IconBrandLinkedin },
		{ href: `mailto:${AUTHOR.email}`, label: 'Email', Icon: IconMail },
	]

	return (
		<footer className="w-full border-t border-dotted border-[#D4D4D4]/40 px-5 lg:px-0">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10">
				<div className="flex flex-col items-center md:items-start gap-2">
					<Image src="/logo.svg" alt="matrox.dev" width={140} height={40} className="h-auto w-32" />
					<p className={`${martianMono.className} text-xs text-neutral-400`}>
						&copy; {year} {AUTHOR.name}. {t('rights')}
					</p>
				</div>

				<ul className="flex items-center gap-3">
					{links.map(({ href, label, Icon }) => (
						<li key={label}>
							<a
								href={href}
								target={href.startsWith('mailto:') ? undefined : '_blank'}
								rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer me'}
								aria-label={label}
								className="flex size-10 items-center justify-center rounded-md border border-neutral-700 text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#53C1DE] hover:text-[#53C1DE]">
								<Icon aria-hidden="true" stroke={1.5} className="size-5" />
							</a>
						</li>
					))}
					<li>
						<a
							href="#home"
							className={`${martianMono.className} ml-2 flex items-center gap-1 text-xs text-neutral-400 transition-colors duration-200 hover:text-green-400`}>
							<IconArrowUp aria-hidden="true" stroke={1.5} className="size-4" />
							{t('backToTop')}
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
