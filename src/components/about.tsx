import LocationOnIcon from '@mui/icons-material/LocationOn'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { martianMono } from '@/lib/fonts'
import { Reveal } from './ui/reveal'

function Profile() {
	const t = useTranslations('About')

	return (
		<Reveal className="w-full h-auto flex justify-between items-center pt-16">
			<motion.div
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="hidden lg:block relative w-100 h-100 rounded-lg overflow-hidden shadow-[0_0_54.078px_0_rgba(255,255,255,0.20)] will-change-transform "
				variants={{
					rest: { scale: 1 },
					hover: { scale: 1.03 },
				}}
				transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
				<motion.img
					src="/assets/about_photo.png"
					alt={t('photoAlt')}
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
					<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
					<motion.p
						className="relative z-10 text-white text-lg font-regular text-center"
						variants={{
							rest: { y: 16, opacity: 0 },
							hover: { y: 0, opacity: 1 },
						}}
						transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.05 }}>
						{t('photoCaption')}
						<br />
						<span className="text-sm font-light italic">{t('photoPlace')}</span>
					</motion.p>
				</motion.div>
			</motion.div>
			<div className="flex flex-col gap-5 lg:max-w-4xl lg:ml-12">
				<h2 className="text-lg lg:text-2xl font-bold">{t('title')}</h2>
				<p className="text-sm lg:text-base font-light text-neutral-200 lg:text-justify leading-relaxed">
					{t('description')}
				</p>
				<div className="w-fit h-auto p-4 rounded-2xl lg:rounded-tr-4xl lg:rounded-br-4xl items-center lg:pr-6 flex gap-1 bg-[#374151]">
					<div className="inline-block lg:hidden">
						<LocationOnIcon fontSize="small" />
					</div>
					<div className="hidden lg:inline-block">
						<LocationOnIcon fontSize="large" />
					</div>
					<p className="text-sm lg:text-lg uppercase ">{t('city')}</p>
				</div>
			</div>
		</Reveal>
	)
}

export default function About() {
	return (
		<section id="about" className="w-full h-auto scroll-mt-24 px-5 lg:px-0 bg-[#171717] mt-24">
			<div className="container mx-auto py-16">
				<div className={`${martianMono.className} flex flex-col`}>
					<p className="font-extralight text-xs lg:text-sm italic">cd home/dev/matrox_dev</p>
					<p aria-hidden="true" className="font-regular text-md lg:text-2xl">
						return (<span className="text-green-400">AboutMe</span>)
					</p>
				</div>
				<Profile />
			</div>
		</section>
	)
}
