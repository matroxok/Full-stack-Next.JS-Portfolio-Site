import { martianMono } from '@/lib/fonts'

type Props = {
	path: string
	title: string
	id?: string
	as?: 'h1' | 'h2'
	description?: string
}

// The "cd … / return ( title )" heading used by every portfolio section.
export function TerminalHeading({ path, title, id, as: Heading = 'h2', description }: Props) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className={`${martianMono.className} flex flex-col items-center`}>
				<p className="font-extralight text-xs lg:text-sm italic">{path}</p>
				<div className="font-regular text-md lg:text-2xl">
					<span aria-hidden="true">return (</span>
					<Heading id={id} className="inline text-green-400">
						{title}
					</Heading>
					<span aria-hidden="true">)</span>
				</div>
			</div>
			{description && <p className="mt-4 max-w-xl text-sm lg:text-base text-neutral-400">{description}</p>}
		</div>
	)
}
