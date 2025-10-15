// src/app/api/send/route.ts
import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(required('RESEND_API_KEY'))

function required(name: string) {
	const v = process.env[name]
	if (!v) throw new Error(`Missing env var: ${name}`)
	return v
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
			subject: `Nowe zgłoszenie od ${name ?? 'bez imienia'}`,
			html: `<p><b>Email:</b> ${email}</p><p>${message}</p>`,
		})

		// client confirmation
		const toClient = await resend.emails.send({
			from: FROM,
			to: email,
			subject: 'Dziękujemy za wiadomość',
			html: `<p>Cześć ${name ?? ''} — mamy Twoją wiadomość, odezwiemy się wkrótce.</p>`,
		})

		return NextResponse.json({ ok: true, toYou, toClient })
	} catch (err: any) {
		console.error('Resend error:', err)
		return NextResponse.json({ ok: false, error: err?.message ?? 'Unknown error' }, { status: 500 })
	}
}
