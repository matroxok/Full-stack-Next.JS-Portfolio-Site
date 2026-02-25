import { Martian_Mono } from 'next/font/google'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
})

import { motion } from 'framer-motion'
function Profile() {
	return (
		<div className="w-full h-auto flex justify-between items-center pt-16">
			<motion.div
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="hidden lg:block relative w-[400px] h-[400px] rounded-lg overflow-hidden shadow-[0_0_54.078px_0_rgba(255,255,255,0.20)] will-change-transform "
				variants={{
					rest: { scale: 1 },
					hover: { scale: 1.03 },
				}}
				transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
				<motion.img
					src="/assets/about_photo.png"
					alt="Mateusz 'mtroxok' Kozera"
					width={400}
					height={400}
					className="w-full h-full object-cover object-bottom"
					variants={{
						rest: { y: 0, scale: 1 },
						hover: { y: -10, scale: 1.05 },
					}}
					transition={{ type: 'spring', stiffness: 300, damping: 22 }}
				/>
				<motion.div
					className="absolute inset-0 cursor-pointer flex items-end justify-center p-6"
					variants={{
						rest: { opacity: 0, y: 20 },
						hover: { opacity: 1, y: 0 },
					}}
					transition={{ duration: 0.25 }}>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
					<motion.h3
						className="relative z-10 text-white text-lg font-regular text-center"
						variants={{
							rest: { y: 16, opacity: 0 },
							hover: { y: 0, opacity: 1 },
						}}
						transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.05 }}>
						Trip to National Stadium of Poland
						<br />
						<span className="text-sm font-light italic">09.11.2024, Warsaw</span>
					</motion.h3>
				</motion.div>
			</motion.div>
			<div className="flex flex-col gap-5 lg:max-w-4xl ml-12">
				<h3 className="text-lg lg:text-2xl font-bold">About Me</h3>
				<p className="text-sm lg:text-md font-light flex flex-col text-justify leading-relaxed">
					Hi, I&apos;m Mateusz — a person who has always believed that ambition and determination are the keys to
					growth. Programming isn&apos;t just my profession — it&apos;s something that genuinely brings me joy and
					satisfaction 👨‍💻.
					<span className="my-4">
						I believe that learning never truly ends 🧠. Every conversation, every shared experience, and every project
						is a chance to grow and see things from a new perspective.
					</span>
					In my free time, I enjoy playing Counter-Strike, working on car detailing, and creating videos, animations,
					and digital graphics — all of which allow me to express creativity in different forms.
				</p>
				<div className="w-fit h-auto p-4 rounded-2xl lg:rounded-tr-4xl lg:rounded-br-4xl items-center lg:pr-6 flex gap-1 bg-[#374151]">
					<div className="inline-block lg:hidden">
						<LocationOnIcon fontSize="small" />
					</div>
					<div className="hidden lg:inline-block">
						<LocationOnIcon fontSize="large" />
					</div>
					<p className="text-sm lg:text-lg uppercase ">wroclaw, Warsaw - Poland</p>
				</div>
			</div>
		</div>
	)
}

export default function About() {
	return (
		<div id="about" className="w-full h-auto px-5 lg:px-0 bg-[#171717] mt-24">
			<div className="container mx-auto py-16">
				<div className={`${martianMono.className} flex flex-col`}>
					<p className="font-extralight text-xs lg:text-sm italic">cd home/dev/matrox_dev</p>
					<h3 className="font-regular text-md lg:text-2xl">
						return (<span className="text-green-400">AboutMe</span>)
					</h3>
				</div>
				<Profile />
			</div>
		</div>
	)
}
