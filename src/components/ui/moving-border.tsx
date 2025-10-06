'use client'

import React, { ElementType, useRef } from 'react'
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

type Polymorphic = ElementType

type ContactButtonProps = {
	borderRadius?: string
	children: React.ReactNode
	as?: Polymorphic
	containerClassName?: string
	borderClassName?: string
	duration?: number
	className?: string
	showMovingBorder?: boolean // added
	borderColor?: string // added
} & Record<string, unknown>

export function ContactButton({
	borderRadius = '1.75rem',
	children,
	as: Component = 'button',
	containerClassName,
	borderClassName,
	duration,
	className,
	showMovingBorder = true, 
	borderColor = '#0ea5e9',
	...otherProps
}: ContactButtonProps) {
	return (
		<Component
			className={cn(
				'relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl hover:scale-105 transition-all duration-300',
				containerClassName
			)}
			style={{ borderRadius }}
			{...otherProps}>
			{showMovingBorder && ( // <--- warunkowe renderowanie
				<div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
					<MovingBorder duration={duration} rx="30%" ry="30%">
						<div
							className={cn('h-20 w-20 opacity-[0.8]', borderClassName)}
							style={{
								background: `radial-gradient(${borderColor} 40%, transparent 60%)`,
							}}
						/>
					</MovingBorder>
				</div>
			)}

			<div
				className={cn(
					'relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl',
					className
				)}
				style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
				{children}
			</div>
		</Component>
	)
}

type MovingBorderProps = {
	children: React.ReactNode
	duration?: number
	rx?: string | number
	ry?: string | number
} & Record<string, unknown>

export const MovingBorder = ({ children, duration = 3000, rx, ry, ...otherProps }: MovingBorderProps) => {
	// Używamy SVGGeometryElement, aby mieć getTotalLength / getPointAtLength bez „any”
	const pathRef = useRef<SVGGeometryElement | null>(null)
	const progress = useMotionValue(0)

	useAnimationFrame(time => {
		const node = pathRef.current
		if (!node || !duration) return
		const length = node.getTotalLength()
		if (!length) return
		const pxPerMs = length / duration
		progress.set((time * pxPerMs) % length)
	})

	// Fallbacki na wypadek braku refa w pierwszym renderze – zwracamy 0
	const x = useTransform(progress, val => {
		const node = pathRef.current
		if (!node) return 0
		const p = node.getPointAtLength(val)
		return p?.x ?? 0
	})

	const y = useTransform(progress, val => {
		const node = pathRef.current
		if (!node) return 0
		const p = node.getPointAtLength(val)
		return p?.y ?? 0
	})

	const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className="absolute h-full w-full"
				width="100%"
				height="100%"
				{...otherProps}>
				<rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef as React.Ref<SVGRectElement>} />
			</svg>

			<motion.div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					display: 'inline-block',
					transform,
				}}>
				{children}
			</motion.div>
		</>
	)
}
