export interface DesignScreen {
	// Path inside /public, e.g. /assets/designs/healthybox/01-home.webp (export from Figma at 2x, WebP or AVIF).
	src: string
	// Alt text, filled in from messages: PortfolioPages.ui.items.<design id>.screens.<key>
	key: string
	// Real pixel size of the exported file, so next/image can reserve space and pick the right resolution.
	width: number
	height: number
}

export interface DesignItem {
	// Also the translation key: PortfolioPages.ui.items.<id>.description in messages/*.json
	id: string
	title: string
	tags?: string[]
	// Card cover; when omitted, the first screen is used.
	cover?: string
	screens: DesignScreen[]
	// Optional extra link (Figma, Behance, Dribbble…). The page works fine without it.
	externalUrl?: string
}

// Same shape with the texts already translated for the current locale.
export interface LocalizedDesignItem extends DesignItem {
	description?: string
	screens: (DesignScreen & { alt: string })[]
}

export const designs: DesignItem[] = [
	{
		id: 'e-science-wcss',
		title: 'E-Science.pl',
		tags: ['UI', 'Portal', 'Design System'],
		cover: '/assets/designs/wcss/01-home.png',
		screens: [{ src: '/assets/designs/wcss/01-home.png', key: 'home', width: 2880, height: 1800 }],
	},
	{
		id: 'healthybox',
		title: 'HealthyBox.be - food catering',
		tags: ['UI', 'Food Catering', 'Design System'],
		cover: '/assets/designs/healthybox/01-home.png',
		screens: [
			{ src: '/assets/designs/healthybox/01-home.png', key: 'home', width: 2880, height: 1800 },
			{ src: '/assets/designs/healthybox/02-offer.png', key: 'offer', width: 2880, height: 1800 },
			{ src: '/assets/designs/healthybox/03-full-offer.png', key: 'fullOffer', width: 2880, height: 1800 },
			{ src: '/assets/designs/healthybox/04-prices.png', key: 'prices', width: 2880, height: 1800 },
		],
	},
]
