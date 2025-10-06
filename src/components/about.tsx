import { Martian_Mono } from 'next/font/google'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const martianMono = Martian_Mono({
	subsets: ['latin'],
	weight: ['400', '700'], // wybierz potrzebne wagi
})

const Profile = () => (
	<div className="w-full h-auto flex justify-between items-center pt-16">
		<div className="rounded-lg shadow-[0_0_54.078px_0_rgba(255,255,255,0.20)] overflow-hidden w-[400px] h-[400px]">
			<img
				src="/assets/about_photo.png"
				alt="Mateusz 'mtroxok' Kozera"
				width={400}
				height={400}
				className="w-full h-full object-cover"
			/>
		</div>
		<div className="flex flex-col gap-5 max-w-4xl">
			<h3 className="text-2xl font-bold">About Me</h3>
			<p className="text-lg font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et rem dignissimos expedita rerum, recusandae
				debitis, numquam amet illo voluptatem cumque facilis neque eius saepe. Molestiae mollitia magni voluptatibus ut
				facere et neque fugit molestias architecto accusantium consequuntur asperiores, dolor laudantium dolores
				pariatur? Reiciendis ab nihil expedita exercitationem sapiente iusto quos quibusdam nam sed, enim culpa autem
				cum! Enim repellat eius commodi maxime beatae.
			</p>
			<div className="w-fit h-auto p-4 rounded-tr-4xl rounded-br-4xl pr-6 flex gap-1 items-center bg-[#374151]">
				<LocationOnIcon fontSize="large" />
				<p className="text-lg uppercase">wroclaw, warsaw - poland </p>
			</div>
		</div>
	</div>
)

export default function About() {
	return (
		<div className="w-full h-auto bg-[#171717] mt-24">
			<div className="container mx-auto py-16">
				<div className={`${martianMono.className} flex flex-col`}>
					<p className="font-extralight text-sm italic">cd home/dev/matrox_dev</p>
					<h3 className="font-regular text-2xl">
						return (<span className="text-green-400">AboutMe</span>)
					</h3>
				</div>
				<Profile />
			</div>
		</div>
	)
}
