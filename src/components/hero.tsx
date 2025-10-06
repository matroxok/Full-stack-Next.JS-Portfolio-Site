import { ContactButton } from './ui/moving-border'

export default function Hero() {
	return (
		<div className="flex justify-around mt-32">
			<div className="flex flex-col gap-6">
				<p className="font-semibold">
					Hi, I'm Mateusz <br /> <span className="uppercase font-normal">web developer & ui/ux designer</span>
				</p>
				<h1 className="flex flex-col gap-1 text-3xl font-bold text-">
					Your idea, My execution, <br />
					<span className="uppercase text-4xl">our succes</span>
				</h1>
				<h2 className="max-w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi numquam quam laudantium reprehenderit
					tempora soluta, nulla distinctio ratione animi officiis eveniet et earum, saepe vero dolore reiciendis
					laboriosam placeat explicabo sint?
				</h2>
				<ContactButton borderRadius="1.75rem" className="bg-none text-white border-blue-500 font-bold">
					Contact
				</ContactButton>
			</div>
			<div></div>
		</div>
	)
}
