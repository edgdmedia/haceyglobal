import type { Metadata } from 'next'; import { PolicyPage } from '@/components/site/policy-page';
export const metadata: Metadata = { title: 'Responsible AI Principles' };
const sections = [
  { title: 'Purpose before deployment', body: ['Use AI where it supports a defined human, service or organisational outcome. Do not treat adoption as an objective by itself.'] },
  { title: 'Accountability', body: ['Name accountable owners for the use case, data, controls, operation and decisions affected by the system. Responsibility remains with people and organisations.'] },
  { title: 'Proportionate risk management', body: ['Assess potential harm, affected groups, uncertainty and consequence. Apply stronger evaluation, approval and human oversight where impact is higher.'] },
  { title: 'Privacy, security and data stewardship', body: ['Use data lawfully and minimise exposure. Protect models, prompts, interfaces and outputs. Make provenance, permission and retention part of solution design.'] },
  { title: 'Transparency and human agency', body: ['Help users understand when AI materially shapes an interaction or decision, what its limits are and how to question, correct or escalate an outcome.'] },
  { title: 'Evaluation and continuous improvement', body: ['Test before release, monitor in context, document material changes and provide routes to pause or withdraw systems that do not meet the intended standard.'] },
];
export default function Page() { return <PolicyPage title="Responsible AI Principles" summary="Principles for designing, implementing and operating AI in ways that are useful, governable and proportionate to risk." sections={sections} review={false} />; }
