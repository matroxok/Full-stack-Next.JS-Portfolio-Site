import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import { martianMono } from '@/lib/fonts'
import { LanguageMenu } from './ui/languageMenu'
import Footer from './footer'

// Page frame for the portfolio subpages: the home navbar only links to sections of the home page,
// so subpages get a compact header with a way back instead.
export default function SubpageShell({ children }: { children: React.ReactNode }) {
	const t = useTranslations('PortfolioPages')

	return (
		<div id="home" className="flex min-h-screen w-full flex-col text-white">
			<header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md px-5 lg:px-0">
				<div className="container mx-auto flex items-center justify-between gap-4 py-4">
					<div className="flex items-center gap-6">
						<Link href="/" aria-label="matrox.dev, home" className="shrink-0">
							<Image src="/logo.svg" alt="matrox.dev" width={140} height={40} className="h-auto w-28 lg:w-36" priority />
						</Link>
						<Link
							href="/#portfolio"
							className={`${martianMono.className} group hidden sm:inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-green-400`}>
							<ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-1" />
							{t('back')}
						</Link>
					</div>
					<LanguageMenu />
				</div>
			</header>
			<main className="flex-1 bg-[#171717]">{children}</main>
			<Footer />
		</div>
	)
}
