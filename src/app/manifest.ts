import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'matrox.dev | Mateusz Kozera',
		short_name: 'matrox.dev',
		description: 'Mateusz Kozera, Full Stack Web Developer & UI/UX Designer from Wrocław.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0a0a0a',
		theme_color: '#0a0a0a',
		icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
	}
}
