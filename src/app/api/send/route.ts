// src/app/api/send/route.ts
import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(required('RESEND_API_KEY'))

function required(name: string) {
	const env = process.env[name]
	if (!env) throw new Error(`Missing env file: ${name}`)
	return env
}

const FROM_EMAIL = required('EMAIL_FROM')
const FROM_NAME = process.env.EMAIL_NAME ?? 'Twoja Firma'
const FROM = `${FROM_NAME} <${FROM_EMAIL}>`
const OWNER_EMAIL = required('EMAIL_CURRENT')

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json()

		if (!email || !message) {
			return NextResponse.json({ ok: false, error: 'Missing required fields: email, message' }, { status: 400 })
		}

		// ticket
		const toYou = await resend.emails.send({
			from: FROM,
			to: OWNER_EMAIL,
			subject: `Nowe zgłoszenie od ${name ?? 'brak nadawcy'}`,
			html: `<p><b>Email:</b> ${email}</p><p>${message}</p>`,
			// tba react email teamplate
		})

		// client confirmation
		const toClient = await resend.emails.send({
			from: FROM,
			to: email,
			subject: 'Thanks for your message!',
			html: `<p>Hello, ${name ?? ''} — your message has been successfully sent! I will get back to you soon.</p>`,
			// tba react email teamplate
		})

		return NextResponse.json({ ok: true, toYou, toClient })
	} catch (err: any) {
		console.error('Resend error:', err)
		return NextResponse.json({ ok: false, error: err?.message ?? 'Unknown error' }, { status: 500 })
	}
}
