'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = ['Strategy and Transformation', 'AI and Data', 'Cloud', 'Enterprise Platforms', 'Custom Technology', 'Programme Management', 'Healthcare Technology', 'Government Technology', 'Financial Services', 'Partnerships', 'General Enquiries'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending');
    // Hold the element: React clears event.currentTarget after the first await.
    const element = event.currentTarget;
    const data = Object.fromEntries(new FormData(element).entries());
    try { const response = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) }); if (!response.ok) throw new Error(); setStatus('sent'); element.reset(); } catch { setStatus('error'); }
  }
  return <form className="contact-form" onSubmit={submit} aria-describedby="form-status">
    <div className="form-row"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
    <div className="form-row"><label>Work email<input type="email" name="email" autoComplete="email" required /></label><label>Organisation<input name="organisation" autoComplete="organization" required /></label></div>
    <label>What would you like to discuss?<select name="category" required defaultValue=""><option value="" disabled>Select an area</option>{categories.map(x => <option value={x} key={x}>{x}</option>)}</select></label>
    <label>Challenge or opportunity<textarea name="message" rows={6} required placeholder="Briefly describe the context, intended outcome and current stage." /></label>
    <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="consent"><input type="checkbox" name="consent" required /> <span>I agree that HACEY Global may use this information to respond to my enquiry. See the <a href="/privacy">Privacy Policy</a>.</span></label>
    <button type="submit" disabled={status === 'sending'} className="button button-accent submit-button">{status === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowRight /></button>
    <p id="form-status" role="status" className="form-status">{status === 'sent' && 'Thank you. Your enquiry has been sent.'}{status === 'error' && <>Your enquiry could not be sent. Please try again, or email <a href="mailto:isaiah@haceyglobal.com">isaiah@haceyglobal.com</a> directly.</>}</p>
  </form>;
}
