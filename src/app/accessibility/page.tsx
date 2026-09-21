import type { Metadata } from 'next'; import { PolicyPage } from '@/components/site/policy-page';
export const metadata: Metadata = { title: 'Accessibility Statement' };
const sections = [
  { title: 'Our commitment', body: ['HACEY Global intends this website to be usable by as many people as practical, including people who use keyboards, screen readers, magnification, voice control or reduced-motion settings. The design targets WCAG 2.2 Level AA principles.'] },
  { title: 'Measures included', body: ['The site uses semantic headings and landmarks, visible keyboard focus, a skip link, labelled forms, sufficient text size, responsive layouts, reduced-motion support and alternatives to colour-only meaning.'] },
  { title: 'Known limitations', body: ['Automated and manual review should continue before and after production launch. Third-party form, analytics, consent or embedded tools must be evaluated when selected because their accessibility may sit outside this source code.'] },
  { title: 'Feedback', body: ['If you encounter an accessibility barrier or need information in another format, email isaiah@haceyglobal.com. Include the page, the problem and the assistive technology or browser if comfortable doing so.'] },
];
export default function Page() { return <PolicyPage title="Accessibility Statement" summary="Our intended standard for an accessible, inclusive digital experience." sections={sections} review={false} />; }
