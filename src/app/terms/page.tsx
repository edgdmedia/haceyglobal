import type { Metadata } from 'next'; import { PolicyPage } from '@/components/site/policy-page';
export const metadata: Metadata = { title: 'Terms of Use' };
const sections = [
  { title: 'Informational purpose', body: ['Website content is provided for general information and does not create a consulting, legal, financial, medical or other professional relationship. An engagement exists only under an executed agreement.'] },
  { title: 'Accuracy and availability', body: ['HACEY Global aims to keep content useful and current but does not warrant that every page is complete, current or continuously available. Product and illustrative engagement pages describe concepts rather than deployed customer products or results unless stated otherwise.'] },
  { title: 'Intellectual property', body: ['Website text, visual design and original materials are owned by or licensed to HACEY Global, subject to third-party rights and applicable law. Reasonable linking is permitted; reproduction or commercial reuse requires permission.'] },
  { title: 'Acceptable use and links', body: ['Visitors must not interfere with the site, probe security, submit unlawful material or misrepresent identity. Third-party links are provided for context and do not imply endorsement.'] },
  { title: 'Liability and governing terms', body: ['The final limitation of liability, warranty disclaimer, governing law and dispute terms require review by qualified counsel for the operating legal entity and target markets.'] },
];
export default function Page() { return <PolicyPage review={false} title="Terms of Use" summary="The conditions that should govern use of the HACEY Global website and its informational content." sections={sections} />; }
