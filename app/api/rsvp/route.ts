const requiredFields = ['name', 'attending'] as const;

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!scriptUrl) return Response.json({ error: 'RSVP storage is not configured' }, { status: 503 });

  const data = await request.json() as Record<string, unknown>;
  if (requiredFields.some((field) => data[field] === undefined || data[field] === '')) {
    return Response.json({ error: 'Missing required RSVP information' }, { status: 400 });
  }

  const response = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
  });

  const result = await response.json().catch(() => null) as { ok?: boolean } | null;
  if (!response.ok || !result?.ok) return Response.json({ error: 'Google Sheet submission failed' }, { status: 502 });
  return Response.json({ ok: true });
}
