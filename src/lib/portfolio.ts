export interface PortfolioItem {
	items: { tech: string; title: string; secondtitle?: string; description: string; image: string; href?: string }[]
}

export const portfolio: PortfolioItem[] = [
	{
		items: [
			{
				tech: 'Next.js TailwindCSS Vercel Resend',
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
				tech: 'Next.js Express.js stripe Node.js docker mongodb tailwindcss',
				title: 'HealthyBox.be',
				description: 'Food Order Full-Stack App',
				image: '/assets/projects/matrox_dev_healthybox.png',
				href: 'https://healthybox.be',
			},
		],
	},
	{
		items: [
			{
				tech: 'soon',
				title: 'soon',
				description: 'soon',
				image: '/assets/projects/matrox_dev_in_progress.png',
			},
		],
	},
]
