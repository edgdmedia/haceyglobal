import type { Metadata } from 'next'; import { PolicyPage } from '@/components/site/policy-page';
export const metadata: Metadata = { title: 'Security Overview' };
const sections = [
  { title: 'Website security', body: ['The site should be deployed over HTTPS with managed hosting, least-privilege administration, dependency monitoring, secure headers, protected environment variables and a documented update process.'] },
  { title: 'Enquiries and data', body: ['The contact form collects the minimum information needed to respond. The production form endpoint should include rate limiting, spam controls, validated inputs, encrypted transport, restricted access and defined retention.'] },
  { title: 'Client work', body: ['Security requirements for consulting or technology engagements are defined for the client environment, information sensitivity and solution risk. Controls may include identity, encryption, auditability, secure delivery practices, vendor review, incident handling and continuity planning.'] },
  { title: 'Responsible disclosure', body: ['Suspected security issues concerning the website can be reported to isaiah@haceyglobal.com. Do not access, change or retain data beyond what is necessary to demonstrate the issue. A dedicated security contact and disclosure process should be established before large-scale launch.'] },
  { title: 'Assurance boundaries', body: ['This overview does not claim certifications, formal attestations or universal control coverage. Any future certification, compliance or partner claim must be verified and precisely scoped before publication.'] },
];
export default function Page() { return <PolicyPage title="Security Overview" summary="How security should be approached across the website and HACEY Global engagements." sections={sections} review={false} />; }
