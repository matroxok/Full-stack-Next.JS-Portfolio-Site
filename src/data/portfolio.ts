'use client'

export interface PortfolioItem {
	items: {
		id?: string
		tech?: string
		title: string
		secondtitle?: string
		description?: string
		image?: string
		href?: string
	}[]
}

export const portfolio: PortfolioItem[] = [
	{
		items: [
			{
				tech: 'Next.js TailwindCSS Vercel Resend i18n ZOD pnpm',
				id: 'matroxDev',
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
				tech: 'Next.js Stripe Node Docker MongoDB TailwindCSS',
				id: 'HealthyBox',
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
				tech: 'Next.js PostgreSQL TailwindCSS IIIF-Viewer CI/CD Prisma Docker NextAuth goofys REST-API MinIO-S3 npm',
				id: 'AtlasScans',
				title: 'Atlas of Medical Scans',
				description: 'Atlas of Medical Scans for the Faculty of Medicine of Wrocław University of Science and Technology.',
				image: '/assets/projects/matrox_dev_atlas_skanow.png',
				href: 'https://wmed.pwr.edu.pl/o-wydziale/aktualnosci/mikroskop-w-telefonie-wydzial-medyczny-pwr-udostepnia-cyfrowy-atlas-histopatologiczny-swoim-studentom-222.html',
			},
		],
	},
	{
		items: [
			{
				tech: 'Next.js TailwindCSS Vercel NPM Figma GitHub',
				id: 'DTIControl',
				title: 'DTIControl.pl',
				description:
					'Landing page for DTIControl.pl, a Polish construction company with over 20 years of experience in the construction industry.',
				image: '/assets/projects/matrox_dev_dticontrol.png',
				href: 'https://dticontrol.pl',
			},
		],
	},
]
