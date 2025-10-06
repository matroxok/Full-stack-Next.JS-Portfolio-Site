import { Nav } from '@/components/navbar'
import Hero from '@/components/hero'

export default function Home() {
	return (
		<>
			<div className="text-white">
				<nav className="sticky mt-5 top-0">
					<Nav></Nav>
				</nav>
				<main className="container mx-auto">
					<Hero></Hero>
				</main>
				<footer></footer>
			</div>
		</>
	)
}
