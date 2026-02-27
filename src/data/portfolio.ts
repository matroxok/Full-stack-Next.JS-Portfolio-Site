'use client'

export interface PortfolioItem {
	items: { tech?: string; title: string; secondtitle?: string; description?: string; image?: string; href?: string }[]
}

export const portfolio: PortfolioItem[] = [
	{
		items: [
			{
				tech: 'Next.js TailwindCSS Vercel Resend i18n ZOD pnpm',
				title: 'matrox.dev',
				description: 'Personal landing page',
				image: '/assets/projects/matrox_dev_matroxdev.png',
				href: 'https://matrox.dev',
			},
		],
	},
	{
		items: [
			{
				tech: 'Next.js stripe Node docker mongodb tailwindcss',
				title: 'HealthyBox.be',
				description: 'Food Order Full-Stack App',
				image: '/assets/projects/matrox_dev_healthybox.png',
				href: 'https://matrox.dev',
			},
		],
	},
	{
		items: [
			{
				tech: 'Next.js PostgreSQL TailwindCSS IIIF-Viewer CI/CD Prisma Docker NextAuth goofys RESTAPI S3minio npm',
				title: 'Atlas of Medical Scans',
				description: 'Atlas of Medical Scnas for Facuty of Medicinice Wroclaw University of Science and Technology.',
				image: '/assets/projects/matrox_dev_atlas_skanow.png',
				href: 'https://wmed.pwr.edu.pl',
			},
		],
	},
]
