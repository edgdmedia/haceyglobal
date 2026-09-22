import type { Metadata } from 'next'; import { PolicyPage } from '@/components/site/policy-page';
export const metadata: Metadata = { title: 'Privacy Policy' };
const sections = [
  { title: 'Information we collect', body: ['We may collect the information you submit through an enquiry, such as your name, work email, organisation, area of interest and message. We may also receive limited technical information required to operate and secure the website.'] },
  { title: 'How we use information', body: ['We use enquiry information to respond, understand potential engagement needs, maintain business records and protect the website. We should not use submitted information for unrelated marketing without an appropriate basis or consent.'] },
  { title: 'Sharing and service providers', body: ['Information may be processed by approved hosting, email, form, analytics or professional service providers acting on HACEY Global’s instructions. The final production configuration should list material providers and international-transfer arrangements.'] },
  { title: 'Retention and security', body: ['Information should be retained only as long as needed for the purpose collected, legal obligations and legitimate business records. Proportionate administrative, technical and organisational safeguards should protect it.'] },
  { title: 'Your choices and rights', body: ['Depending on location, individuals may have rights to access, correct, delete, restrict or object to processing. Requests can be sent to isaiah@haceyglobal.com. Identity verification may be required.'] },
  { title: 'Contact', body: ['Questions about privacy should be sent to HACEY Global at isaiah@haceyglobal.com, Austin, Texas, USA. The final policy should include the legal entity name, effective date and jurisdiction-specific disclosures after counsel review.'] },
];
export default function Page() { return <PolicyPage title="Privacy Policy" summary="How HACEY Global intends to collect, use, protect and respond to requests about personal information." sections={sections} />; }
