// skills.ts
export interface Skill {
	// key in the `Skills` translation namespace
	category: 'frontend' | 'learning' | 'backend' | 'tools' | 'design' | 'os'
	items: { name: string; href?: string }[]
}

export const skills: Skill[] = [
	{
		category: 'frontend',
		items: [
			{ name: 'Next.js', href: 'https://nextjs.org/' },
			{ name: 'HTML 5', href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
			{ name: 'CSS 3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
			{ name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
			{ name: 'React.js', href: 'https://react.dev/' },
			{ name: 'Node.js', href: 'https://nodejs.org/' },
			{ name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
			{ name: 'Python', href: 'https://www.python.org/' },
			{ name: 'C++', href: 'https://isocpp.org/' },
		],
	},
	{
		category: 'learning',
		items: [
			{ name: 'Django', href: 'https://www.djangoproject.com/' },
			{ name: 'GO', href: 'https://go.dev/' },
			{ name: 'React Native', href: 'https://reactnative.dev/' },
			{ name: 'Expo', href: 'https://expo.dev/' },
			{ name: 'C#', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
			{ name: 'Elasticsearch', href: 'https://www.elastic.co/' },
			{ name: 'Redis', href: 'https://redis.io/' },
		],
	},
	{
		category: 'backend',
		items: [
			{ name: 'REST APIs' },
			{ name: 'Docker', href: 'https://www.docker.com/' },
			{ name: 'CI/CD' },
			{ name: 'Microservices' },
			{ name: 'Podman', href: 'https://podman.io/' },
			{ name: 'NGINX', href: 'https://www.nginx.com/' },
			{ name: 'OAuth 2.0', href: 'https://oauth.net/2/' },
			{ name: 'Claude Code', href: 'https://www.claude.ai/' },
		],
	},
	{
		category: 'tools',
		items: [
			{ name: 'Git', href: 'https://git-scm.com/' },
			{ name: 'GitHub', href: 'https://github.com/' },
			{ name: 'GitLab', href: 'https://gitlab.com/' },
			{ name: 'Postman', href: 'https://www.postman.com/' },
			{ name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
			{ name: 'Icinga', href: 'https://icinga.com/' },
		],
	},
	{
		category: 'design',
		items: [
			{ name: 'shadcn/ui', href: 'https://ui.shadcn.com/' },
			{ name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
			{ name: 'Material UI', href: 'https://mui.com/' },
			{ name: 'Figma', href: 'https://www.figma.com/' },
		],
	},
	{
		category: 'os',
		items: [
			{ name: 'Windows', href: 'https://www.microsoft.com/windows/' },
			{ name: 'Linux', href: 'https://www.linux.org/' },
			{ name: 'macOS', href: 'https://www.apple.com/macos/' },
		],
	},
]
