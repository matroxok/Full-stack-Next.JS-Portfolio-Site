'use client'

import { useState } from 'react'

import { Nav } from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Expirience from '@/components/expirience'
import ContactForm from '@/components/contact-form'

import TerminalWindow from '@/components/ui/succesTerminal'

export default function Home() {
	const [showTerminal, setShowTerminal] = useState(false)

	const handleCloseTerminal = () => {
		setShowTerminal(false)
	}

	const handleSuccess = () => {
		setShowTerminal(true)
	}

	return (
		<>
			{showTerminal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/80 transition-opacity duration-300">
					<TerminalWindow onClose={handleCloseTerminal} />
				</div>
			)}
			<div className="text-white w-full h-full">
				<nav className="sticky mt-5 top-0 z-[100]">
					<Nav></Nav>
				</nav>
				<main className="">
					<Hero></Hero>
					<About></About>
					<div className="w-full border-t border-dotted border-[#D4D4D4]"></div>
					<Expirience></Expirience>
					<ContactForm  onSuccess={handleSuccess}></ContactForm>
					<div className="h-[100vh]"></div>
				</main>
				<footer></footer>
			</div>
		</>
	)
}
