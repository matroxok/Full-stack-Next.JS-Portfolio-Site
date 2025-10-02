import { Nav } from '@/components/navbar'

export default function Home() {
	return (
		<>
			<div className="text-white">
				<nav className="sticky mt-5 top-0">
					<Nav></Nav>
				</nav>
				<main className="container mx-auto"></main>
				<footer></footer>
			</div>
		</>
	)
}
