import { z } from 'zod'

export const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long').max(50, 'Name must be at most 50 characters long'),
	email: z.string().email('Invalid email address'),
	phone: z
		.string()
		.optional()
		.nullable()
		.refine(val => !val || /^\+?[1-9]\d{1,14}$/.test(val), 'Invalid phone number'),
	message: z
		.string()
		.min(10, 'Message must be at least 10 characters long')
		.max(1000, 'Message must be at most 1000 characters long'),
})

export type contactInput = z.infer<typeof contactSchema>
	