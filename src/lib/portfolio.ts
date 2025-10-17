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
				image: '/assets/portfolio/landing.png',
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
				image: '/assets/portfolio/landing.png',
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
				image: '/assets/portfolio/landing.png',
			},
		],
	},
]
