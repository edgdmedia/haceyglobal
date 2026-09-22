import type { Metadata } from 'next'; import { PolicyPage } from '@/components/site/policy-page';
export const metadata: Metadata = { title: 'Cookie Policy' };
const sections = [
  { title: 'Current approach', body: ['The preview is designed to work without advertising cookies. The production site should use only essential storage until an approved analytics platform and consent configuration are selected.'] },
  { title: 'Types of cookies', body: ['Essential cookies support security, session continuity and core website operation. Analytics cookies may help understand aggregate usage. Preference cookies may remember choices. Marketing cookies should not be enabled unless explicitly approved and properly disclosed.'] },
  { title: 'Consent and control', body: ['Where required, non-essential cookies should remain disabled until a visitor provides consent. Visitors should be able to change or withdraw that choice as easily as they gave it.'] },
  { title: 'Production register', body: ['Before launch, complete a cookie inventory naming each cookie, provider, purpose, duration and category. Update this policy and the consent interface when tools change.'] },
];
export default function Page() { return <PolicyPage review={false} title="Cookie Policy" summary="The intended approach to cookies and similar technologies on the HACEY Global website." sections={sections} />; }
