import { Martian_Mono } from 'next/font/google'

// Shared instance so the mono font is generated and preloaded once, not per component.
export const martianMono = Martian_Mono({
	subsets: ['latin', 'latin-ext'],
	weight: ['200', '300', '400', '700'],
})
