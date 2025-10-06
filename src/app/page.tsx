import { Nav } from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Expirience from '@/components/expirience'

import Image from 'next/image'

export default function Home() {
	return (
		<>
			<div className="text-white w-full h-full">
				<nav className="sticky mt-5 top-0 z-[100]">
					<Nav></Nav>
				</nav>
				<main className="">
					<Hero></Hero>
					<About></About>
					<div className="w-full border-t border-dotted border-[#D4D4D4]"></div>
					<Expirience></Expirience>
					<div className="h-[100vh]"></div>
				</main>
				<footer></footer>
			</div>
		</>
	)
}
