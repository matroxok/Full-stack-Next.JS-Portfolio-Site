import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '700', '500', '300'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://www.matrox.dev'),
	title: {
		default: 'matrox.dev | Mateusz Kozera — Web Developer & UI/UX',
		template: '%s | matrox.dev',
	},
	description:
		'Welocme on my personal website! I am Mateusz Kozera, IT Worker & Student. Currently i have over 2 yeras of expirience in High Performance Computing (HPC) and Web Development. Here you can find my projects, blog posts and contact information. Enjoy!',
	applicationName: 'matrox.dev',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: 'https://matrox.dev',
		siteName: 'matrox.dev ',
		title: 'Mateusz Kozera — Web Developer & UI/UX',
		description:
			'I am Mateusz Kozera, IT Worker & Student. Currently i have over 2 yeras of expirience in High Performance Computing (HPC) and Web Development.',
		images: ['/og.jpg'],
		locale: 'en_EN',
	},
	icons: {
		icon: '/favicon.ico',
	},
	manifest: '/site.webmanifest',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} bg-[#0a0a0a]`}>{children}</body>
		</html>
	)
}
