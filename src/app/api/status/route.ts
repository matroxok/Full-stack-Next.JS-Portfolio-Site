// export async function GET(_req: Request) {
// 	return Response.json({ message: 'API is running' })
// }

// app/api/status/route.ts
export async function GET(request: Request) {
	const accept = request.headers.get('accept') ?? ''
	if (accept.includes('application/json')) {
		return Response.json({ message: 'API is running' })
	}
	const html = `<!doctype html>
  <html><head><meta charset="utf-8"><title>Status</title></head>
  <body style="display:grid;place-items:center;height:100vh;font-family:system-ui">
    <div style="padding:24px;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 1px 2px rgba(0,0,0,.05)">
      <h1 style="margin:0 0 8px;font-size:24px">Status</h1>
      <p style="margin:0;color:#6b7280">API is running</p>
    </div>
  </body></html>`
	return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } })
}
