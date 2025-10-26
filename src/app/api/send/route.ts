import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend'
import { MatroxDevConfirm } from '@/emails/matrox-dev-confirm'

export const runtime = 'nodejs'

const resend = new Resend(required('RESEND_API_KEY'))

function required(name: string) {
	const v = process.env[name]
	if (!v) throw new Error(`Missing env file: ${name}`)
	return v
}

const FROM_EMAIL = required('EMAIL_FROM')
const FROM_NAME = process.env.EMAIL_NAME ?? ''
const FROM = `${FROM_NAME} <${FROM_EMAIL}>`
const OWNER_EMAIL = required('EMAIL_CURRENT')

/** --- reCAPTCHA helpers --- */
type RecaptchaVerifyResponse = {
	success: boolean
	challenge_ts?: string
	hostname?: string
	'error-codes'?: string[]
	score?: number
	action?: string
}

async function verifyRecaptcha(token: string, remoteIp?: string) {
	const params = new URLSearchParams()
	params.append('secret', required('RECAPTCHA_SECRET_KEY'))
	params.append('response', token)
	if (remoteIp) params.append('remoteip', remoteIp)

	const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: params.toString(),
		cache: 'no-store',
	})

	const data = (await res.json()) as RecaptchaVerifyResponse
	return data
}

// captcha helper to get client IP
function getClientIp(req: NextRequest) {
	const xff = req.headers.get('x-forwarded-for')
	if (xff) return xff.split(',')[0]?.trim()
	return undefined
}

/** --- Route --- */
export async function POST(req: NextRequest) {
	try {
		const { name, email, message, recaptchaToken } = (await req.json()) as {
			name?: string
			email?: string
			message?: string
			recaptchaToken?: string
		}

		if (!email || !message) {
			return NextResponse.json({ ok: false, error: 'Missing required fields: email, message' }, { status: 400 })
		}

		if (!recaptchaToken) {
			return NextResponse.json({ ok: false, error: 'Missing reCAPTCHA token' }, { status: 400 })
		}

		const ip = getClientIp(req)
		const verification = await verifyRecaptcha(recaptchaToken, ip)

		if (!verification.success) {
			return NextResponse.json(
				{ ok: false, error: 'Failed reCAPTCHA verification', details: verification['error-codes'] ?? [] },
				{ status: 400 }
			)
		}

		const toYou = await resend.emails.send({
			from: FROM,
			to: OWNER_EMAIL,
			subject: `Nowe zgłoszenie od ${name ?? 'brak nadawcy'}`,
			html: `<p><b>Email:</b> ${email}</p><p>${message}</p>`,
		})

		const toClient = await resend.emails.send({
			from: FROM,
			to: email,
			subject: 'Thanks for your message!',
			react: MatroxDevConfirm({
				userFirstName: name ?? 'null',
				userEmail: email,
				userMessage: message,
				messageDate: new Date().toISOString().replace('T', ' ').split('.')[0],
			}),
		})

		return NextResponse.json({ ok: true, toYou, toClient })
	} catch (err: unknown) {
		console.error('Resend error:', err)
		return NextResponse.json({ ok: false, error: (err as Error)?.message ?? 'Unknown error' }, { status: 500 })
	}
}
