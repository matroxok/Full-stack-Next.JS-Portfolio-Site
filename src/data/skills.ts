// skills.ts
export interface Skill {
	items: { name: string; href?: string }[]
}

export const skills: Skill[] = [
	{
		items: [
			{ name: 'Next.js', href: 'https://nextjs.org/' },
			{ name: 'React', href: 'https://react.dev/' },
			{ name: 'Node.js', href: 'https://nodejs.org/' },
			{ name: 'Express.js', href: 'https://expressjs.com/' },
			{ name: 'Python', href: 'https://www.python.org/' },
			{ name: 'C++', href: 'https://isocpp.org/' },
		],
	},
	{
		items: [{ name: 'REST APIs' }, { name: 'Docker', href: 'https://www.docker.com/' }],
	},
	{
		items: [
			{ name: 'Git', href: 'https://git-scm.com/' },
			{ name: 'GitHub', href: 'https://github.com/' },
			{ name: 'Postman', href: 'https://www.postman.com/' },
		],
	},
	{
		items: [
			{ name: 'Adobe Photoshop', href: 'https://www.adobe.com/products/photoshop.html' },
			{ name: 'Adobe After Effects', href: 'https://www.adobe.com/products/aftereffects.html' },
			{ name: 'Adobe Premiere Pro', href: 'https://www.adobe.com/products/premiere.html' },
			{ name: 'Figma', href: 'https://www.figma.com/' },
		],
	},
	{
		items: [
			{ name: 'Windows', href: 'https://www.microsoft.com/windows/' },
			{ name: 'Linux', href: 'https://www.linux.org/' },
			{ name: 'macOS', href: 'https://www.apple.com/macos/' },
		],
	},
]
