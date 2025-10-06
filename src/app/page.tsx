import { Nav } from '@/components/navbar'
import Hero from '@/components/hero'

export default function Home() {
	return (
		<>
			<div className="text-white w-full h-full">
				<nav className="sticky mt-5 top-0 z-[100]">
					<Nav></Nav>
				</nav>
				<main className="container mx-auto">
					<Hero></Hero>
					<div className="h-[100vh]"></div>
				</main>
				<footer></footer>
			</div>
		</>
	)
}
