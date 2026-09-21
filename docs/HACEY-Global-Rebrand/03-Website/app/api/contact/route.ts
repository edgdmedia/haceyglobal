export async function POST(request: Request) {
  const data = await request.json() as Record<string, string>;
  if (data.website) return Response.json({ ok: true });
  const required = ['firstName', 'lastName', 'email', 'organisation', 'category', 'message', 'consent'];
  if (required.some(field => !data[field]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) return Response.json({ error: 'Invalid submission' }, { status: 400 });
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) return Response.json({ error: 'Form endpoint not configured' }, { status: 503 });
  const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, source: 'haceyglobal.com' }) });
  if (!response.ok) return Response.json({ error: 'Delivery failed' }, { status: 502 });
  return Response.json({ ok: true });
}
