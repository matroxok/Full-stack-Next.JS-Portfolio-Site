'use client'

import { motion, useReducedMotion } from 'motion/react'

type RevealProps = {
	children: React.ReactNode
	className?: string
	delay?: number
	as?: 'div' | 'li'
}

// Fades and lifts content in once it enters the viewport; static when the user prefers reduced motion.
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
	const reduce = useReducedMotion()
	const Tag = as === 'li' ? motion.li : motion.div

	return (
		<Tag
			className={className}
			initial={reduce ? false : { opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
			{children}
		</Tag>
	)
}
