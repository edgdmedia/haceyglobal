import { getCloudflareContext } from '@opennextjs/cloudflare';

const REQUIRED = ['firstName', 'lastName', 'email', 'organisation', 'category', 'message', 'consent'] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 5000;

const DEFAULT_TO = 'isaiah@haceyglobal.com';
const DEFAULT_FROM = 'noreply@haceyglobal.com';

/** Escape for HTML text nodes and attribute values. */
function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Collapse to a single line — used anywhere a value reaches a mail header. */
function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = (await request.json()) as Record<string, string>;
  } catch {
    return Response.json({ error: 'Invalid submission' }, { status: 400 });
  }

  // Honeypot: silently accept so bots get no signal.
  if (data.website) return Response.json({ ok: true });

  const invalid =
    REQUIRED.some((field) => !data[field] || data[field].length > MAX_FIELD) ||
    !EMAIL_RE.test(data.email || '');
  if (invalid) return Response.json({ error: 'Invalid submission' }, { status: 400 });

  const { env } = await getCloudflareContext({ async: true });

  if (!env.EMAIL) {
    return Response.json({ error: 'Email service not configured' }, { status: 503 });
  }

  const to = env.CONTACT_TO_EMAIL || DEFAULT_TO;
  const from = env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

  const name = oneLine(`${data.firstName} ${data.lastName}`);
  const organisation = oneLine(data.organisation);
  const category = oneLine(data.category);
  const subject = `Website enquiry — ${category} — ${organisation}`.slice(0, 200);

  const fields: [string, string][] = [
    ['Name', name],
    ['Email', data.email],
    ['Organisation', organisation],
    ['Area of interest', category],
  ];

  const text = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    data.message,
    '',
    '— Sent from the haceyglobal.com contact form',
  ].join('\n');

  const html = [
    '<h2 style="margin:0 0 16px">New website enquiry</h2>',
    '<table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">',
    ...fields.map(
      ([label, value]) =>
        `<tr><td style="color:#555"><strong>${esc(label)}</strong></td><td>${esc(value)}</td></tr>`,
    ),
    '</table>',
    '<h3 style="margin:20px 0 8px">Message</h3>',
    `<p style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:14px">${esc(data.message)}</p>`,
    '<hr style="margin:24px 0;border:0;border-top:1px solid #ddd">',
    '<p style="color:#777;font-size:12px">Sent from the haceyglobal.com contact form.</p>',
  ].join('');

  try {
    await env.EMAIL.send({
      to,
      from: { email: from, name: 'HACEY Global Website' },
      replyTo: data.email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error('Contact form delivery failed', error);
    return Response.json({ error: 'Delivery failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
